import React from 'react';
import useResources from './useResources';

const UserList = ({ user }) => {
  const users = useResources(user);
  return (
    <div>
      <h2>{user}</h2>
      <ul className="ui list">
        {users.map((user) =>
          <li className='item' key={user.id}>
            {user.name}
          </li>)
        }
      </ul>
    </div>
  );
}

export default UserList;
