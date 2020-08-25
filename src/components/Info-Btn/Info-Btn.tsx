import React from 'react';
import {InfoCircleOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import {showModalindow} from '../../actions/actions'

type InfoBtnType = {
    nameModal: string,
    onShowModal: Function,
    body:any
    title: string,
    size?: string,
    type: string
}

const InfoBtn = ({nameModal, onShowModal, size = '1.2rem', title, body, type}:InfoBtnType) =>{
    return  (
        <span style={{cursor: 'pointer'}} onClick={() => onShowModal({nameModal, title, body})}><InfoCircleOutlined style={{fontSize: size}} type={type}/></span>
    );
   
}

const mapDispatchToProps = (dispatch:any) =>{
    return {
        onShowModal: (id:any) => dispatch(showModalindow(id))
    }
}

export default connect(null, mapDispatchToProps)(InfoBtn);