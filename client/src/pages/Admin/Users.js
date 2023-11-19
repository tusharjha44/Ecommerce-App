import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import "../../styles/CartStyles.css"

const Users = () => {
  const [user, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/get-users`
      );
      // setUsers(data?.user);
      setUsers(data?.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Layout title={"Dashboard -  USers"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            {user?.map((u) => (
              <div className="card mt-5 mb-3 gx-3 gy-3" style={{ width: "18rem", height:"10rem" }}>
                <div className="card-body">
                  <h5 className="card-title userr">User Name: {u.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Email: {u.email}
                  </h6>
                  <p className="card-subtitle">
                    Phone Number: {u.phone}
                  </p>
                  <p className="card-text">
                    Address: {u.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
