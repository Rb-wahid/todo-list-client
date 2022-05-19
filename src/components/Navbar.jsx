import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../Firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className=" text-primary text-lg font-bold flex justify-end mr-28 mt-12">
      {/* <div>Todo List</div> */}
      {user?.email && (
        <Link onClick={() => signOut(auth)} to="/">
          Sign out
        </Link>
      )}{" "}
    </div>
  );
};

export default Navbar;
