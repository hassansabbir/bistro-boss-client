import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuCover from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      <Cover
        img={menuCover}
        title="Our Menu"
        details="Would You Like To Try A Dish?"
      ></Cover>
      {/* offered */}
      <SectionTitle
        subHeading="Don't miss"
        heading="Today's Offers"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert */}
      <MenuCategory
        items={desserts}
        img={dessertImg}
        title="dessert"
        details=" Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
      {/* Pizza */}
      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title="pizza"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
      <MenuCategory
        items={salad}
        img={saladImg}
        title="salad"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
      <MenuCategory
        items={soup}
        img={soupImg}
        title="soup"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
    </div>
  );
};

export default Menu;
