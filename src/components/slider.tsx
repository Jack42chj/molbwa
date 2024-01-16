import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SliderSkeleton from "./skeleton/slider-skeleton";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase";
import { SliderType } from "../interface/interfaces";

const Wrapper = styled.div`
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ButtonWrapper = styled.div`
    display: flex;
`;

const NameTag = styled.span`    
    font-family: "BMJUA";
    font-size: 24px;
`;

const Container = styled.div`
    width: 100%;
    overflow: hidden;
`;

const ItemContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    & > div {
        flex: 0 0 calc(20% - 16.1px);
    }
`;

const ItemWrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Item = styled.div`
    overflow: hidden;
    border-radius: 10px;
    width: 100%;
    height: auto;
    img {
        border-radius: 10px;
        width: 100%;
        height: auto;
        transition: transform .35s;
        &:hover {
            transform: scale(1.05);
        }
    }
`;

const Description = styled.span`
    color: #fff;
    font-size: 16px;
    font-family: 'BMJUA';
    height: 16px;
    overflow: hidden;
`;

const MoveBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    svg {
        height: 28px;
        color: #FFF;
    }
`;

const Slider = () => {
    const navigate = useNavigate();
    const Total = 1;
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<SliderType[]>([]);
    const [current, setCurrent] = useState(0);
    const slideRef = useRef<any>(null);
    const nextSlide = () => {
        if (current < Total) setCurrent(current + 1);
    };
    const prevSlide = () => {
        if (current !== 0) setCurrent(current - 1);
    };
    const onClickItem = (title: string) => {
        navigate(`/media/${title}`, { state: title });
    };
    const getSliderData = async () => {
        const { data, error } = await supabase
            .from('molbwa')
            .select(`title, category, view, poster_img`)
            .order('view', { ascending: false })
            .limit(10);
        if (error) {
            console.error(error);
            return;
        }
        if (data) {
            setData(data);
        }
    };
    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transition = 'all 0.5s ease-in-out';
            slideRef.current.style.transform = `translateX(-${current * 100}%) translateX(-${current * 19}px)`;
        }
    }, [current]);
    useEffect(() => {
        getSliderData();
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, []);
    return(
        <Wrapper>
            <Content>
                <NameTag>가장 HOT한 영상</NameTag>
                {isLoading && (
                    <ButtonWrapper>
                        <MoveBtn className="prev" aria-label='prev_btn' onClick={prevSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </MoveBtn>
                        <MoveBtn className="next" aria-label='next_btn' onClick={nextSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </MoveBtn>
                    </ButtonWrapper>
                )}
            </Content>
            <Container>
                <ItemContainer ref={slideRef}>
                {!isLoading ? (
                    data.map((_, index) => <SliderSkeleton key={index} />)
                ) : (
                    data.map((item) => (
                        <ItemWrapper key={item.title} onClick={() => onClickItem(item.title)}>
                            <Item>
                                <img src={item.poster_img} alt={`image_${item.title}`} title={`${item.title}`} fetchpriority="high" width='224' height='336' />
                            </Item>
                            <Description>{item.title}</Description>
                            <Description>{item.category}</Description>
                            <Description>조회수 {item.view}</Description>
                        </ItemWrapper>
                    ))
                )}
                </ItemContainer>
            </Container>
        </Wrapper>
    );
};

export default Slider;