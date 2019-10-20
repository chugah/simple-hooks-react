import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');
  const [user] = useState('users');
  return (
    <div className="ui container" style={{ marginTop: '2.5%' }}>
      <div>
        <button className="ui primary button" onClick={() => setResource('posts')}>Posts</button>
        <button className="ui secondary button" onClick={() => setResource('todos')}>ToDos</button>
      </div>
      <ResourceList resource={resource} />
      <UserList user={user} />
    </div>
  );
}

export default App;
