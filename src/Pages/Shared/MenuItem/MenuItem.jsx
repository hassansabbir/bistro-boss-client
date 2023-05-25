const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  console.log(item);

  return (
    <div className="flex gap-5">
      <img
        className="w-32 border"
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div>
        <h3 className=" text-2xl">{name}--------</h3>
        <h3 className="text-xl">{recipe}</h3>
      </div>
      <h3 className="text-xl font-bold text-orange-500">{price}</h3>
    </div>
  );
};

export default MenuItem;
