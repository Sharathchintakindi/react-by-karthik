import { useState, useEffect } from "react";

function Comp1(props) {
  const [val, setVal] = useState("");
  useEffect(()=>{
    console.log("use Effect in comp1 is invoked" ,val);
  },[val])
  return (
    <>
      <div>This is my first component</div>
      <div>This is name :{props.name}</div>
      <div>This is age :{props.age}</div>
      <input value={val} onChange={function(event){
        setVal(event.target.value)
        console.log(event.target.value)

      }}/>
      <button
        onClick={function () {
          props.callback(val);
        }}
      >
        clickme
      </button>
    </>
  );
}

export default Comp1;
