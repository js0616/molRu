import React,  {useState} from 'react'
import Elements from './Elements'
import Cal from './Cal';
import Modal from './Modal';

const Main = ({isModalOpen, setIsModalOpen}) => {
  const [data, setData] = useState([]);
  


  return (
    <div>
      {isModalOpen && <Modal/>}
      <Elements data={data} setData={setData} />
      <Cal data={data} setData={setData} />
    </div>
  )
}

export default Main