import styled from "styled-components";
import SearchBar from "./search-bar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchModal from "./search-modal";
import { supabase } from "../supabase/supabase";
import AuthStore from "../zustand/store";

const Wrapper = styled.div`
    margin: 30px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.span`
    cursor: pointer;
    font-size: 32px;
`;

const Item = styled.span`
    cursor: pointer;
    font-size: 24px;
    font-family: 'BMJUA';
`;

const LoginBtn = styled.button`
    cursor: pointer;
    font-family: 'BMJUA';
    font-size: 18px;
    background-color: transparent;
    color: #EEEEEE;
    border: 1px solid #EEEEEE;
    border-radius: 5px;
    padding: 6px 10px;
    &:hover {
        border: 1px solid #494949;
    }
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const SearchRow = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

const SearchBtn = styled.span`
    cursor: pointer;
    padding: 6px;
    svg {
        width: 25px;
        color: #fff;
    }
`;

const Header = () => {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = AuthStore();
    const [isOpen, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const onClickLogo = () => navigate('/');
    const onClickBest = () => navigate('/all');
    const SignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            alert("로그아웃 되었습니다.");
            logout();
            navigate('/');
            window.location.reload();
        } else {
            console.error(error);
        }
    };
    return(
        <Wrapper>
            <Row>
                <Logo className="header-title" onClick={onClickLogo}>몰봐?!</Logo>
                <Item className="header-best" onClick={onClickBest}>전체 영상</Item>
            </Row>
            <SearchBar />
            <SearchRow className="login-search">
                <SearchBtn className="search-icon-btn" onClick={openModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </SearchBtn>
                {isLoggedIn === false ? (
                    <Link to="/login" style={{textDecoration: "none", color: "#fff"}}>
                        <LoginBtn className="auth-btn">로그인</LoginBtn>
                    </Link>
                ) : (
                    <LoginBtn className="auth-btn" onClick={SignOut}>로그아웃</LoginBtn>
                )}
            </SearchRow>
            <SearchModal isOpen={isOpen} closeModal={closeModal}/>
        </Wrapper>
    );
};

export default Header;