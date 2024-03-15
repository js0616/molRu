import React,  {useState} from 'react'
import Elements from './Elements'
import Cal from './Cal';

const Main = () => {
  const [data, setData] = useState([]);


  return (
    <div>
      <Elements data={data} setData={setData} />
      <Cal data={data} setData={setData} />
    </div>
  )
}

export default Main