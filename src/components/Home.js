import React from 'react';
import "./home.css";
import  { useEffect, useState } from 'react';



function Home() {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch('http://localhost:4000/getTimeStories');
      const data = await response.json();
      setStories(data);
    };

    fetchStories();
  }, []);
  
 
  return (
    <>
    <div className='parentdiv' style={{margin: "0px  auto"}}>
      <div className='left'>
      <div>
      <h2 className='Heading'>FEATURED VOICES</h2>
      </div>
        <div id="whole_left_flex">
        <div className='leftchild' id="left_child_left">
       
          <div className='content_center'>
            <span className='h4'>Anatol Lieven</span>
            <span  className='content'>Ruddia Has Been Warninig the West <br/> About Ukraine for Decades</span>
          </div>
          <div className='content_center'>
            <span className='h4' >Ismat Ara</span>
            <span  className='content'>How It Feels to Be a Muslim Women <br/>  solid by india's Right Wing</span>
          </div>
          <div className='content_center'>
            <span className='h4' >Robert J. Devis</span>
            <span  className='content'>Why ou Shouldn't Exercise yo Lose <br/>  Weight</span>
          </div>
        </div>
        <div  className='leftchild rightchild' id="right_child_left">
        
          <div className='content_center'>
            <span className='h4' >Yohanca Delgado</span>
            <span className='content'>The Life-Changing Practice That Will <br/>  Help You Feel More Gratitude</span>
          </div>
          <div className='content_center'>
            <span className='h4' >W. Kamau Bell</span>
            <span  className='content'>There's So Much More To Say about <br/>  Bill Cosby</span>
          </div>
          <div className='content_center'>
            <span className='h4' >Christina Bu</span>
            <span  className='content'>What Norway Can Teach the World <br/>  About Switching to Electric Vehicles</span>
          </div>
        </div>
        </div>
      </div>
      <div className='right'>
      <div id="rightleftchild"  style={{margin: "5px  auto"}}>
        <h3 style={{textAlign: 'center'}}>LATEST STORIES</h3>
        
        {stories.map((story, index) => (
          <div key={index} class="rightleftchildchild">
         <a className='right_text'> <span>{story.title}</span> </a>
          <a href={story.link}>{story.link}</a>
        </div>
        ))}
       </div>
      </div>
    </div>
    </>
  )


  }
  
  export default Home;
  