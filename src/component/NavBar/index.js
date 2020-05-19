import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
const NaveBar = (props) => {
  const[search,setSearch]=useState(false);
  const submitSearch = (e) =>{
    e.preventDefault();
    alert("search");
  }
  const openSearch = () =>{
    setSearch(true);
  }
  const searchClass=search?'searchInputactive':'searchInput';
    return(
      <div className="navbar">
         <ul className="navbarMenu">
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/about-us">AboutUs</NavLink></li>
           <li><NavLink to="/post">Post</NavLink></li>
           <li><NavLink to="/contact-us">ContactUs</NavLink></li>
         </ul>
         <div className="search"> 
          <form onSubmit={submitSearch}>
          <input type="text" placeholder="Search" className={searchClass} />
           <img onClick={openSearch} className="searchIcon"  alt="search" src={require('../../assest/icons/search.png')} ></img>
          </form>
         </div>
      </div>  
    ); 
}
export default NaveBar;