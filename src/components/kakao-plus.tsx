import styled from "styled-components";
import KakaoQR from "../assets/qr/kakao-qr.png";

const Wrapper = styled.div`
    width: 90%;
    background-color: #FEE500;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px 0px 10px 0px;
    border: none;
    border-radius: 3px;
`;

const Text = styled.span`
    font-size: 20px;
    color: #000000;
    &.description {
        font-size: 12px;
    }
    &.method {
        font-size: 16px;
    }
`;

const ItemContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Row = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    svg {
        transform: translate(0px, 10px);
        width: 25px;
        color: #000000;
    }
`;

const QrImage = styled.div`
    img {
        width: 100px;
        height: auto;
        border-radius: 5px;
    }
`;

const Icon = styled.div`
    background-color: #FFF;
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    margin-bottom: 20px;
    svg {
        transform: translate(10px, 10px);
        color: #000000;
        width: 24px;
        height: 24px;
    }
`;

const IconText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 58px;
`;

const KakaoPlus = () => {
    return(
        <Wrapper>
            <Text>뭘봐?! 카카오톡 플러스 친구를 추가하시면 </Text>
            <Text>관련정보를 가장 빠르게 받아보실 수 있어요!</Text>
            <ItemContainer>
                <QrImage>
                    <img src={KakaoQR} alt="qr_code" fetchpriority="high"/>
                </QrImage>
                <ItemWrapper>
                    <Text className="method">카카오톡 채널 추가하는 방법</Text>
                    <Row>
                        <IconText>
                            <Icon>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </Icon>
                            <Text className="description">카톡 상단</Text>
                            <Text className="description">검색창 클릭</Text>
                        </IconText>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                        <IconText>
                            <Icon>
                                <svg className="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M752.213333 530.773333h-460.8c-18.773333 0-34.133333-15.36-34.133333-34.133333s15.36-34.133333 34.133333-34.133333h460.8c18.773333 0 34.133333 15.36 34.133334 34.133333s-14.933333 34.133333-34.133334 34.133333zM163.413333 870.4v-204.8c0-18.773333-15.36-34.133333-34.133333-34.133333s-34.133333 15.36-34.133333 34.133333v221.866667c0 28.16 23.04 51.2 51.2 51.2h221.866666c18.773333 0 34.133333-15.36 34.133334-34.133334s-15.36-34.133333-34.133334-34.133333h-204.8zM163.413333 153.6h204.8c18.773333 0 34.133333-15.36 34.133334-34.133333s-15.36-34.133333-34.133334-34.133334h-221.866666c-28.16 0-51.2 23.04-51.2 51.2v221.866667c0 18.773333 15.36 34.133333 34.133333 34.133333s34.133333-15.36 34.133333-34.133333V153.6zM880.213333 870.4h-204.8c-18.773333 0-34.133333 15.36-34.133333 34.133333s15.36 34.133333 34.133333 34.133334h221.866667c28.16 0 51.2-23.04 51.2-51.2v-221.866667c0-18.773333-15.36-34.133333-34.133333-34.133333s-34.133333 15.36-34.133334 34.133333v204.8zM897.28 85.333333h-221.866667c-18.773333 0-34.133333 15.36-34.133333 34.133334s15.36 34.133333 34.133333 34.133333h204.8v204.8c0 18.773333 15.36 34.133333 34.133334 34.133333s34.133333-15.36 34.133333-34.133333V136.533333c0-28.16-22.613333-51.2-51.2-51.2z" fill="#4C4B4C" />
                                </svg>
                            </Icon>
                            <Text className="description">스캐너로</Text>
                            <Text className="description">QR코드 스캔</Text>
                        </IconText>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                        <IconText>
                            <Icon>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </Icon>
                            <Text className="description">홈에서</Text>
                            <Text className="description">채널 추가</Text>
                        </IconText>
                    </Row>
                </ItemWrapper>
            </ItemContainer>
        </Wrapper>
    );
};

export default KakaoPlus;