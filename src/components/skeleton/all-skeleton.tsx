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
    width: 90%;
    height: 18px;
    border-radius: 20px;
    background-color: #333333;
`;

const AllSkeleton = () => {
    return(
        <ItemWrapper>
            <Image />
            <Description />
        </ItemWrapper>
    );
};

export default AllSkeleton;