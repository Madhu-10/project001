function Garrage(props){
    return(
        <>
        <h1>Garrage</h1>
        {
            props.length && 
            <p>You have {props.length} cars in garrage</p>
        }
        </>
    )
}
export default Garrage