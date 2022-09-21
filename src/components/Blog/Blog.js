import React from 'react';
import {useState} from 'react';
import './Blog.css';

const blogStyle = {
    color: "black"
};

const Blog = (props) => {

    // like button count
    const [likeCount, setLikeCount] = useState(57);
    const increaseLike = () => setLikeCount(likeCount + 1);

    // dislike button count
    const [dislikeCount, setDislikeCount] = useState(10);
    const increaseDislike = () => setDislikeCount(dislikeCount + 1);

    // mobile charge count
    const [charge, setCharge] = useState(100);
    const batterDrain = () => {
        if(charge > 0) {
            return setCharge(charge - 10);
        } else {
            alert("Battery Charge Is Finished.");
        }
    };

    return (
        <div className='blog'>
            <header>
                <h2 style={blogStyle}>{props.title}</h2>
                <p>
                    <strong>Author:</strong> Shamim Sarker <br />
                    <strong>Date:</strong> 21/09/2022
                </p>
            </header>
            <main>
                <article style={{color: "blue"}}>{props.body}</article>
            </main>
            <footer>
                <div className='btn'>
                    <button onClick={increaseLike}>Like</button>
                    <button onClick={increaseDislike}>Dislike</button>
                    <button onClick={batterDrain}>Mobile</button>
                </div>
                <div className='counting'>
                    <span>Liked: {likeCount}</span>
                    <span>Disliked: {dislikeCount}</span>
                    <span>Battery: {charge}%</span>
                </div>
            </footer>
        </div>
    );
};

export default Blog;