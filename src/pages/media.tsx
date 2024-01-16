import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MediaSkeleton from "../components/skeleton/media-skeleton";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { MediaProps } from "../interface/interfaces";
import AuthStore from "../zustand/store";

const Wrapper = styled.div`
    max-width: 1250px;
    width: 100%;
    padding: 0px 10px;
`;

const TextWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Text = styled.span`
    font-size: 18px;
    &.media-title {
        font-size: 24px;
    }
`;

const VideoContainer = styled.div`
    overflow: hidden;
    position: relative;
    padding-bottom: 56.25%;
`;

const VideoWrapper = styled.div`
    position: absolute;
    max-width: 1250px;
    width: 100%;
    height: 100%;
`;

const Video = styled.iframe`
    width: 100%;
    height: 100%;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const ItemWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const Item = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: #333333;
    border-radius: 20px;
    padding: 8px 16px;
    color: #fff;
    font-size: 20px;
    font-family: 'BMJUA';
    svg {
        height: 24px;
        color: #FFF;
    }
`;

const Media = () => {
    const props = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn } = AuthStore();
    const [isLoading, setLoading] = useState(false);
    const [viewCounted, setViewCounted] = useState(false);
    const [videoData, setVideoData] = useState<MediaProps[]>([]);
    const getVideoData = async () => {
        try {
            const { data, error } = await supabase
                .from('molbwa')
                .select(`title, createdAt, go_link, api_link, view, like, hate`)
                .eq('title', props.state);
            if (error) {
                console.error(error);
                return;
            }
            if (data) {
                setVideoData(data);
            }
        } catch (err: unknown) {
            alert("영상 데이터 불러오기 실패!");
        }
    };
    const increaseView = async () => {
        if (isLoading) {
            const { error } = await supabase
            .from('molbwa')
            .update({ 'view': videoData[0].view + 1 })
            .eq('title', props.state);
            if (error) {
                window.alert('서버와 연결에 실패하였습니다.');
            }
        }
    };
    useEffect(() => {
        getVideoData();
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, []);
    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                if (!viewCounted) {
                    increaseView();
                    setViewCounted(true);
                }
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [isLoading, viewCounted]);
    const onClickLike = async () => {
        if (isLoggedIn) {
            const { error } = await supabase
                .from('molbwa')
                .update({ 'like': videoData[0].like + 1 })
                .eq('title', props.state);

            if (error) {
                window.alert('서버와 연결에 실패하였습니다.');
            } else {
                getVideoData();
            }
        }
        else {
            const ok = confirm("로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?");
            if (ok) {
                navigate('/login');
            }
        }
    };
    const onClickDislike = async () => {
        if (isLoggedIn) {
            const { error } = await supabase
            .from('molbwa')
            .update({ 'hate': videoData[0].hate + 1 })
            .eq('title', props.state);

            if (error) {
                window.alert('서버와 연결에 실패하였습니다.');
            } else {
                getVideoData();
            }
        }
        else {
            const ok = confirm("로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?");
            if (ok) {
                navigate('/login');
            }
        }
    };
    return(
        <Wrapper>
            <Header />
            {!isLoading && videoData.length === 0 ? (
                <MediaSkeleton />
            ) : (
                <>
                    <VideoContainer>
                        <VideoWrapper>
                            <Video 
                                title="YouTube video player"
                                src={videoData[0]?.api_link}
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            />
                        </VideoWrapper>
                    </VideoContainer>
                    <TextWrapper>
                        <Row>
                            <Text className="media-title">{videoData[0]?.title}</Text>
                            <ItemWrapper>
                                <Item className="icon-btn" onClick={onClickLike}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    &nbsp; 좋아요 {videoData[0]?.like}
                                </Item>
                                <Item className="icon-btn" onClick={onClickDislike}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                                    </svg>
                                    &nbsp; 싫어요 {videoData[0]?.hate}
                                </Item>
                                <Link to={videoData[0]?.go_link} target="_blank" style={{textDecoration: "none", color: "#fff"}}>
                                    <Item className="icon-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                        </svg>
                                        &nbsp; 바로가기
                                    </Item>
                                </Link>
                            </ItemWrapper>
                        </Row>
                        <Text className="media-text">등록일 {videoData[0]?.createdAt}</Text>
                        <Text className="media-text">조회수 {videoData[0]?.view}</Text>
                    </TextWrapper>
                </>
            )}
            <Footer />
        </Wrapper>
    );
};

export default Media;