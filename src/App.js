import { useEffect, useState } from "react";
import Post from "./Post/Post";

function App() {
    const [posts, setPosts] = useState([<Post key={0} />]);
    const [shouldLoad, setShouldLoad] = useState(0);
    const loadNewPost = () => {
        setPosts([...posts, <Post key={posts.length} />]);
    };

    const checkLoad = () => {
        const windowHeight = window.innerHeight;
        if (document.querySelector(".app")) {
            const postsHeight = document.querySelector(".app").offsetHeight;
            const scrollY =
                postsHeight > windowHeight ? window.scrollY + windowHeight : postsHeight;
            if (postsHeight - scrollY < 150) {
                setShouldLoad(shouldLoad + 1);
            }
        } else {
            setShouldLoad(shouldLoad + 1);
        }
    };

    window.addEventListener("scroll", checkLoad);

    useEffect(() => {
        loadNewPost();
        checkLoad();
    }, [shouldLoad]);

    return (
        <div className="app">
            {posts.map((post) => {
                return post;
            })}
        </div>
    );
}

export default App;
