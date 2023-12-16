import React, { useState, useEffect } from "react";
import "./post.css";

function Post() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://source.unsplash.com/random/");
        const imageUrl = await response.url;
        setImageUrl(imageUrl);
        console.log(imageUrl);
      } catch (error) {
        console.error("Bir hata oluştu:", error);
      }
    };

    fetchData();
  }, []); // Boş bağımlılık dizisi ile sadece bir kere çalıştırılmasını sağlar.

  return (
    <>
      <div className="Post">
        <img src={imageUrl} alt="" />
        <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
      </div>
    </>
  );
}

export default Post;
