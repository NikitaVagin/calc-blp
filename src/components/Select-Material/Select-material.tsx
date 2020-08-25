import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Select, Divider} from 'antd';
import { startRequestMaterial, selectMaterial} from '../../actions/actions'
import {InfoCircleOutlined} from '@ant-design/icons';
import ModalWindow from '../Modal-Window/Modal-Conducter';
import InfoBtn from '../Info-Btn/Info-Btn';
import {getAllMaterials} from '../../reducers/selectors';

const {Option} = Select;


const SelectMaterial = (props:any) => {
    useEffect(() =>{
        props.fetchMaterial()
    },[]);

    if(props.loading){
        return (
            <div>Loading...</div>
        )
    }

    const InfoModalMaterial = props.idMaterial ? <InfoCircleOutlined /> : null
    return (
        <>
        <Divider orientation='left'>Выбор ткани</Divider>
        <div style={{width: '100%'}} className='d-flex align-items-center'>
            <MapSelectMaterials materials={props.materials} selectMaterial={props.selectMaterial}/>
            {InfoModalMaterial}
        </div>
        </>
    )
}

const MapSelectMaterials = ({materials, selectMaterial}:any) =>{
    const selectChildren =  Object.keys(materials).map((key:any) => {
        return <Option value={materials[key].price} key={key}>{materials[key].name}</Option>
    })

    return (
        <Select style={{ width: '90%', marginRight: '1rem' }} placeholder='Выберите ткань' onChange={(value:any) => selectMaterial(value)}>
            {selectChildren}
        </Select>
    )
}


const mapStateToProps = (state:any) =>{
    // const {currentValuesBoat: {idMaterial}} = state;
    console.log(state.data.allData.engines.byId)
       return {
            materials: state.data.allData.byId,
            error: state.data.error,
            loading: state.data.loading,
            idMaterial: state.currentValuesBoat.idMaterial
       }
}

const mapDispatchToProps = (dispatch:Function) =>{ 
        return {
            fetchMaterial: () => dispatch(startRequestMaterial()),
            selectMaterial: (id:any) => dispatch(selectMaterial(id))
        }

}

export default connect(mapStateToProps, mapDispatchToProps)(SelectMaterial);

