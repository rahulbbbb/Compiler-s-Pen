import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase'

const CreateAccountPage = () => {
  const[email, setEmail]=useState('')
  const[password,setPassword]=useState('')
  const [confirmPassword, setConfirmPassword]=useState('');
  const[error,setError]=useState('')

  const navigate=useNavigate();

  const createAccount = async()=>{
    try{
      if(password !== confirmPassword){
        setError('Password and confirm password do not match');
        return;
      }
      await createUserWithEmailAndPassword(auth, email, password);
      window.alert('Account created successfully!');
      navigate('/articles');
    }catch(e){
      setError(e.message);
    }
  }

return (
 <>
 <form className="form">
 <h1>Create Account</h1>
 {error && <p className="error">{error}</p>}
 <input 
     placeholder='Your email address'
     value={email}
     onChange={e=>setEmail(e.target.value)}/>

 <input
  type="password"
  placeholder='Your password'
  value={password}
  onChange={e=>setPassword(e.target.value)}/>

<input
  type="password"
  placeholder='Re-enter your password'
  value={confirmPassword}
  onChange={e=>setConfirmPassword(e.target.value)}/>
 <button  style={{ backgroundColor: 'black' }}  onClick={createAccount}>Create Account</button>
 <Link  className="link" to="/login">Already have an account?<br></br> Log in here</Link>
 </form>
 </>
)
}

export default CreateAccountPage