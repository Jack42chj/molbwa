//슬라이더 컴포넌트
export interface SliderType{
    title: string;
    category: string;
    view: string;
    poster_img: string;
}

//케러셀 컴포넌트
export interface CarouselType{
    title: string;
    thumb_img: string;
}

//인기영상 컴포넌트
export interface BestVideoType{
    title: string;
    poster_img: string;
}

//검색 화면
export interface SearchDataProps {
    title: string;
    view: string;
    createdAt: string;
    description: string;
    thumb_img: string;
}

//검색 결과 화면
export interface SearchProps {
    isLoading: Boolean
    dataList: {
        title: string;
        view: string;
        createdAt: string;
        description: string;
        thumb_img: string;
    }[];
}

//검색 모달 창
export interface ModalProps {
    isOpen: Boolean
    closeModal: () => void;
}

//인기영상 Top 10 화면
export interface BestDataProps {
    title: string;
    view: string;
    poster_img: string;
    createdAt: string;
}

//전체 드라마 영상 화면
export interface AllDataProps {
    title: string;
    poster_img: string;
}

//동영상 재생 화면
export interface MediaProps {
    title: string;
    view: string;
    api_link: string;
    go_link: string;
    createdAt: string;
}