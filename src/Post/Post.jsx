import React, { useEffect, useState } from "react";
import "./Post.css";
const Post = () => {
    const [authorName, setAuthorName] = useState("");
    const [desc, setDesc] = useState("");
    const [likes, setLikes] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const getRandomFromArr = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    const getData = async () => {
        const data = await fetch(
            "https://raw.githubusercontent.com/driehoeken/scroll-lazy-loading/master/src/data.json"
        );
        const dataJson = await data.json();
        console.log(dataJson);

        setAuthorName(getRandomFromArr(dataJson.authorNames));
        setDesc(getRandomFromArr(dataJson.descriptions));
        setLikes(Math.floor(Math.random() * 50) + 1);
        setIsLoaded(true);
    };
    useEffect(() => {
        getData();
    }, []);
    if (isLoaded) {
        return (
            <div className="post">
                <p className="author">{authorName}</p>
                <p className="desc">{desc}</p>
                <p className="likes">
                    {likes} {likes !== 1 ? "likes" : "like"}
                </p>
            </div>
        );
    } else {
        return <div className="post">loading</div>;
    }
};

export default Post;
