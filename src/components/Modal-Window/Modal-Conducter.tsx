import React from 'react';
import {Modal} from 'antd';
import { connect } from 'react-redux';
import {closeModalindow} from '../../actions/actions';
import SunbrellaModal from './Modals/Sunbrella-Modal';

 const ModalWindow = (props:any) => {
    const {modalConfiguration} = props;
    const defaultProps = {
        visible: true,
        footer: null,
        onCancel: () => props.onCloseModal()
    }

    let renderComponent;

    if(modalConfiguration) {
        const {modalProps = {}} = modalConfiguration;
        renderComponent =  <SunbrellaModal {...Object.assign({}, defaultProps, modalProps)}/> 
    }
        return <>{renderComponent}</>
}

const mapStateToProps = (state:any) =>{
    return {
        modalConfiguration: state.modals
    }
}
const mapDispatchToProps = (dispatch:any) =>{
    return {
        onCloseModal: () => dispatch(closeModalindow())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
