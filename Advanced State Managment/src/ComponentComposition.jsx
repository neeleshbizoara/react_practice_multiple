import React, { useState } from 'react';

// TextInput component
const TextInput = ({ label, value, onChange, type = 'text' }) => (
  <div>
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} />
  </div>
);

// Button component
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

// Form component that uses TextInput and Button
const UserForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login logic using username and password
    console.log('Logging in:', username, password);
  };

  return (
    <form>
      <TextInput label="Username" value={username} onChange={handleUsernameChange} />
      <TextInput label="Password" value={password} onChange={handlePasswordChange} type="password" />
      <Button label="Login" onClick={handleLogin} />
    </form>
  );
};

// App component that uses UserForm
const ComponentComposition = () => (
  <div>
    <h1>User Login</h1>
    <UserForm />
  </div>
);

export default ComponentComposition;
