import FoodCard from "../../../components/FoodCard/FoodCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ChefsReq = () => {
  const [menu] = useMenu();
  const chefsRecommended = menu.filter(
    (item) => item.chefRecommended === "true"
  );
  return (
    <div>
      <SectionTitle
        subHeading="Should Try"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid gap-10 md:grid-cols-3">
        {chefsRecommended.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default ChefsReq;
