import styled from "styled-components";
import NotFoundImage from "../assets/error/404found.webp";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    max-width: 1250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

const NoItem = styled.span`
    font-size: 28px;
`;

const NoItemImg = styled.div`
    width: 50%;
    margin-bottom: 30px;
    img {
        width: 100%;
        height: auto;
    }
`;

const HomeButton = styled.span`
    cursor: pointer;
    font-size: 24px;
    border: 2px solid #8C8C8C;
    border-radius: 36px;
    padding: 10px 50px;
    &:hover {
        opacity: 0.8;
    }
`;

const NotFound = () => {
    const navigate = useNavigate();
    const onClickBtn = () => navigate('/');
    return(
        <Wrapper>
            <NoItemImg className="not-found-img"><img src={NotFoundImage} alt='image_404_not_found' fetchpriority="high" /></NoItemImg>
            <NoItem className="not-found-text">페이지를 찾을 수 없습니다.</NoItem>
            <NoItem className="not-found-text">페이지가 존재하지 않거나 사용할 수 없는 페이지 입니다.</NoItem>
            <HomeButton onClick={onClickBtn} className="not-found-btn">메인으로 돌아가기</HomeButton>
        </Wrapper>
    );
};

export default NotFound;