import React from 'react';
import {Modal} from 'antd';
const SunbrellaModal = (props:any) => {
    const {stateModal, onCloseModal, title, body} = props;
    console.log(props);
    const visible =  stateModal? true: false
    return (
        <Modal visible={visible} footer={null} onCancel={()=> onCloseModal()}>
            <div>
                {body}
            </div>
        </Modal>
    )
}  

export default SunbrellaModal;