import styled from "styled-components";

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Item = styled.div`
    border-radius: 10px;
    width: 100%;
    padding-top: calc(336 / 234 * 100%);
    background-color: #333333;
`;

const Description = styled.span`
    color: #fff;
    height: 16px;
    width: 60%;
    background-color: #333333;
    border-radius: 20px;
`;

const SliderSkeleton = () => {
    return (
        <ItemWrapper>
            <Item />
            <Description />
            <Description />
            <Description />
        </ItemWrapper>
    );
};

export default SliderSkeleton;