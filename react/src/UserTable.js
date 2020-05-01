import React from 'react';

const UserTable = ({data}) => <table id="tab">
   <thead><tr><th>Name</th><th>Email</th></tr></thead>
   <tbody>{data.map((user, i) => <tr key = {i}><td>{user.name}</td><td>{user.email}</td></tr>)}</tbody>
   </table>

export default UserTable;

