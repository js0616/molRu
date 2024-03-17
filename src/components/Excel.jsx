// excel 다운로드용 
// react-csv 사용

import React, { useState } from 'react'
import { CSVLink } from "react-csv";



const Excel = ({data, my_result,ratio}) => {

    // excel용
    const [headers,setHeaders] = useState([])
    const [edata,setEdata] = useState([])

    const exceldata = ()=>{

        let temp_headers = ['물질']
        let temp_data = [['목표값'],['질량(wt%)'], ['몰질량(g/mol)'],['밀도(g/cm3)'],['질량(g)'], ['부피(mL)'], ['종류']]
        let temp_num = 0

        for (let i = 0 ; i < data.length ; i++){
            temp_headers.push(data[i].name) // 물질
            
            temp_data[0].push(data[i].target) // 목표값

            temp_num = my_result[i]/ratio*100 
            // temp_num = temp_num.toString().slice(0,10)
            temp_data[1].push(temp_num) // 비율

            temp_data[2].push(data[i].molMass) // 몰질량           
            temp_data[3].push(data[i].density) // 밀도
            temp_data[4].push(data[i].weight) // 질량
            temp_data[5].push(data[i].weight/data[i].density) // 부피
            temp_data[6].push(data[i].type) // 종류
        }

        setHeaders(temp_headers)
        setEdata(temp_data)

    }

    const getDownloadFileName = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        return `molRu_${year}-${month}${day}-${hours}${minutes}.csv`;
    };
   
  return (
    <div className='excel' onClick={exceldata}>
        <CSVLink data={edata} headers={headers} filename={getDownloadFileName()}>
            Download
        </CSVLink>

    </div>
  )
}

export default Excel