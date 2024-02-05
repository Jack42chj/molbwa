import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 100px;
    padding: 30px 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-top: 1px solid #838383;
`;

const Text = styled.span`
    font-size: 14px;
    color: #838383;
    font-family: 'Pretendard';
`;

const Footer = () => {
    return(
        <Wrapper>
            <Text>몰봐?! 서비스의 모든 영상 저작권은 Youtube에 있습니다.</Text>
            <Text>이메일 : 42city@naver.com</Text>
            <Text>Copyright &copy; 몰봐?! All right reserved.</Text>
        </Wrapper>
    );
};

export default Footer;