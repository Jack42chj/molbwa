import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
`;

const ItemImage = styled.div`
    border-radius: 10px;
    width: 364px;
    height: 204.234px;
    background-color: #333333;
`;

const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 50%;
`;

const Item = styled.span`
    background-color: #333333;
    border-radius: 10px;
    width: 50%;
    height: 18px;
    &.title {
        height: 24px;
        width: 30%;
    }
    &.description {
        width: 80%;
    }
`;

const SearchListSkeleton = () => {
    return(
        <Wrapper>
            <ItemImage />
            <ItemContent>
                <Item className="title"/>
                <Item />
                <Item />
                <Item className="description"/>
            </ItemContent>
        </Wrapper>
    );
};

export default SearchListSkeleton;
