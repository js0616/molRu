// 세부 설명용 (도움말)

import React, { useState } from 'react';

const Modal = () => {
  const [subTextVisibility, setSubTextVisibility] = useState({});

  const toggleSubText = (title) => {
    setSubTextVisibility((prevState) => ({
      ...prevState,
      [title]: !prevState[title] || false
    }));
  };

  return (
    <div className='modal'>
      <div className='main_title'>INFO</div>
      <div>
        <div className='sub_title' onClick={() => toggleSubText('표 입력')}>
          1. 표 입력
        </div>
        {subTextVisibility['표 입력'] && (
          <div className='sub_text'>
            _ : 만들 표의 갯수 <br /> 'n개 추가' 버튼 누르면 생성 <br />
            1개추가 : 테이블 1줄 추가됨 <br /> 비추 : 테이블 1줄 삭제됨 <br />
          </div>
        )}
      </div>

      <div className='sub_con'>
        <div className='sub_title' onClick={() => toggleSubText('정보 입력')}>
          2. 정보 입력
        </div>
        {subTextVisibility['정보 입력'] && (
          <div className='sub_text'>
            name : 이름 <br />
            molMass : 분자량 <br />
            density : 밀도 <br />
            type : Salt, Solvent, Additive <br />
            target : type 별 목표량 <br />
            결과 (g): 계산된 무게 <br />
            비율 : 각 목표값에 맞는 wt% <br />
            <br />
            ※ type 별 목표값 <br />
            Salt : M (mol/L) <br />
            Solvent : Solvent 비율(%) <br />
            Additive : wt% (wt/total_wt*100) <br />
          </div>
        )}
      </div>

      <div>
        <div className='sub_title' onClick={() => toggleSubText('초기화')}>
          3. 초기화
        </div>
        {subTextVisibility['초기화'] && (
          <div className='sub_text'>
            표1 '초기화' 버튼 : 모든 내용 삭제 <br />
            표2 '초기화' 버튼 : 계산 결과 삭제 <br />
          </div>
        )}
      </div>

      <div>
        <div className='sub_title' onClick={() => toggleSubText('계산')}>
          4. 계산
        </div>
        {subTextVisibility['계산'] && (
          <div className='sub_text'>
            초기값을 계산하여 목표치와 비교 후 보정을 반복함 <br />
            반복 횟수 : 최대 10000회  <br />
            <br />
            [공통] <br />
            total_vol(L) += weight/density/1000 <br />
            total_weigtht(g) += weight <br />
            <br />
            [Solvent] <br />
            각 용매 부피(mL) = 목표(%) x 10 <br />
            전체 용매의 합계 1L 기준 <br />
            각 용매 무게 = 목표(%) x 10 x 밀도(g/mL) <br />
            <br />
            [Salt, Additive] <br />
            초기값 질량 1g 으로 시작하며 <br />
            Salt, Additive의 M , wt% 의 값을 계산 <br />
            부족한 비율만큼 질량 값을 보정 <br />
            <br />
            오차 : target - temp_mol <br />
            조건 : 0.0001 미만 <br />
            계산값 = weight/molMass/total_vol <br />
            보정식 = weight*target/temp_mol <br />
          </div>
        )}
      </div>

      <div>
        <div className='sub_title' onClick={() => toggleSubText('결과값')}>
          5. 결과값
        </div>
        {subTextVisibility['결과값'] && (
          <div className='sub_text'>
            결과(g) : 1L 용매 기준 목표 물질의 양(g) <br />
            비율(wt%) : 해당 물질의 무게 백분율 <br />
            결과값은 전체 10자리 이후 버림 <br />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
