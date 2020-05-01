import React from 'react';
import DataHOC from './DataHOC.js';
import UserTable from './UserTable.js';

const url_to_api = "https://jsonplaceholder.typicode.com/users";
const UserTableWithData = DataHOC(url_to_api)(UserTable)

class App extends React.Component {
  render(){
    return(
      <div><h2>MINI APP</h2>
      <UserTableWithData /></div> 
    )
  }
}
export default App;

