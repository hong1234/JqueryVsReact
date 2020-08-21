import React from 'react';
import ReactDOM from 'react-dom';
import DataHOF from './DataHOF.js';
import UserTable from './UserTable.js';
import './style.css';

const url_to_api = "https://jsonplaceholder.typicode.com/users";
const UserTableWithData = DataHOF(url_to_api, UserTable)

class App extends React.Component {
  render(){
    return(
      <div><h3>React Mini App</h3>
      <UserTableWithData /></div> 
    )
  }
}

ReactDOM.render(
    <App/>, 
    document.getElementById('app')
);
