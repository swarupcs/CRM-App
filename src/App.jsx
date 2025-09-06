import './App.css';

import React from 'react';

import Login from './pages/auth/Login';

function App() {
  const [user, setUser] = React.useState(null);
  return <Login />;
}

export default App;
