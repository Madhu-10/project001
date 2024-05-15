import { useEffect } from "react";
import { useState } from "react";

function Comments(){
    const [comments, SetComments] = useState(null)
    useEffect(
        ()=>{
           fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
                .then(response => response.json())
                .then((json) => {
                    SetComments(json)
                    console.log(json)
                })  
        }
    )
    return(
        <>
            <h1>These are Comments</h1>
            {
                comments &&
                comments.map((e)=>{
                    return <>
                        <p style ={{color:"red"}}>{e.postId} . {e.name}</p><br />
                        {e.body} <br />
                    </>
                })
            }
        </>
    )
}

function App(){
    const [showComments, setShowComments] = useState(false)
    return(
        <>
            <input type="button" value="Show Comments" onClick={ (e) => {setShowComments(!showComments)}} />
            {
                showComments &&
                <Comments />
            }
        </>
    )
}
export default App;

// import { useEffect } from "react";
// import { useState } from "react";

// function Counter({count}){
//     useEffect(
//         ()=>{
//             console.log("Component Rendering...");
//         }
//     ,[count])//props and state variable can be watched //count ah matu del panita ovoru increment kum component rendering varadhu
//     return(
//         <>
//             The counter value is {count}
//         </>
//     )
// }
// function App(){
//     const [count, setCount] = useState(0)
//     return(
//         <>
//             <input type="button" value="Increment" onClick={ () => {setCount(count+1)}} /><br />
//             <Counter count={count} />
//         </>
//     )
// }
// export default App