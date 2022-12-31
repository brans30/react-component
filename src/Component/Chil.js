import React from "react";


function Chil({gg,list}){

const mm = list.map((ele,idx)=>(
    <div className="card" key={idx}>
        <div>{ele.name}</div>
    </div>
))
return(
    <div >
          <input type="text" placeholder="test" onChange={gg}></input>
        {mm}
      
    </div>
   
)


}

export default Chil;