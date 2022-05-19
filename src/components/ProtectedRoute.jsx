import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase.init";
import Spinner from "./Spinner";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);
  if (loading) {
    return <Spinner />;
  }

  return children;
};

export default ProtectedRoute;
