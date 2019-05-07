import React, {Component} from 'react';
import web3 from './Web3';
import giBookJSON from './contracts/giBook.json';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Content_Japanese from './Content_japanese.jsx';
import Content_English from './Content_english.jsx';
import "./content.css";
import sorry from './img/sorry.jpg';



const address = '0xb218e1d2d92dbf5cf5ce9339361fd33043c3635d';
const giBook = new web3.eth.Contract(giBookJSON.abi, address);



class Content extends Component {
  constructor(props) {
    super(props)


    this.state = {
    }
    this.checkToken();
  }

  checkToken = async() => {
    this.setState({message: 'Checking authentification'});
    const accounts = await web3.eth.getAccounts()
    const checked = await giBook.methods.checkToken(accounts[0]).call();
    if(checked === true) {
      console.log('You have permission')
    } else if(checked === false) {
      document.querySelector('.content_page').innerHTML = "<h3>You do not have GiBook Token to read the book. <br>Please receive GBT from someone.</h3>";
      var img = document.createElement('img')
      img.src = sorry
      img.alt = "sorry"
      img.className = "sorry"
      document.querySelector('.content_page').appendChild(img);
    }
  }


  render() {
    return (
    <Router>
    <div className="content_page">
    <Link className="language" to="/content_english">English</Link>
    <Link className="language" to="/content_japanese">日本語</Link>

    <Switch>
      <Route exact default path="/content_japanese" component={Content_Japanese}></Route>
      <Route exact component={Content_English}></Route>

    </Switch>
    </div>
    </Router>
  );

  
  
}


 

}

export default Content;