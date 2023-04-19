import React,{useState} from 'react';
import './Login.css'

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    let [value, setValue] = useState({
        
        email: '',
        pass: '',
       
    })
    let [err, seterr] = useState(false)
    let [errtxt, seterrtxt] = useState('')

    
    let handleInputChange = (e) => {
        setValue({
            ...value, 
            [e.target.name]: e.target.value
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if ( !value.email || !value.pass) {
            seterr(true)
            seterrtxt('Some fields are missing')
            
        } 
     
        else {
            seterr(false)
            navigate('/home');
            // navigate('/list');
           
        }
    }
    //   let handleSubmit=()=>{
    //     alert();
    //   }

    return (
        <form>
            
            
        
            <div className="logo1" > 
               <img className="logo1" src ="https://tse2.mm.bing.net/th?id=OIP.YdkQGmhB9c2Sr84FeDD9egHaEK&pid=Api&P=0" alt="img" />
                
        
               </div>
               <div className='card1'>

                <h1>Sign in</h1>
                <form>
                <div className='form'>
                    <lable for="">Email </lable>
                    <input type="mail" name="email" required value={value.email} onChange={handleInputChange}/>
                    <lable for="">Password</lable>
                    <input type="password" name="pass"  required value={value.pass} onChange={handleInputChange}/>
                    {/* <button  type="submit" value="Submit"  onClick={handleSubmit}>Sign in</button> */}
                    {err ? <div className="err">{errtxt}</div> : null}
                    <button  type="submit" value="Submit"  onClick={ handleSubmit}>Sign in</button>
                  
                </div>
                </form>
                </div>
                
         </form>
    );
}

export default Login; 