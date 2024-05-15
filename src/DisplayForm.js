export function DisplayForm({person}){
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