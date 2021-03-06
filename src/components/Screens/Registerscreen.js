import React, {useState,} from 'react'
import axios from 'axios'
import Loader from '../Loader'
import Success from '../Success'

const Registerscreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false)

   const Registerhandler = async() => {
       if(password === cpassword){
       const user = {
           name,
           email,
           password,
           cpassword
       }

          try{
              setLoading(true)
              const res = await axios.post('https://dry-ocean-12978.herokuapp.com/api/users/register', user)
              console.log(res.data)
              setLoading(false)
              setSuccess(true)
              setName('')
              setEmail('')
              setPassword('')
              setCpassword('')
          }catch(error){
              console.log(error)
          }

    }else {
        alert('passwords do not match')
    }
   }

    return (
        <div>
            {loading && (<Loader />)}
            {success && (<Success message="Registered successfully"/>)}
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5'>
                    <div>
                        <h1>Register</h1>
                    <input type='text' className='form-control' placeholder='name'
                     value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input type='text' className='form-control' placeholder='email'
                    value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type='text' className='form-control' placeholder='password'
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <input type='text' className='form-control' placeholder='confirm password'
                    value={cpassword} onChange={(e)=>setCpassword(e.target.value)}/>
                   </div>
                   <button className='btn btn-primary mt-2' onClick={Registerhandler}>Register</button>
                </div>

            </div>
        </div>
    )
}

export default Registerscreen
