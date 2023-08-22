import RootLayout from "@/components/Layouts/RootLayout";
import { Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function NewsDetails() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const router = useRouter();

  const targetNews = news?.find(
    (item) => item.id === parseInt(router.query.newsId)
  );

  return (
    <div>
      <Card style={{ height: 600, marginBottom: 2 }} bordered={false}>
        <Image
          src={targetNews?.imageUrl}
          width={50}
          height={50}
          layout="responsive"
          alt="news-image"
        />
        <h1>{targetNews?.title}</h1>
        <div>
          <p style={{ color: "gray" }}>{targetNews?.reporterName}</p>
          <p style={{ color: "gray", marginTop: -10 }}>
            {targetNews?.publicDate}
          </p>
        </div>
        <p>{targetNews?.description}</p>
      </Card>
    </div>
  );
}

NewsDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
