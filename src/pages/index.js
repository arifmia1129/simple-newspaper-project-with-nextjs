import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";
const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const HomePage = () => (
  <>
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt="carousel"
            layout="responsive"
            width={160}
            height={160}
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Image
            src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
            alt="carousel"
            layout="responsive"
            width={160}
            height={160}
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Image
            src="https://images.unsplash.com/photo-1585719022717-87adb5bc279d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="carousel"
            layout="responsive"
            width={160}
            height={160}
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Image
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
            alt="carousel"
            layout="responsive"
            width={160}
            height={160}
          />
        </h3>
      </div>
    </Carousel>
    <h1>Welcome to Fast News Home Page</h1>
  </>
);
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
