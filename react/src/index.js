import React from 'react';
import ReactDOM from 'react-dom';

import DataHOC from './DataHOC.js';
import UserTable from './UserTable.js';

import './style.css';

const URL_TO_DATA = "https://jsonplaceholder.typicode.com/users";

const UserTableWithData = DataHOC(URL_TO_DATA)(UserTable)

ReactDOM.render(<UserTableWithData />, document.getElementById('app'));
