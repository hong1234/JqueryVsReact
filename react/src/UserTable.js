import React from 'react';

const UserTable = ({data}) => <table id="tab">
   <thead><tr><th>Name</th><th>Email</th></tr></thead>
   <tbody>{data.map((user, i) => <tr key = {i}><td>{user.name}</td><td>{user.email}</td></tr>)}</tbody>
   </table>


const UserTableApp = ({data, loadData, resetData}) => { 
              let button = <button onClick = {loadData}>LOAD DATA</button>;
              let content = <div></div>;
             
              if (data.length > 0) {
                 button = <button onClick = {resetData}>RESET DATA</button>;
                 content = <UserTable data={data} />;  
              }               
              return (   
                <div>
                  {button}
                  {content}
                </div>)         
};

export default UserTableApp;

