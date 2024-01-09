import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CarouselSkeleton from "./skeleton/carousel-skeleton";
import { supabase } from "../supabase/supabase";
import { CarouselType } from "../interface/interfaces";

const Wrapper = styled.div`
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Tag = styled.span`
    font-family: "BMJUA";
    font-size: 24px;
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
`;

const ItemContainer = styled.div`
    display: flex;
    gap: 58.5px;
    width: 100%;
    & > div {
        flex: 0 0 calc(50% - 29.3px);
    }
`;

const Item = styled.div`
    img {
        border-radius: 10px;
        width: 100%;
        height: auto;
    }
`;

const MoveBtn = styled.button`
    position: absolute;
    border: none;
    background-color: transparent;
    padding: 0;
    top: 50%;
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 1;
    &.prev {
        left: 0;
    }
    &.next {
        right: 0;
    }
    svg {
        height: 60px;
        color: #FFF;
    }
`;

const Carousel = () => {
    const Total = 2;
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<CarouselType[]>([]);
    const [current, setCurrent] = useState(0);
    const slideRef = useRef<any>(null);
    const nextSlide = () => {
        if (current < Total) setCurrent(current + 1);
    };
    const prevSlide = () => {
        if (current !== 0) setCurrent(current - 1);
    };
    const getCarouselData = async () => {
        const { data, error } = await supabase
            .from('molbwa')
            .select(`title, thumb_img`)
            .order('createdAt', { ascending: false })
            .limit(4);
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
            slideRef.current.style.transition = 'all 1s ease-in-out';
            slideRef.current.style.transform = `translateX(-${current * 50}%) translateX(-${current * 29.25}px)`;
        }
    }, [current]);
    useEffect(() => {
        getCarouselData();
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, []);
    return(
        <Wrapper>
            <Tag>최신 업로드 영상</Tag>
            <Container>
                    {!isLoading ? (
                        <ItemContainer ref={slideRef}>
                            {data.map((_, i) => <CarouselSkeleton key={i} />)}
                        </ItemContainer>
                    ) : (
                        <>
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
                            <ItemContainer ref={slideRef}>
                            {data.map((item) => (
                                <Item key={item.title}>
                                    <Link to={`media/${item.title}`} state={item.title}>
                                        <img src={item.thumb_img} alt={`image_${item.title}`} fetchpriority="high" width='595' height='334' />
                                    </Link>
                                </Item>
                            ))}
                            </ItemContainer>
                        </>
                    )}
                </Container>
        </Wrapper>
    );
};

export default Carousel;