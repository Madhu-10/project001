// https://github.com/Kernelogy/react-workout-001
// import logo from './logo.svg';
import './App.css';
// import CardComponent from './CardComponent';
// import MyComponent from './MyComponent';
// import Box from './components/Box';
// import Person from './components/Person';
// import ScoreBoard from './components/ScoreBoard'
// import Garrage from './components/Garrage'
import ProductCard from './components/ProductCard';

function App() {
  // const buttonClicked = () => {
  //   alert("I'm clicked")
  // }
  // const buttonClicked2 = (event) => {
  //   console.log(event.target);
  //   event.target.value="Button is Off"
  //   event.target.style = "color:red"
  // }
  // const name="Madhu"
  // const age=20
  const fruits =["Apple","Mango","Orange","Guava","Grapes"]
  const students = [
    {key: 1, value: "Madhu"},
    {key: 2, value: "Deepi"},
    {key: 3, value: "Dharshini"}
  ]
  const items = [
    {title: "Watch", desc: "Titan Watch", price: "450.50"},
    {title: "Pen", desc: "Parker Pen", price: "600.50"}
  ]
  return (
    <div>
        {/* <h1>Hello World</h1>
        <CardComponent />
        <MyComponent /> */}
        {/* <Box />
        <Person 
        name="Madhu"
        age="20"
        gender="Female"
         />
        <input type='button' value="Click on me" onClick={buttonClicked} /><br />
        <input type='button' value="Button is on" onClick={buttonClicked2} /> */}
        {/* <ScoreBoard isScored="false" />
        {
          name && age &&
          <h1>All the data are available</h1>
        }
        {
          name &&
          <h1>Name is {name}</h1>
        }
        {
          age &&
          <h1>Age is {age}</h1>
        } */}
        {/* <Garrage />
        <Garrage length="5" /> */}
        <ul>
        {
          fruits.map((fruit)=>{
            return <li>{fruit}</li>
          }
          )
        }
        </ul>
        
        {
      students.map((student)=>{
        return <>
          {student.key} ===== {student.value} <br></br>
        </>
      })
    }
    
    {
      items.map((item)=>{
        return <ProductCard 
          title = {item.title}
          desc = {item.desc}
          price = {item.price}        
        />
      })
    }
    </div>
  );
}

export default App;
