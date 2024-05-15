import './App.css'
import { useState } from 'react';

function App(){
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const textChanged = (event)=>{
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    return(
        <>
        <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} /><br /><br />
        <input type="text" placeholder="Username" onChange={textChanged} />
        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
        {/* {
            username &&
            <p>Welcome {username}</p>
        } */}
        {/* {
            password &&
            <p>Welcome {password}</p>
        } */}
        {
            username && password &&
            <p>Welcome {username} <br />
            The given password is {password}</p>
        }
        </>
    )
}
export default App;

// import './App.css'
// function App(){
//     const okClicked=()=>{
//         let userText = document.getElementById("username").value;
//         alert("Welcome "+userText);
//     }
//     return(
//         <>
//             <input type="text" id="username" placeholder="Username" />
//             <input type="button" value="Ok" onClick={okClicked} />
//         </>
//     )
// }

// export default App;
