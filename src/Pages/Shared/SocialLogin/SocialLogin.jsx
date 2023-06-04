import { useContext } from "react";
import { FaFacebookF, FaGoogle, FaYoutube } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);

      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className="divider w-10/12 mx-auto">OR</div>
      <div className="text-center space-x-5 my-5">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle border-none bg-blue-400"
        >
          <FaGoogle className="w-5 h-6" />
        </button>
        <button className="btn btn-circle border-none bg-red-600">
          <FaYoutube className="w-5 h-6" />
        </button>
        <button className="btn btn-circle border-none bg-blue-700">
          <FaFacebookF className="w-5 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
