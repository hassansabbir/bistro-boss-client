import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title, details }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} details={details}></Cover>}
      <div className="grid md:grid-cols-2 gap-12 my-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="text-center mb-10">
          <button className="btn btn-outline border-0 text-xl border-b-4 ">
            Order Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
