import React, {useState} from 'react';
import axios from 'axios';
import { registerUser, loginUser } from '../../api';


export default function LoginForm() {
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
          let response = await loginUser(userData)
          console.log(response);
          setName('')
          setEmail('')
          setPassword('')
        } catch(e) {
          console.error(e)
        }
    }

  return (
    <div>
        <h1>Login</h1>
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

            <input type="submit" value="Login" />
            </form>
  </div>
  );
}
