import {useEffect} from "react";
export function DisplayForm2({person}){
    useEffect(
        ()=>{
            console.log("Form Loading...")
            return(
                ()=>{
                    console.log("Form Unloading...");
                }
            )
        }
    ,[])
    return(
        <>        
        <h1>
            The Given Data are:
        </h1>
        
        Username : {person.username}<br />
        Email : {person.email}<br />
        Mobile : {person.mobile}<br />
        Password : {person.password}<br />
        </>
    )
}