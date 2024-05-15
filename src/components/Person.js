function Person(props){
    return(
        <>
        <h1>Hi Welcome {props.name}</h1>
        <h2>You are {props.gender} and your age is {props.age}</h2>
        </>
    )
}
export default Person