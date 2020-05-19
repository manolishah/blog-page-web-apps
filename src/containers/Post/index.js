import React from 'react';
import './style.css';
import BlogPost from '../../component/BlogPost';
import SlideBar from '../../component/SlideBar';

const Post = props =>{
    return(
       <section className="container">
            <BlogPost {...props}/>
            <SlideBar  />
       </section>
    );
}
export default Post; 