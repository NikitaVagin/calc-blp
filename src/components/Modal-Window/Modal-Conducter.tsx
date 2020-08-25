import React from 'react';
import {Modal} from 'antd';
import { connect } from 'react-redux';
import {closeModalindow} from '../../actions/actions';
import SunbrellaModal from './Modals/Sunbrella-Modal';
import {ModalName} from '../../constants/constants';

type ModalWindowType = {
    stateModal: string | null,
    type: string
    onCloseModal: Function,
    title?: string
}

 const ModalWindow = (props:ModalWindowType) => {
     const {stateModal, onCloseModal, title} = props;
    const visible = stateModal? true: false
    let bodyModal;
    switch(stateModal){
        case(ModalName.SUNBRELLA_MODAL):
        return <SunbrellaModal {...props}/>
        default: return null
    }
}

const mapStateToProps = ({currentModal}:any) =>{
    return {
        stateModal: currentModal.nameModal,
        title: currentModal.title,
        body: currentModal.body,
        type: currentModal.type
    }
}
const mapDispatchToProps = (dispatch:any) =>{
    return {
        onCloseModal: () => dispatch(closeModalindow())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);