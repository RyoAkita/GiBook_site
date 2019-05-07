import React, {Component} from 'react';
import web3 from './Web3';
import giBookJSON from './contracts/giBook.json';
import Content from './Content.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './Home.css';
import bookImg from './img/bookTitle.jpeg';


const address = '0xb218e1d2d92dbf5cf5ce9339361fd33043c3635d';
const giBook = new web3.eth.Contract(giBookJSON.abi, address);



class Home extends Component {

  constructor(props) {
    super(props)


    this.state = {
      message: '',
      totalSupply: '',
      times: '',
      toAccount: '',
      targetAccount: '',
      permission: false
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    this.authorized();
    this.getTimes();
  }

  handleChangeText = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }
  

  getTimes = async() => {
    console.log('TO GET TIMES');
    const times = await giBook.methods.checkTimes().call();
    const timesNumber = parseInt(times, 10)
    console.log(times);
    this.setState({times: timesNumber});
  }

  transfer = async () => {
    console.log('Transfer Token');
    const accounts = await web3.eth.getAccounts();
    this.setState({message: 'Waiting on Transaction success...'})
  
    await giBook.methods.transfer(this.state.toAccount, 1).send({from: accounts[0]});
    this.setState({message: 'You transfered token.'})
  }

  checkToken = async() => {
    this.setState({message: 'Checking authentification'});
    const accounts = await web3.eth.getAccounts()
    const checked = await giBook.methods.checkToken(accounts[0]).call();
    if(checked === false) {
      alert('You do not have permission to read the book.');
      return;
    }
  }

    authorized = async() => {
    this.setState({message: 'Checking authentification'});
    const accounts = await web3.eth.getAccounts()
    const checked = await giBook.methods.checkToken(accounts[0]).call();
    if(checked === true) {
      document.querySelector('#authorized').innerHTML = 'You have GiBook Token, hence you can read the book.'
    } else if(checked === false) {
      document.querySelector('#authorized').innerHTML = 'You do not have GiBookToken to read the book. You should get GiBook Token from someone.'
    }
  }


  checkTotalSupply = async() => {
    const totalSupply = await giBook.methods.totalSupply().call();
    const totalSupplyNumber = parseInt(totalSupply, 10)
    console.log(totalSupplyNumber)
    this.setState({totalSupply: totalSupplyNumber})
  }



  render() {
    return (
    <Router>
    <div className="home">
        <div className="bookContents">
        <img src={bookImg} id="bookImg" alt="bookImage"></img>
        <p id="bookTitle">Title: <span id="bookTitleName">『Vision for LIFE』</span></p>
        <p id="bookDescription"><span id="bookDescribe">This book is about the vision making for our lives.<br></br>We can know that what vision is, and how to build appropriate vision.</span></p>

        <a id="readButton" onClick={this.checkToken} href="/content">Read more</a>
        </div>
        <p id="authorized"></p>
        <p id="illustration">You can give your GiBook Token to someone by using metamask. <br></br>Write down an address for sending Gibook Token.</p>
        <div className="iptxt">
        <input type="text" name="toAccount" className="address" onChange={this.handleChangeText} value={this.state.toAccount}/>
        <label>Address</label>
        <span className="focus_line"></span>
        </div>
        <a id="readButton" onClick={this.transfer}>GIVE</a>
        <p id="transferDetail">This book is read by {this.state.times} people</p>
        <p>＊Please install <span><a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ja">Metamask</a></span>Metamask if you do not have. And use rinkeby network.＊</p>
        <Switch>
        <Route exact path="/content" component={Content}></Route>
        </Switch>

    </div>
    </Router>
  );

  
  
}
}



export default Home;
