import { Parallax } from "react-parallax";

const Cover = ({ img, title, details }) => {
  return (
    <Parallax
      blur={{ min: -60, max: 60 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[500px]">
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" p-20 px-40 bg-black bg-opacity-40">
            <h1 className="mb-5 text-6xl font-bold uppercase">{title}</h1>
            <p className="mb-5 text-xl">{details}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
