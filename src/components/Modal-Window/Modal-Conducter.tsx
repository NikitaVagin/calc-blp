import React from 'react';
import {Modal} from 'antd';
import { connect } from 'react-redux';
import {closeModalindow} from '../../actions/actions';
import ModalWindow from './Modals/Modal-Window'

 const ModalConducrer = (props:any) => {
    const {modalConfiguration} = props;
    const defaultProps = {
        visible: true,
        footer: null,
        onCancel: () => props.onCloseModal()
    }

    let renderComponent;

    if(modalConfiguration) {
        const {modalProps = {}} = modalConfiguration;
        renderComponent =  <ModalWindow {...Object.assign({}, defaultProps, modalProps)}/> 
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
export default connect(mapStateToProps, mapDispatchToProps)(ModalConducrer);
