import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Select, Divider} from 'antd';
import { startRequestMaterial, selectMaterial} from '../../actions/actions'
import {InfoCircleOutlined} from '@ant-design/icons';
import ModalWindow from '../Modal-Window/Modal-Conducter';
import InfoBtn from '../Info-Btn/Info-Btn';
import {getAllMaterials, getMaterialById} from '../../reducers/selectors';

const {Option} = Select;


const SelectMaterial = (props:any) => {
    
    const InfoModalMaterial = props.idMaterial ? <InfoBtn title={props.idMaterial.name} description={props.idMaterial.description} image={props.idMaterial.image}/> : null
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
        return <Option value={materials[key].id} key={key}>{materials[key].name}</Option>
    })

    return (
        <Select style={{ width: '90%', marginRight: '1rem' }} placeholder='Выберите ткань' onChange={(value:any) => selectMaterial(value)}>
            {selectChildren}
        </Select>
    )
}


const mapStateToProps = (state:any) =>{
    const allMatetialsById  = getAllMaterials(state);
       return {
            materials: allMatetialsById,
            error: state.data.error,
            loading: state.data.loading,
            idMaterial: getMaterialById(allMatetialsById, state.currentValuesBoat.idMaterial)
       }
}

const mapDispatchToProps = (dispatch:Function) =>{ 
        return {
            selectMaterial: (id:any) => dispatch(selectMaterial(id))
        }

}

export default connect(mapStateToProps, mapDispatchToProps)(SelectMaterial);

