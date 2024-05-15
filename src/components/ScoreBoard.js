function ScoreBoard(props){
    return(
        <>
        {
        props.isScored == "true"
        ? <h1>Goal Earned</h1>
        : <h1>Goal Missed</h1>
        }
        </>
    )
}
export default ScoreBoard