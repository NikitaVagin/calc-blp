import React from 'react';
import {Modal} from 'antd';
import './Modal-Window.css'
const ModalWindow = (props:any) => {
    const {onCancel, title, footer, description, visible, image} = props;
    return (
        <Modal className={'modal-window'} visible={visible} footer={footer} onCancel={onCancel}>
            <div>
                <h1>{title}</h1>
                <div>
                    <img src={image} alt={title}></img>
                </div>
                <p>{description}</p>
            </div>
        </Modal>
    )
} 


export default ModalWindow;