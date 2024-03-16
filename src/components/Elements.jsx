import React, { useRef, useState } from 'react'

const Elements = ({data , setData}) => {
    // let temp = 0;
    const [rows, setRows] = useState(0);

    let my_num = useRef(null);

    // table row 관련 로직 
    const addRow = () => {
        setRows(rows + 1); // 버튼 클릭 시 행 추가
      };

    const addRows = () => {
        let temp = my_num.current.value;
        temp = parseInt(temp)
        if (temp>0){
            setRows(temp)
        }
        
    }

    const minusRow = ()=>{
      setRows(rows-1)

    }

    const deleteRow = ()=>{
        setRows(0)
        setData([])
    }

 
    //  table 값 data 에 저장
    const handleInputChange = (index, event, field) => {
      // console.log("인덱스 : ", index,"종류 : ", field, "값 : ",event.target.value  )
      const newData = [...data];   
      if (!newData[index]) {
        newData[index] = { name: '', molMass: '', density: '' , type: '', target:'', weight:'1'};
      }
      
      // 입력 필드의 값이 null 또는 undefined인 경우 빈 문자열로 처리
      const value = event.target.value.trim() || '';

      newData[index][field] = value;
      setData(newData);
    };


  //  연산 로직 

  return (
    <div className='ele'>
        <div className='top_btn'>
            <input type="number"  ref={my_num} ></input>
            <button onClick={addRows}> n개추가 </button>
            {/* <button onClick={deleteRow}> 초기화 </button> */}
        </div>
        
        <table className='ele_table'>
            <thead>
            <tr>
                <th>no</th>
                <th>Name</th>
                <th>g/mol</th>
                <th>g/mL</th>
                <th>type</th>
            </tr>
            </thead>
            <tbody>
            {/* 행 추가 */}
            {[...Array(rows)].map((_, index) => (
                <tr key={index}>
                    <td className='no'>{index+1} </td>
                    <td><input type="text"  onChange={(e) => handleInputChange(index, e, 'name')} /></td>
                    <td><input type="number"  onChange={(e) => handleInputChange(index, e, 'molMass')} /></td>
                    <td><input type="number"  onChange={(e) => handleInputChange(index, e, 'density')} /></td>

                    <td>
                      <select onChange={(e)=> handleInputChange(index, e, 'type')}>
                        <option value="">필수 선택</option>
                        <option value="salt">Salt</option>
                        <option value="solvent">Solvent</option>
                        <option value="additive">Additive</option>
                      </select>
                    </td>

                </tr>
            ))}
            </tbody>
      </table>
      <div className='bot_btn'>
        
        <button onClick={addRow}> 1개추가 </button>
        <button onClick={minusRow}> 비추 </button>
        <button onClick={deleteRow}> 초기화 </button>
      </div>

      
    </div>
  )
}

export default Elements