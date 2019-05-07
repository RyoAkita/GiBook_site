import React, {Component} from 'react';
import blockChain_img from './img/blockchain_img.png';
import key from './img/key.png';
import bookSharing from './img/bookSharing.jpg';
import './system.css';


const System = () => (
    <div className="system">
    <h1>GiBook System</h1>
    <h3>Blockchain Use case</h3>
    <img className="blockchain_img" src={blockChain_img} alt="blockChain_img"/>
    <p>Blockchain Technology is expected to innovate the whole world. <br/>Blockchain technology enables distributed public ledgers that hold immutable data in a secure and encypted way and ensure that transactions can never be altered.</p>   
    <img className="key" src={key} alt="access token img"/>
    <p>So we are now searching various use case for Blockchain technology.<br/> One of the use cases is that issuing access token on the blockchain. <br/>We can pursue how the access token is transferd, and who is having the access token. <br/>This feature is provided by using Blockchain technology.</p>
    <img src={bookSharing} alt="sharing img"/>
    <p>This GiBook application privides the feeling of true sharing digital books. <br/>This cannot be achieved by web2.0 system.<br/> Please feel the web3.0 true digital book sharing.</p>
    <p>Source Code of GiBook application is <span><a className="sourceCode" href="https://github.com/RyoAkita/GiBook_site">Here</a></span><br/>Please advise me how to improve my code.</p>
   
   
    </div>
);

export default System;