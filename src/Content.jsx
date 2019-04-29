import React, {Component} from 'react';
import web3 from './Web3';
import giBookJSON from './contracts/giBook.json';


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
      document.querySelector('.content').style.display = "none";
    }
  }


  render() {
    return (
    <div className="content">
      <h3>Content Page</h3>
    </div>
  );

  
  
}


 

}

export default Content;