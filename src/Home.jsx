import React, {Component} from 'react';
import './App.css';
import web3 from './Web3';
import giBookJSON from './contracts/giBook.json';
//import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


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
      targetAccount: ''
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    this.getTimes()
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
    if(checked === true) {
      alert('authorized')
    } else if(checked === false) {
      alert('not authorized')
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
    <div className="home">
      <header>
        <h2 id ="title">GiBook</h2>
      </header>
        <div className="bookContents">
        <img src="" alt="bookImage"></img>
        <p id="bookTitle">Title: <span>『Zero To One』</span></p>
        <button onClick={this.checkToken}>Read more</button>
        </div>
        <p id="authorized"></p>
        <input type="text" name="toAccount" onChange={this.handleChangeText} value={this.state.toAccount}/>
        <button id="give" onClick={this.transfer}>GIVE</button>
        <p id="transferDetail">This book is read by {this.state.times} people</p>
    </div>
  );

  
  
}
}



export default Home;
