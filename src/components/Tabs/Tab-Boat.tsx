import React, {useState, useEffect} from 'react';
import {Divider, InputNumber,  Radio, Checkbox, Typography} from "antd";
import { startRequestMaterial, selectMaterial} from '../../actions/actions'
import {QuestionCircleOutlined, CopyOutlined, InfoCircleOutlined} from '@ant-design/icons';
import CheckBoxGroup from '../Checkbox-Group/Checkbox-Group'
import InputNumbers from '../Input-Number/Input-Number'
import SelectMaterial from '../Select-Material/Select-material'
import InfoBtn from '../Info-Btn/Info-Btn';
import Modals from '../Modal-Window/Modal-Conducter';
import {connect} from 'react-redux';
import {getAllfasteningCover, getAllOptionsForBoat} from '../../reducers/selectors'
import RadioGroup from '../Radio-Group/Radio-Group'
const TabBoat = (props:any) => {
  useEffect(() =>{
    props.fetchMaterial()
},[]);
  if(props.loading) {
    return <div>
        <p>Loading...</p>
    </div>
  }
    return(
        <>
          <div className='container-in-tabs'>
          <div className='calculator-body d-flex align-items-start flex-column'>
              <SelectMaterial/>
              <InputNumbers title='Длина катера' placeholder='Введите длину катера в метрах'/>
              <InputNumbers title='Ширина катера' placeholder='Введите ширину катера в метрах'/>
              <Divider orientation='left'>Крепление тента</Divider>
              <RadioGroup fasteningCover={props.fasteningCover}/>
              <InputNumber min={1} style={{ width: '90%', marginRight: '1rem', marginTop: '1rem'}}placeholder='Введите количество ретчетов'/>
              <CheckBoxGroup optionsForBoat={props.optionsForBoat}/>
              <div className='d-flex  flex-column align-items-center' style={{width:'100%', marginTop: '2rem'}}>
                <Modals />
              </div>
              <div>
              </div>
          </div>
        </div>
        </>
    );
}

const mapStateToProps = (state:any) => {
    return { 
      fasteningCover: getAllfasteningCover(state),
      optionsForBoat: getAllOptionsForBoat(state),
      error: state.data.error,
      loading: state.data.loading, 
    }
}

const mapDispatchToProps = (dispatch:Function) => {
   return {
        fetchMaterial: () => dispatch(startRequestMaterial()),
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(TabBoat);