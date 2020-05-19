import React from 'react';
import './style.css';
import Card from "../../component/UI/Card";
import SlideBar  from "../../component/SlideBar";
import RecentPoat from './RecentPost';

const Home = props =>{
    const gallaryHeight=450;
    const gallaryStyle={
        heigth:gallaryHeight+'px',
        overflow:'hidden'
    }
    const slidImageHeigth=gallaryHeight/3;
    return(
        <div>
            <Card >
            <div className="gallaryPost" style={{gallaryStyle}}>
            <section style={{width:'70%'}} >
                <div className="MainImageWrapper">
                <img src={require('../../blogPostImage/Fitness-baby-post.jpg')} alt="post image"/>
                </div>
            </section>
            <section className={"slidImageWrapper"} style={{width:'30%'}}>
                <div  style={{heigth:`${slidImageHeigth}px`}}>
                <img src={require('../../blogPostImage/Beautiful-&-simple.jpg')} alt="post image"/>
                </div >
                <div style={{heigth:`${slidImageHeigth}px`}}>
                <img src={require('../../blogPostImage/Beautiful-&-simple.jpg')} alt="post image"/>
                </div>
                <div style={{heigth:`${slidImageHeigth}px`}}>
                <img src={require('../../blogPostImage/Beautiful-&-simple.jpg')} alt="post image"/>
                </div>
            </section>
            </div>
        </Card>
         <section className="HomeContainer">
          <RecentPoat  style={{width:'70%'}}/>
           <SlideBar />
       </section>
        </div>
        
    );
}
export default Home; 