import React from 'react';
import './style.css';
import Card from "../../../component/UI/Card";

const RecentPoat = props =>{
 
    return(
        <div style={props.style}>
        <Card style={{marginBottom:'20px'}}>
            <div className="postImageWareper">
            <img src={require('../../../blogPostImage/Fitness-baby-post.jpg')} alt="post image"/>
            </div>
            <div style={{textAlign:'center'}}>
                <span>Featured</span>
                <h2>Fitness Mantea To Live Fit Life</h2>
                <span>post on May 03,2016 by manoli shah</span>
                <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate</p>
                <button>Read More</button>
            </div>
        </Card>
        </div>
    );
}
export default RecentPoat; 