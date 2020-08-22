import React from 'react';
import ReactDOM from 'react-dom';
import DataHOF from './DataHOF.js';
import UserTable from './UserTable.js';
import './style.css';

const rest_api_url = "https://jsonplaceholder.typicode.com/users";
const UserTableWithData = DataHOF(rest_api_url, UserTable)

const App = () => <div><h2>React Mini App</h2>
      <UserTableWithData /></div> 

ReactDOM.render(
    <App/>, 
    document.getElementById('app')
);
