import { useState, useEffect } from "react";

function PostList() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        setPosts(data);
        setLoading(false);
    })
    .catch((error) => {
        console.error(error);
        setLoading(false);
    });
  }, []);

  if(loading) return <p>Loading....</p>

  return (
     <div>
        {posts.slice(0,10).map((post) => (
            <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ))}
     </div>
  );
}

export default PostList;