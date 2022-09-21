import React from 'react';
import {useState} from 'react';
import './Blog.css';

const blogStyle = {
    color: "blue"
};

const Blog = (props) => {

    const {title, body} = props.blog;

    // capitalize a word
    const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

    // like button count
    const [likeCount, setLikeCount] = useState(body.length);
    const increaseLike = () => setLikeCount(likeCount + 1);

    // dislike button count
    const [dislikeCount, setDislikeCount] = useState(title.length);
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
                <h2 style={blogStyle}>{capitalize(title)}</h2>
                <p>
                    <strong>Author:</strong> {capitalize(title.slice(0, 10))} <br />
                    <strong>Date:</strong> 21/09/2022
                </p>
            </header>
            <main>
                <article style={{color: "gray"}}>{body}</article>
            </main>
            <footer>
                <div className='btn'>
                    <button onClick={increaseLike}>Like</button>
                    <button onClick={increaseDislike}>Dislike</button>
                    <button onClick={batterDrain}>Mobile</button>
                </div>
                <div className='counting'>
                    <span><i class="bi bi-hand-thumbs-up"></i> {likeCount}</span>
                    <span><i class="bi bi-hand-thumbs-down"></i> {dislikeCount}</span>
                    <span><i class="bi bi-battery-full"></i> {charge}%</span>
                </div>
            </footer>
        </div>
    );
};

export default Blog;