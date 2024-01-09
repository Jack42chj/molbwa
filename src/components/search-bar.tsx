import { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 600px;
`;

const SearchForm = styled.form`
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    background-color: transparent;
    width: 516px;
    padding: 10px 6px;
    padding-left: 16px;
    outline: none;
    font-size: 16px;
    border: 2px solid #333333;
    border-radius: 20px 0px 0px 20px;
    color: #FFF;
    &:focus {
        border: 2px solid #065fd4;
    }
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

const SearchBar = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (keyword === "") return;
        navigate(`/search/${keyword}`, { state: keyword });
        window.location.reload();
    };
    return(
        <Wrapper>
            <SearchForm onSubmit={handleSubmit}>
                <SearchInput onChange={onChange} className="search-bar" placeholder="검색" type="text" value={keyword} />
                <SearchBtn className='search-btn' aria-label='search_btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </SearchBtn>
            </SearchForm>
        </Wrapper>
    );
};

export default SearchBar;