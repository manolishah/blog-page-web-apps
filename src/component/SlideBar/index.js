import React,{useState,useEffect} from 'react';
import './index.css';
import Card from '../UI/Card';
import blogPost from '../../Data/blog.json';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const SlideBar = (props) => {
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
       const posts= blogPost.data;
       setPosts(posts);
    },[posts]);
    return(
       <div className="sildeBarContainer">
            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:"border-box"}}>
                <div className="cardHeader">
                    <span>AboutUs</span>
                </div>
                <div className="profileImageContainer">
                        <img src={require("../../assest/image/manoli.jpg")} alt="myimg"/>
                </div>
                <div className="cardBody">
                    <p className="pesonalBio">May NAme is Manoli shah. I am Software Devloper in front and devlopment....) </p>
                </div>
            </Card> 
            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:"border-box"}}>
            <div className="cardHeader">
                    <span>Soial Network</span>
                   <div className="scocalMediaIcon">
                   <img src={require('../../assest/icons/download.png')} alt="post image"/>
                    <img src={require('../../assest/icons/instra.png')} alt="post image"/>
                    <img src={require('../../assest/icons/link.png')} alt="post image"/>
                   </div>
                </div>
            </Card>
            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:"border-box"}}>
            <div className="cardHeader">
                    <span>Recent Post</span>
                </div>
                {
                    posts.map(post=>{
                        return(
                            <NavLink key={post.id} to={`/post/${post.id}`}>
                                <div className="recentPosts">
                                <div className="recentpost">
                                <h3 >{post.blogTitle}</h3>
                                <span>{post.postedOn}</span>
                               </div>
                        </div>
                            </NavLink>      
                        );
                    })
                }
            </Card> 
       </div> 
    ); 
}
export default SlideBar;