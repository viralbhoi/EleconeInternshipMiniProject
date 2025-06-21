import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handelSubmit = (e) =>{
        e.preventDefault();

        setUser({username,password});
    }

  return (
    <>
        <h2>UserLogin</h2>

        <label htmlFor="username"> Username:  </label>
        <input type="text" 
            onChange = {e => setUsername(e.target.value)}
            value = {username}
            placeholder='Enter Username'
            id='username'
        />

        <label htmlFor="password"> password:  </label>
        <input type="text" 
            onChange = {e => setPassword(e.target.value)}
            value = {password}
            placeholder='Enter Password'
            id='password'
        />

        <button onClick={handelSubmit}> Submit !</button>
    </>
  )
}

export default Login
