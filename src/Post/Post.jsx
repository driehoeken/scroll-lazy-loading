import React from "react";

const Post = () => {
    const getData = async () => {
        fetch("https://raw.githubusercontent.com/driehoeken/scroll-lazy-loading/master/src/data.js")
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch(console.error);
    };
    getData();
    return <div className="post"></div>;
};

export default Post;
