// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

// const useAdmin = () => {
//   const { user } = useContext(AuthContext);
//   console.log(user);
//   const [axiosSecure] = useAxiosSecure();
//   const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//     queryKey: ["isAdmin", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/user/admin/${user?.email}`);
//       console.log("is admin response", res);
//       return res.data.admin;
//     },
//   });
//   return [isAdmin, isAdminLoading];
// };
// export default useAdmin;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      // console.log("is admin response", res);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
