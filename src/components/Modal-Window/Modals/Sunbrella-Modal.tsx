import React from 'react';
import {Modal} from 'antd';
const SunbrellaModal = (props:any) => {
    const {onCancel, title, footer, description, visible, image} = props;
    return (
        <Modal visible={visible} footer={footer} onCancel={onCancel}>
            <div>
                <h1>{title}</h1>
                <div>
                    <img src={image} alt={title}></img>
                </div>
                {description}
            </div>
        </Modal>
    )
}  


export default SunbrellaModal;