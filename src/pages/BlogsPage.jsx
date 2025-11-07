import React from 'react'; 
import { Link } from 'react-router-dom';
import '../assets/css/blog.css';

import { blogs } from '../data/blogs'; 

const BlogsPage = () => {
    
    return (
        <main className="main-blogs py-5">
            <h1>📰 Noticias y Curiosidades</h1>
            <div className="grid-blogs">
                {blogs.map(blog => (
                    <div className="blog-card-wrapper" key={blog.id}>
                        <div className="card h-100 shadow-sm">
                            <img src={process.env.PUBLIC_URL + blog.imagen} className="card-img-top" alt={blog.titulo} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{blog.titulo}</h5>
                                <p className="card-text">{blog.descripcion}</p>
                                <Link to={`/blog/${blog.id}`} className="btn btn-primary mt-auto">Leer más</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};
export default BlogsPage;