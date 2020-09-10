import React from 'react';
import {Divider, Checkbox} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import InfoBtn from '../Info-Btn/Info-Btn';

const CheckBoxGroup = ({optionsForBoat}:any) => {
    const {leftArray, rightArray} = MapCheckBox(optionsForBoat);
    return (
        <>
        <Divider orientation='left'>Крепление тента</Divider>
        <div className='row justify-content-center' style={{width: '100%'}}>
            <div className='col'>
               {leftArray}
            </div>
            <div className='col'>
            {rightArray}
            </div>
        </div>
      </>
    )   
}

const MapCheckBox = (optionsForBoat:any) => { 
  console.log(optionsForBoat);
    const leftArray = Object.keys(optionsForBoat).map((key:any) => {
       return (
           <div key={optionsForBoat[key].id} className='radio-container' style={{marginBottom: '0.5rem'}}>
             <Checkbox>{optionsForBoat[key].name}</Checkbox>
             <InfoBtn title={optionsForBoat[key].name} description={optionsForBoat[key].description} image={optionsForBoat[key].image}/> 
           </div>
         )
    })
    const rightArray = leftArray.splice(0, leftArray.length /2);
    return {
      leftArray,
      rightArray
    }
}


export default CheckBoxGroup;
