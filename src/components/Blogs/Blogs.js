import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const options = {method: 'GET', headers: {Authorization: ''}};
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url, options)
            .then(response => response.json())
            .then(response => setBlogs(response))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    title={blog.title}
                    body={blog.body}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;