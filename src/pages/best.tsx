import Footer from "../components/footer";
import Header from "../components/header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import BestSkeleton from "../components/skeleton/best-skeleton";
import { supabase } from "../supabase/supabase";
import { BestDataProps } from "../interface/interfaces";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    max-width: 1250px;
    width: 100%;
`;

const Title = styled.span`
    font-size: 24px;
    color: #fff;
`;

const ItemContainer = styled.div`
    margin-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
`;

const ItemWrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin-bottom: 40px;
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
    font-size: 18px;
    font-family: 'BMJUA';
`;

const Best = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<BestDataProps[]>([]);
    const getData = async () => {
        const { data, error } = await supabase.from('molbwa').select(`title, view, poster_img, createdAt`).order('view', { ascending: false }).limit(10);
        if (error) {
            console.error(error);
            return;
        }
        if (data) {
            setData(data);
        }
    };
    const onClickItem = (title: string) => {
        navigate(`/media/${title}`, { state: title });
    };
    useEffect(() => {
        getData();
        setTimeout(()=>{
            setLoading(true);
        }, 800);
    }, []);
    return(
        <Wrapper>
            <Header />
            <Title>인기 영상 TOP 10</Title>
            <ItemContainer className="best-all-container">
            {!isLoading ? (
                data.map((_,index) => <BestSkeleton key={index} /> )
            ) : (
                data.map((item, i) => (
                    <ItemWrapper key={i} onClick={() => onClickItem(item.title)}>
                        <Item>
                            <img src={item.poster_img} width='282' height='403'/>
                        </Item>
                        <Description className="best-all-desc">{item.title}</Description>
                        <Description className="best-all-desc">조회수 {item.view}</Description>
                        <Description className="best-all-desc">등록일 {item.createdAt}</Description>
                    </ItemWrapper>
                ))
            )}
            </ItemContainer>
            <Footer />
        </Wrapper>
    );
};

export default Best;