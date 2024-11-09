import React, { useState } from 'react';
import './Blog.css'
const Blog = () => {
  // State to manage form inputs
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  
  const [publishDate, setPublishDate] = useState('');

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const blogData = {
      title,
      content,
  
      image,
      publishDate,
    };

    console.log(blogData);

    // Clear form fields after submission
    setTitle('');
    setContent('');
    setImage(null);
   
    setPublishDate('');
  };

  return (
    <div className="blog-form-container">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleImageUpload}
            accept="image/*"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="publishDate">Publish Date & Time:</label>
          <input
            type="datetime-local"
            id="publishDate"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">Publish Blog</button>
      </form>
    </div>
  );
};

export default Blog;
