import React from 'react';
import {Divider, InputNumber,} from "antd"
import {InfoCircleOutlined} from '@ant-design/icons';

type InputNumberType ={
    title: string,
    placeholder: string,
    max?: number | undefined
}

const InputNumbers = ({title, placeholder, max = undefined}:InputNumberType) =>{
    return (
        <>
        <Divider orientation='left'>{title}</Divider>
        <div style={{width: '100%'}} className='d-flex align-items-center'>
            <InputNumber min={1}  max={max} style={{ width: '90%', marginRight: '1rem' }}placeholder={placeholder}/>
            <InfoCircleOutlined style={{color: '#1890FF', fontSize: '1.2rem'}}/>
        </div>
        </>
    )
}

export default InputNumbers;