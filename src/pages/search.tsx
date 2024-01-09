import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import SearchList from "../components/search-list";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchDataProps } from "../interface/interfaces";
import { supabase } from "../supabase/supabase";
import ErrorImage from "../assets/error/error.webp";

const Wrapper = styled.div`
    max-width: 1250px;
    width: 100%;
`;

const SearchWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const NoItem = styled.span`
    font-size: 22px;
`;

const NoItemImg = styled.div`
    width: 50%;
    img {
        width: 100%;
        height: auto;
    }
`;

const SearchKeyword = styled.span`
    font-size: 24px;
    color: #fff;
`
const Keyword = styled.span`
    color: #065fd4;
`;

const Search = () => {
    const props = useLocation();
    const [isLoading, setLoading] = useState(false);
    const [searchData, setSearchData] = useState<SearchDataProps[]>([]);
    const getSearchData = async () => {
        const { data, error } = await supabase
            .from('molbwa')
            .select(`title, view, thumb_img, createdAt, description`)
            .ilike('title', `%${props.state}%`);
        if (error) {
            console.error(error);
            return;
        }
        if (data) {
            setSearchData(data);
        }
    };
    useEffect(() => {
        getSearchData();
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, []);
    return(
        <Wrapper>
            <Header />
            <SearchKeyword>
                &#39;<Keyword>{props.state}</Keyword>&#39;
                &#40;으&#41;로 검색한 결과입니다
            </SearchKeyword>
            {isLoading && searchData.length === 0 ? (
                <SearchWrapper>
                    <NoItemImg><img src={ErrorImage} alt='image_404' fetchpriority="high" /></NoItemImg>
                    <NoItem>검색결과가 없습니다.</NoItem>
                    <NoItem>빠른 시일내의 업로드 될 예정입니다.</NoItem>
                </SearchWrapper>
            ) : (
                <SearchList isLoading={isLoading} dataList={searchData} />
            )}
            <Footer />
        </Wrapper>
    );
};

export default Search;