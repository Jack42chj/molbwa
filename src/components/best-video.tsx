import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import BestVideoSkeleton from "./skeleton/best-video-skeleton";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { BestVideoType } from "../interface/interfaces";

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

const NameTag = styled.span`
    font-family: "BMJUA";
    font-size: 24px;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
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
`

const AllBtn = styled.button`
    border: 2px solid #8C8C8C;
    padding: 4px 10px;
    border-radius: 20px;
    background-color: transparent;
    cursor: pointer;
    color: #B5B5B5;
    font-size: 14px;
    &:hover {
        color: #fff;
    }
`;

const BestVideo = () => {
    const navigate = useNavigate();
    const onClickItem = (title: string) => {
        navigate(`/media/${title}`, { state: title });
    };
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<BestVideoType[]>([]);
    const getBestData = async () => {
        const { data, error } = await supabase
            .from('molbwa')
            .select(`title, poster_img`)
            .order('like', { ascending: false })
            .limit(5);
        if (error) {
            console.error(error);
            return;
        }
        if (data) {
            setData(data);
        }
    };
    useEffect(() => {
        getBestData();
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, []);
    return(
        <Wrapper>
            <Content>
                <NameTag>인기 영상</NameTag>
                <Link to="/best">
                    <AllBtn>전체보기</AllBtn>
                </Link>
            </Content>
            <Container>
                {!isLoading ? (
                    data.map((_, index) => <BestVideoSkeleton key={index} />)
                ) : (
                    data.map((item) => (
                        <ItemWrapper key={item.title} onClick={() => onClickItem(item.title)}>
                            <Item>
                                <img src={item.poster_img} alt={`image_${item.title}`} fetchpriority="high" width='224' height='336' />
                            </Item>
                            <Description>{item.title}</Description>
                        </ItemWrapper>
                    ))
                )}
            </Container>
        </Wrapper>
    );
};

export default BestVideo;