import React, { useEffect, useState } from 'react';
import API from '../api';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await API.get('/posts');
            setPosts(response.data);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div key={post._id}>
                    <h3>{post.userId.username}</h3>
                    <img src={`http://localhost:5000/uploads/${post.image}`} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
