import React, { useState } from 'react';
import API from '../api';

const CreatePost = () => {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);

    const handlePost = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('caption', caption);
        formData.append('image', image);

        try {
            await API.post('/posts/create', formData);
            alert('Post created successfully');
        } catch (error) {
            alert('Post creation failed');
        }
    };

    return (
        <form onSubmit={handlePost}>
            <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Caption" />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button type="submit">Post</button>
        </form>
    );
};

export default CreatePost;
