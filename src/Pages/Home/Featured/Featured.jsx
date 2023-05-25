import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredIMG from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed bg-no-repeat py-1  text-white my-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center gap-5 my-20 px-40">
        <div>
          <img src={featuredIMG} alt="" />
        </div>
        <div className="space-y-3">
          <p>Aug 19, 2055</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
            saepe cumque recusandae facilis laboriosam ducimus enim labore,
            deleniti sed voluptates autem sapiente. Dolorum voluptate odio quis
            laborum numquam eos mollitia, blanditiis deserunt beatae libero
            ipsum animi non at et voluptatibus. Molestiae quidem corporis
            repellendus dolores perferendis deleniti exercitationem ipsum vero!
          </p>
          <button className="btn btn-outline border-0 border-b-4 border-white text-white">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
