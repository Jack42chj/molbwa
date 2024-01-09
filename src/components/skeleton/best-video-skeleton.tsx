import styled from "styled-components";

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const Image = styled.div`
    border-radius: 10px;
    width: 100%;
    padding-top: calc(336 / 234 * 100%);
    background-color: #333333;
`;

const Description = styled.span`
    color: #fff;
    height: 16px;
    width: 80%;
    background-color: #333333;
    border-radius: 20px;
`;

const BestVideoSkeleton = () => {
    return(
        <ItemWrapper>
            <Image />
            <Description />
        </ItemWrapper>
    );
};

export default BestVideoSkeleton;