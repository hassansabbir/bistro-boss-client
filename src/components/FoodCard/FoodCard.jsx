const FoodCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className="card h-[650px] w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px]" src={item.image} alt={item.category} />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto text-2xl font-bold">{item.name}</h2>
          <p>{item.recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline bg-gray-100 border-0 border-b-4 text-yellow-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
