import "./App.css"
import { useState } from "react";

const Loginpage = ()=>{

    const[issubmitted , setIsSubmitted]=useState(false);
    const[iscorrectuser , setIsCorrectUser]=useState(false);
    
    const [inputs , setInputs]= useState({
        username:"",
        password:""
    });

    const handleChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setInputs((values)=> ({...values,[name]:value}));

    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        setIsSubmitted(true);
        if(inputs.username === "user" && inputs.password ==="password"){
            setIsCorrectUser(true);
        }
    }

    return (
        <div>
        <h1>Login Page</h1>
        {issubmitted  && iscorrectuser?
         <p>Welcome, user!</p> : 
         (   
            <div>
            {issubmitted  && !iscorrectuser && <p>Invalid username or password</p>}
            <form onSubmit={handleSubmit}>
            <div className="container">
             <div>
             <label htmlFor="username">Username:</label>
             <input type="text" required placeholder="username" name ="username" value={inputs.username} onChange={handleChange}></input>
             </div>
            
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" required placeholder="password" name ="password" value={inputs.password} onChange={handleChange}></input>
            </div>  
            
            </div>
            <button type="submit">Submit</button>
            </form>
            </div>

        )}
        
        </div>
    )
}

export default Loginpage;