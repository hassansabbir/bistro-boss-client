import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);
  console.log(total);

  const handleDelete = (item) => {
    Swal.fire({
      title: `Are you sure you want delete ${item.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((result) => result.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your food has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>My Cart || Bistro Boss</title>
      </Helmet>
      <SectionTitle
        subHeading="My Cart"
        heading="Wanna Add More?"
      ></SectionTitle>
      <div className="uppercase h-[60px] mx-5 text-3xl font-semibold flex justify-between">
        <h3 className="text3xl">Total Item: {cart.length}</h3>
        <h3 className="text3xl">Total Price: ${total}</h3>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div>
        <table className="table w-full mx-5">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn bg-red-600 border-none text-white"
                  >
                    {" "}
                    <FaTrashAlt />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
