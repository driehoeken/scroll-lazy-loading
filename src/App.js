import { useState } from "react";
import Post from "./Post/Post";

function App() {
    const [posts, setPosts] = useState([<Post key={0} />]);
    const loadNewPost = () => {
        posts.push(<Post key={posts.length} />);
    };

    loadNewPost();

    return (
        <div className="app">
            {posts.map((post) => {
                return post;
            })}
        </div>
    );
}

export default App;
