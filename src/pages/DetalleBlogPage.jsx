import React from 'react';
import { useParams, Link } from 'react-router-dom';

import '../assets/css/detalle_blog.css';

import { blogs } from '../data/blogs';

const DetalleBlogPage = () => {
    const { id } = useParams();
    
    const blog = blogs.find(b => b.id === id);

    if (!blog) {
        return (
            <div className="container py-5 text-center">
                <h2 style={{ color: 'red' }}>Blog no encontrado.</h2>
                <Link to="/blogs" className="btn btn-secondary mt-3">← Volver a Blogs</Link>
            </div>
        );
    }
    
    return (
        <main className="container py-5" id="detalle-blog">
            
            <h1>{blog.titulo}</h1>
            <p className="text-muted">Por {blog.autor} - {blog.fecha}</p>
            
            <img src={process.env.PUBLIC_URL + blog.imagen} className="img-fluid mb-4" alt={blog.titulo} />
            
            <div 
                className="blog-content" 
                dangerouslySetInnerHTML={{ __html: blog.contenido }} 
            />
            
            <Link to="/blogs" className="btn btn-secondary mt-3">← Volver a Blogs</Link>
        </main>
    );
};
export default DetalleBlogPage;