import React　from 'react';
import bookImg from './img/Digital-library.jpg';
import bookSharing from './img/bookSharing.jpg';
import './about.css';

const About = () => (
  <div className="about">
    <h1>About</h1>
    <p>GiBook is derived from 'Give' and 'Book'. <br/>GiBook means giving book to someone whom you want to share the book.</p>
    <br/>
    <p>This page is created for the purpose of imaging true digital book sharing.<br/><br/></p>
    <img className="digitalBook" src={bookImg} alt="digitalBookImg"/>
    <p>These days, we are reading digital book by using kindle for example.<br/> However, the problem of digital book is that we cannot share the books we read even if we really want to share the book. <br></br>In the real world, we can borrow and rent the books.<br/> So we can share the content, and talk about that with each other.</p>
    <img className="bookSharing" src={bookSharing} alt="sharing_img"/>
    <p>GiBook can provide the feeling of sharing the book which you like. <br/>If you find the book intersting, you can soon share the content by sending access token.</p>
    <p>Ask anything to <span><a href="https://twitter.com/ryooftennis">my twitter account</a></span></p>
  </div>


  );

export default About;