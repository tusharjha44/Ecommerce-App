import { useAuth } from "../../context/auth";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      console.log(auth?.token);
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`);
      console.log(res.data);
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
