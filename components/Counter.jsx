import { useState } from "react";




function Counter () {
const [count, setCount ] = useState(0)

function increment  ()  {
  setCount ((prevCounter) => prevCounter + 1)
  setCount ((prevCounter) => prevCounter + 1)
}


  function decrement ()  {
    setCount ((prevCounter) => prevCounter - 1)
    setCount ((prevCounter) => prevCounter - 1)
  }



  return <div className="counter__wrap">
    <button onClick={decrement} className="cbtn">-</button>
  {count}
  <button onClick={increment} className="cbtn">+</button>
</div>

}

export default Counter;