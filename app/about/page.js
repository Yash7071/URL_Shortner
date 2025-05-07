import React from "react";

const About = () => {
  return (
    <div className="mx-auto w-[60%]  bg-blue-100 my-16 p-8 rounded-lg flex flex-col gap-5">
      <h1 className="font-bold text-2xl">About Us</h1>
      <p className="text-gray-700">
        Welcome to our URL Shortener! We are dedicated to providing a simple and
        efficient way to shorten your long URLs. Our service is fast, reliable,
        and easy to use. Whether you need to share links on social media, in
        emails, or anywhere else, we've got you covered.
      </p>
      <p className="text-gray-700">
        Our goal is to make link sharing easier and more convenient for
        everyone. Thank you for choosing our URL Shortener!
      </p>
        <p className="text-gray-700">
            If you have any questions or feedback, feel free to reach out to us.
            We're here to help!</p>
    </div>
  );
};

export default About;
