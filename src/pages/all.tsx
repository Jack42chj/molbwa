import Footer from "../components/footer";
import Header from "../components/header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { AllDataProps } from "../interface/interfaces";
import { useNavigate } from "react-router-dom";
import AllSkeleton from "../components/skeleton/all-skeleton";

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

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

const Select = styled.select`
    cursor: pointer;
    font-family: 'BMJUA';
    font-size: 18px;
    padding: 6px 12px;
    outline: none;
    background: none;
    color: #B5B5B5;
    border: 2px solid #8C8C8C;
    border-radius: 6px;
`;

const Option = styled.option`
    background-color: #8C8C8C;
    padding: 5px;
    color: #fff;
`;

const All = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<AllDataProps[]>([]);
    const getData = async () => {
        const { data, error } = await supabase.from('molbwa').select(`title, poster_img`).order('createdAt', { ascending: false });
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
    const onChangeSelect = async(e:React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        var order = false;
        if(value === 'title') order = true;
        const { data, error } = await supabase.from('molbwa').select(`title, poster_img`).order(`${value}`, { ascending: order });
        if (error) {
            console.error(error);
            return;
        }
        if (data) {
            setData(data);
        }
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
            <Content>
                <Title>전체 드라마 영상</Title>
                <Select onChange={onChangeSelect}>
                    <Option value="createdAt">등록일</Option>
                    <Option value="title">가나다</Option>
                    <Option value="view">조회수</Option>
                    <Option value="like">좋아요</Option>
                </Select>
            </Content>
            <ItemContainer className="best-all-container">
            {!isLoading ? (
                data.map((_,index) => <AllSkeleton key={index} /> )
            ) : (
                data.map((item, i) => (
                    <ItemWrapper key={i} onClick={() => onClickItem(item.title)}>
                        <Item>
                            <img src={item.poster_img} width='282' height='403'/>
                        </Item>
                        <Description className="best-all-desc">{item.title}</Description>
                    </ItemWrapper>
                ))
            )}
            </ItemContainer>
            <Footer />
        </Wrapper>
    );
};

export default All;