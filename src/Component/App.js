import React,{useRef, useState}from 'react'
import Chil from "./Chil"
import "../App.css"
const App=()=>{

  const [data1,setdata1] = useState([{name:"mahmoud"},{name:"ram"},{name:"kareem"},{name:"mostufa"},{name:"osama"},])
const [data,setdata]=useState("")
const input =useRef(null)
function gg(e){
  setdata(e.target.value)
  console.log(data)
  }
  
const filter = data1.filter((ele)=>ele.name.includes(data))
return(
  <div className='cont'>
  <input type="text" placeholder='save in state' ref={input} ></input>
  <button >save</button>
<Chil list={filter}  gg={gg}/>
  </div>
)


}





export default App;