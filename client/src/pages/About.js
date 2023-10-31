import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Ecommerce App, your one-stop destination
            for all things shopping. We are committed to providing you with an
            exceptional online shopping experience. At Ecommerce App, we
            offer a wide range of high-quality products that cater to your
            diverse needs and preferences. Our mission is to make online
            shopping convenient, enjoyable, and secure for you. We understand
            the importance of choice, affordability, and top-notch customer
            service. Whether you're looking for fashion, electronics, home
            essentials, or unique gifts, we've got you covered. What sets us
            apart is our dedication to your satisfaction. We continuously update
            our product offerings to stay current with the latest trends and
            technologies. Our user-friendly website, seamless checkout process,
            and reliable delivery services ensure that you have a hassle-free
            shopping experience. We are more than just an ecommerce platform;
            we're a community of shoppers and sellers. We value your feedback,
            and our support team is here to assist you at every step. Your trust
            in us is our driving force. Thank you for choosing Ecommerce
            App. Join us on this exciting journey of discovery and
            shopping. Happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
