import styled from "styled-components";
import Header from "../components/header";
import Carousel from "../components/carousel";
import Slider from "../components/slider";
import Footer from "../components/footer";
import BestVideo from "../components/best-video";

const Wrapper = styled.div`
    max-width: 1250px;
    width: 100%;
`;

const Home = () => {
    return(
        <Wrapper>
            <Header />
            <Carousel />
            <Slider />
            <BestVideo />
            <Footer />
        </Wrapper>
    );
};

export default Home;