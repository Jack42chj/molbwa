import styled from "styled-components";
import { ModalProps } from "../interface/interfaces";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Background = styled.div`
    z-index: 2;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 68px;
    background-color: #212121;
    justify-content: center;
    align-items: center;
`;

const SearchForm = styled.form`
    display: flex;
    align-items: center;
    margin: 0px 20px;
    width: 100%;
`;

const SearchInput = styled.input`
    background-color: #333333;
    width: 100%;
    padding: 10px 6px;
    padding-left: 16px;
    outline: none;
    font-size: 16px;
    border: 2px solid #333333;
    border-radius: 20px 0px 0px 20px;
    color: #FFF;
`;

const SearchBtn = styled.button`
    cursor: pointer;
    padding: 6px 18px;
    background-color: #333333;
    border: 1px solid #333333;
    border-left: none;
    border-radius: 0px 20px 20px 0px;
    svg {
        width: 25px;
        color: #fff;
    }
`;

const PrevBtn = styled.span`
    cursor: pointer;
    margin-right: 20px;
    background-color: transparent;
    border-radius: 50px;
    svg {
        width: 25px;
        color: #fff
    }
`

const SearchModal : React.FC<ModalProps> = ({ isOpen, closeModal }) => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (keyword === "") return;
        closeModal();
        navigate(`/search/${keyword}`, { state: keyword });
    };
    const onClick = () => {
        setKeyword("");
        closeModal();
    };
    return(
        <div style={{ display: isOpen ? "flex" : "none" }}>
            <Background>
                <Container>
                    <SearchForm onSubmit={handleSubmit}>
                        <PrevBtn onClick={onClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </PrevBtn>
                        <SearchInput onChange={onChange} placeholder="검색" type="text" value={keyword} />
                        <SearchBtn aria-label='search_btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </SearchBtn>
                    </SearchForm>
                </Container>
            </Background>
        </div>
    );
};

export default SearchModal;