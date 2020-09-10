import React from 'react';
import {InfoCircleOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import {startShowModal} from '../../actions/actions'

type InfoBtnType = {
    nameModal: string,
    onShowModal: Function,
    body:any
    title: string,
    size?: string
}

const InfoBtn = ({image, onShowModal, size = '1.2rem', title, description, type}:any) =>{
    return  (
        <span style={{cursor: 'pointer'}} onClick={() => onShowModal({image, title, description})}><InfoCircleOutlined style={{fontSize: size}} type={type}/></span>
    );
   
}

const mapDispatchToProps = (dispatch:any) =>{
    return {
        onShowModal: (data:any) => dispatch(startShowModal(data))
    }
}
export default connect(null, mapDispatchToProps)(InfoBtn);