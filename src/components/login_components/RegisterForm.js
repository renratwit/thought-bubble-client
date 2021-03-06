import axios from 'axios';
import React, {useState} from 'react';
import { registerUser } from '../../api';

export default function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let userData = {
      name: name,
      email: email,
      password: password
    }
    console.log(userData)
    try {
      let response = await registerUser(userData)
      console.log(response);
      if (response.data.status === 'error') {
        alert(response.data.error)
      }
      setName('')
      setEmail('')
      setPassword('')
    } catch(e) {
      console.error(e)
    }

  }

  return (
    <div>
      <h1>Register</h1>
			<form onSubmit={handleFormSubmit}>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder = "Name"
        />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
				<br />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

				<br />

				<input type="submit" value="Register" />
			</form>
    </div>
  );
}
