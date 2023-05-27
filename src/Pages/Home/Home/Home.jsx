import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import ChefsReq from "../ChefsReq/ChefsReq";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Bistro Boss</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <AboutUs></AboutUs>
      <PopularMenu></PopularMenu>
      <ChefsReq></ChefsReq>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
