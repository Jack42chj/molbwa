import styled from "styled-components";
import { SearchProps } from "../interface/interfaces";
import SearchListSkeleton from "./skeleton/search-list-skeleton";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    cursor: pointer;
    margin: 10px 0px;
    display: flex;
    gap: 20px;
`;

const ItemImage = styled.div`
    img {
        border-radius: 10px;
        width: 364px;
        height: auto;
    }
`;

const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Item = styled.span`
    font-size: 18px;
    &.title {
        font-size: 24px;
    }
`;

const SearchList : React.FC<SearchProps> = ({ isLoading, dataList }) => {
    const navigate = useNavigate();
    const onClickItem = (title: string) => {
        navigate(`/media/${title}`, { state: title });
    };
    return(
        <Wrapper>
        {!isLoading ? (
            dataList.map((_, index) => (
                <Container key={index}>
                    <SearchListSkeleton  />
                </Container>
            ))
        ) : (
            dataList.map((item, i) => (
                <Container className="search-list" key={i} onClick={() => onClickItem(item.title)}>
                    <ItemImage className="search-img"><img src={item.thumb_img} title={`${item.title}`} alt={`image_${item.title}`} fetchpriority="high" width='595' height='334'/></ItemImage>
                    <ItemContent>
                        <Item className="title">{item.title}</Item>
                        <Item>조회수 {item.view}</Item>
                        <Item>등록일 {item.createdAt}</Item>
                        <Item>{item.description}</Item>
                    </ItemContent>
                </Container>
            ))
        )}
        </Wrapper>
    );
};

export default SearchList;