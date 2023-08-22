import RootLayout from "@/components/Layouts/RootLayout";
import { Card, Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <>
      <Head>
        <title>News</title>
        <meta name="news" description="All news of fast news" />
      </Head>
      <Row gutter={16}>
        {news?.map((item) => (
          <Col key={item.id} span={8}>
            <Card style={{ height: 600, marginBottom: 2 }} bordered={false}>
              <Image
                src={item.imageUrl}
                width={50}
                height={50}
                layout="responsive"
                alt="news-image"
              />
              <h1>{item.title}</h1>
              <div>
                <p style={{ color: "gray" }}>{item.reporterName}</p>
                <p style={{ color: "gray", marginTop: -10 }}>
                  {item.publicDate}
                </p>
              </div>
              <div>
                <Link href={`news/${item.id}`}>Details...</Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

News.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
