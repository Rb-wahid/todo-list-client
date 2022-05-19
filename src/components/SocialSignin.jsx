import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../Firebase.init";
import Spinner from "./Spinner";

const SocialSignin = () => {
  const [user, loading2] = useAuthState(auth);
  const [signInWithGoogle, userG, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  if ((loading, loading2)) return <Spinner />;
  // if (user) {
  //   navigate("/");
  // }

  return (
    <div className="h-screen flex justify-center items-center">
      <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          {error && (
            <p className="animate-pulse text-center form-group form-check mb-3 text-red-600 hover:text-red-700 focus:text-red-700 ">
              {error.message}
            </p>
          )}

          <Link
            onClick={async () => await signInWithGoogle()}
            className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
            style={{ backgroundColor: "#2D333B" }}
            to="/"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <i>
              <FcGoogle className="w-4 h-4 mr-2" />
            </i>
            Continue with Google
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialSignin;
