import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
`;

const Item = styled.div`
    border-radius: 10px;
    width: 100%;
    padding-top: calc(334.281 / 595.750 * 100%);
    background-color: #333333;
`;

const CarouselSkeleton = () => {
    return(
        <Wrapper>
            <Item />
        </Wrapper>  
    );
};

export default CarouselSkeleton;