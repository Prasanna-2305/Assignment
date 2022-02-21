import React, {useState} from 'react'

export default function Page2() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <center>
    <h1>
      Count {count}
    </h1><br />
    <button onClick={()=>setCount(count+1)}>
      Counter
    </button>
    </center>
    </div>
  )
}
