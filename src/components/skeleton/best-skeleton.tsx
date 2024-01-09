import styled from "styled-components";

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin-bottom: 40px;
`;

const Image = styled.div`
    border-radius: 10px;
    width: 100%;
    padding-top: calc(187.734 / 131.750 * 100%);
    background-color: #333333;
`;

const Description = styled.span`
    color: #fff;
    width: 50%;
    height: 16px;
    border-radius: 20px;
    background-color: #333333;
    &.skeleton-watch {
        width: 40%;
    }
`;

const BestSkeleton = () => {
    return(
        <ItemWrapper>
            <Image />
            <Description />
            <Description className="skeleton-watch"/>
        </ItemWrapper>
    );
};

export default BestSkeleton;