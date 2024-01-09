import styled from "styled-components";

const TextWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const Text = styled.span`
    background-color: #333333;
    height: 22px;
    width: 30%;
    border-radius: 20px;
    &.title {
        height: 32px;
        width: 40%;
    }
`;

const Video = styled.div`
    width: 100%;
    padding-top: calc(703 / 1250 * 100%);
    background-color: #333333;
    border-radius: 5px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const ItemWrapper = styled.div`
    display: flex;
    gap: 10px;
    width: 30%;
`;

const Item = styled.div`
    background-color: #333333;
    height: 32px;
    width: 100%;
    border-radius: 20px;
`;

const MediaSkeleton = () => {
    return(
        <>
            <Video />
            <TextWrapper>
                <Row>
                    <Text className="title" />
                    <ItemWrapper>
                        <Item />
                        <Item />
                        <Item />
                    </ItemWrapper>
                </Row>
                <Text />
                <Text />
            </TextWrapper>
        </>
    );
};

export default MediaSkeleton;