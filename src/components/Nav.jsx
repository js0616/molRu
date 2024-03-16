import React from 'react'

const Nav = ({isModalOpen, setIsModalOpen}) => {

  const modalToggle = () => {
    isModalOpen ?setIsModalOpen(false) :setIsModalOpen(true);
  };


  return (
    <div className='nav'>
        <div className='nav_img'>
            <img src='./img/molru.gif' />
        </div>

        <div className='nav_title'> Mol? 계산기</div>

        <div className='nav_img' onClick={modalToggle}>
            <img src='./img/molru.gif' />
        </div>
        
    </div>
  )
}

export default Nav