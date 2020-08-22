import React from 'react';
import ReactDOM from 'react-dom';
import DataHOF from './DataHOF.js';
import UserTable from './UserTable.js';
import './style.css';

const url_to_api = "https://jsonplaceholder.typicode.com/users";
const UserTableWithData = DataHOF(url_to_api, UserTable)

const App = () => <div><h2>React Mini App</h2>
      <UserTableWithData /></div> 

ReactDOM.render(
    <App/>, 
    document.getElementById('app')
);
