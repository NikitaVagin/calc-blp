import React from 'react'
import {Radio} from "antd";
import {InfoCircleOutlined} from '@ant-design/icons';
import {connect} from 'react-redux'
import {getAllfasteningCover} from '../../reducers/selectors'
import { FormProvider } from 'antd/lib/form/context';
import InfoBtn from '../Info-Btn/Info-Btn';
const RadioGroup = ({fasteningCover}:any) => {
    const {leftColumn, rightColumn} = MapRadio(fasteningCover);
    return (
        <Radio.Group className='d-flex flex-wrap justify-content-around' style={{width: '100%'}} onChange={(value) => console.log(value)}>
        <div className='col'>
            {leftColumn}
        </div> 
        <div className='col'>
            {rightColumn}
        </div>                   
        </Radio.Group>
    )
}

const MapRadio = (obj:any) => {
    const leftColumn = Object.keys(obj).map((key:any) => {
         return (
             <div className='radio-container d-flex justify-content-space-between' key={obj[key].id}>
                   <Radio value={obj[key].id}>{obj[key].name}</Radio>
                   <InfoBtn title={obj[key].name} description={obj[key].description} image={obj[key].image}/> 
            </div>
        )
     })
     const rightColumn = leftColumn.splice(0, leftColumn.length / 2);
     return {
        leftColumn,
        rightColumn
     }
}

export default RadioGroup;
