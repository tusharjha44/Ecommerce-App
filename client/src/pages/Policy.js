import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Our ecommerce website prioritizes your privacy and data security
            with a detailed Privacy Policy. We collect and safeguard your
            information, use cookies to enhance your experience, and may share
            data with trusted partners for service improvement. Our Return and
            Refund Policy allows returns within a specified timeframe, and
            refunds are processed promptly. Our Shipping Policy ensures
            transparency regarding shipping times, costs, and handling of lost
            or damaged items. Our Terms and Conditions cover order acceptance,
            product descriptions, liability, and more. By adhering to these
            policies, we aim to provide a secure, transparent, and
            customer-friendly shopping experience for all our visitors.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
