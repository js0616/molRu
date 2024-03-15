// 계산로직 관련 컴포넌트

import React, { useState } from 'react'

const Cal = ({data, setData}) => {

    const [my_result, setResult] = useState([])
    const [ratio, setRatio] = useState(0)

    const data_btn = () => {
        setResult([])
    
    }
    
    // 데이터 추가로 입력
    const handleInputChange2 = (index, event, field) => {
      console.log("인덱스 : ", index,"종류 : ", field, "값 : ",event.target.value  )
      const newData = [...data];   
      const value = event.target.value.trim() || '';
      newData[index][field] = value;
      setData(newData);
    };

    
    // data

    const Cal_target = ()=>{

        let count = 0
        let total_vol = 0
        let total_weigth = 0

        for (let i = 0 ; i < data.length ; i++) {
            let weight = parseFloat(data[i].weight)
            let density = parseFloat(data[i].density)

            total_vol += weight/density/1000
            total_weigth += weight
        }

        // console.log("전체 부피 :", total_vol, "전체 질량 :" , total_weigth)

        for (let i= 0; i < data.length ; i++) {
            let weight = parseFloat(data[i].weight)
            let molMass = parseFloat(data[i].molMass)
            let target = parseFloat(data[i].target)

            const newData = [...data]; 

            let value = 0
            let temp_mol = 0
            let temp_weight =0

            if (data[i].type === 'salt'){

                temp_mol = weight/molMass/total_vol
                
                if (target - temp_mol >= 0.0001 || temp_mol - target >= 0.0001){
                    value = weight * target/temp_mol 
                    newData[i].weight = value;
                    setData(newData);
                    count +=1
                }

            }else if (data[i].type === "additive"){
                temp_weight = weight/total_weigth * 100               
                if (target-temp_weight >= 0.0001 || temp_weight - target >= 0.0001 ){
                    value = weight * target/temp_weight
                    newData[i].weight = value;
                    setData(newData);
                    count +=1
                }

            }

        }

        return count
    }
    
    const roop = () => {
        let k = 1;
        setRatio(0)

        while (true){
            
            console.log(k)
            

            if (parseInt(Cal_target()) === 0){    
                let temp_arr = []
                let temp_num = 0

                for(let i=0; i < data.length; i++){
                    temp_arr.push(parseFloat(data[i].weight))
                    temp_num += parseFloat(data[i].weight)

                }
                setRatio(temp_num)
                setResult(temp_arr)
                break
            }
            k += 1

            if (k == 5000){
                alert("다시 확인해주세요")
                break
            }
        }

        
              
    }


  return (
    <div className='cal'>
        {/* <button onClick={data_btn}>데이터 확인</button> */}
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>목표</th>
                    <th>weight</th>
                    <th>결과(g)</th>
                    <th>비율</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row,index)=>(
                    <tr key={index}>
                        <td> {row.name} </td>
                        <td><input type="text" onChange={(e) => handleInputChange2(index, e, 'target')}/></td>
                        <td><input type="text" onChange={(e) => handleInputChange2(index, e, 'weight')} /></td>
                        <td>{ my_result[index]?.toString().slice(0,10)}  </td>
                        <td>{(my_result[index]/ratio*100)?.toString().slice(0,10)}  </td>
                     </tr>

                ))}
            </tbody>
        </table>
        <div className='cal_bottom_btn'>
            <button onClick={roop}>계산하기</button>
            <button onClick={data_btn} >결과 초기화</button>
        </div>
    </div>
  )
}

export default Cal