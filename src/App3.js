import { useState } from 'react';
// import './App.css';

function App(){
    
    const formSubmitted=(event)=>{
        alert("Form submitted")
        event.preventDefault()
    }
    const [fruit, setFruit]=useState("mango")
    const [gender ,setGender]=useState(null)
    let hobbies=[]
    const setHobby = (event)=>{
        if(event.target.checked){
            hobbies.push(event.target.value);
        }
        else{
            hobbies = hobbies.filter((item)=>{
                if(item!==event.target.value){
                    return item
                }
            })
        }
        console.log(hobbies);
    }

    return(
        <>
        <h1>Sign up form</h1>
        <form method='GET' onSubmit={formSubmitted}>
            <input type='text' name='username' placeholder='Username' /><br />
            <input type='email' name='email' placeholder='email@example.com' /><br />
            <input type='contact' name='contact' placeholder='9566444576' /><br />
            <input type='password' name='password' placeholder='Password' /><br />
            <input type='submit' value="Submit" />
        </form>

        <select value={fruit} onChange={(e)=>{setFruit(e.target.value)}}>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="mango">Mango</option>
        </select>
        {
            <p>The Selected Fruit is {fruit}</p>
        }

        <h3>Select Gender</h3>
        <input type="radio" name="gender" value="Male" onClick={(e)=>{setGender(e.target.value)}} /> Male<br />
        <input type="radio" name="gender" value="Female" onClick={(e)=>{setGender(e.target.value)}} /> Female<br />
        <input type="radio" name="gender" value="Other" onClick={(e)=>{setGender(e.target.value)}} /> Other<br />
        {
            <p>Selected Gender is {gender}</p>
        }
        <h3>Select Hobbies</h3>
        <input type="checkbox" value="cricket" onChange={(e)=>{setHobby(e)}} />Cricket<br />
        <input type="checkbox" value="football" onChange={(e)=>{setHobby(e)}} />Football<br />
        <input type="checkbox" value="volleyball" onChange={(e)=>{setHobby(e)}} />Volleyball<br />
        

        </>
    )
}
export default App