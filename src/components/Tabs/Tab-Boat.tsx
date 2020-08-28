import React, {useState, useEffect} from 'react';
import {Divider, InputNumber,  Radio, Checkbox, Typography} from "antd";
import {QuestionCircleOutlined, CopyOutlined, InfoCircleOutlined} from '@ant-design/icons';
import InputNumbers from '../Input-Number/Input-Number'
import SelectMaterial from '../Select-Material/Select-material'
import InfoBtn from '../Info-Btn/Info-Btn';
import Modals from '../Modal-Window/Modal-Conducter';
import {connect} from 'react-redux';
import MoySkladApi from '../../services/moysklad-api';

const getImage = async () => {
  const moysklad = new MoySkladApi();
  const image = await moysklad.getImage();
  return String(image)
}

const TabBoat = () => {
  const [data, setData]  = useState('');

  useEffect( () => {
    getImage().then((data:any) => setData(data))
  }, []);
    const img = data ? <img src={data}></img> : null
    return(
        <>
          <div className='container-in-tabs'>
          <div className='calculator-body d-flex align-items-start flex-column'>
              <SelectMaterial/>
              <InputNumbers title='Длина катера' placeholder='Введите длину катера в метрах'/>
              <InputNumbers title='Ширина катера' placeholder='Введите ширину катера в метрах'/>
              <Divider orientation='left'>Крепление тента</Divider>
              <Radio.Group  className='d-flex' style={{width: '100%'}} onChange={(value) => console.log(value)}>
                  <div className='radio-container'>
                  <Radio value={1}>На кнопках</Radio>
                  <InfoCircleOutlined style={{color: '#1890FF', fontSize: '1.2rem'}}/>
                  </div>
                  <div className='radio-container'>
                  <Radio value={2}>На J-hook</Radio>
                  <InfoCircleOutlined style={{color: '#1890FF', fontSize: '1.2rem'}}/>
                  </div>
                  <div className='radio-container'>
                  <Radio value={3}>Стяжки ретчет</Radio>
                  <InfoCircleOutlined style={{color: '#1890FF', fontSize: '1.2rem'}}/>
                  </div>                          
              </Radio.Group>
              <InputNumber min={1} style={{ width: '90%', marginRight: '1rem', marginTop: '1rem'}}placeholder='Введите количество ретчетов'/>
              <Divider orientation='left'>Дополнительные опции</Divider>
              <div className='row justify-content-center' style={{width: '100%'}}>
                <div className='col'>
                  <div className='radio-container' style={{marginBottom: '0.5rem'}}>
                    <Checkbox value='12500'>Индивидуальный крой</Checkbox>
                    <QuestionCircleOutlined style={{color: 'rgba(0, 0, 0, 0.25)', fontSize: '1.1rem'}}/>
                  </div>
                  <div className='radio-container'>
                    <Checkbox value='12500'>Светоотражающий кант</Checkbox>
                    <QuestionCircleOutlined style={{color: 'rgba(0, 0, 0, 0.25)', fontSize: '1.1rem'}}/>
                  </div>
                </div>
                <div className='col'>
                  <div className='radio-container ' style={{marginBottom: '0.5rem'}}>
                    <Checkbox value='12500'>Вентиляция палубы</Checkbox>
                    <QuestionCircleOutlined style={{color: 'rgba(0, 0, 0, 0.25)', fontSize: '1.1rem'}}/>
                  </div>
                  <div className='radio-container'>
                    <Checkbox value='12500'>Кормовой фартук</Checkbox>
                    <QuestionCircleOutlined style={{color: 'rgba(0, 0, 0, 0.25)', fontSize: '1.1rem'}}/>
                  </div>
                </div>
              </div>
              <div className='d-flex  flex-column align-items-center' style={{width:'100%', marginTop: '2rem'}}>
                {/* <InfoBtn title='Sunbrella Plus' nameModal={ModalName.SUNBRELLA_MODAL} body={Sunbrella()} type='info'/> */}
                <Modals />
              </div>
              <div>
                {img}
              </div>
          </div>
        </div>
        </>
    );
}

const Sunbrella = () =>{
  const {Title, Paragraph, Text}  = Typography;
  return (
    <div>
      <Title level={2}>Sunbrella Plus</Title>
      <Paragraph>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ipsam voluptatibus iste! Voluptas in, harum omnis officiis quo, nesciunt inventore at, praesentium dolore maiores sapiente rem iusto animi. Ad, sint.
      </Text>
      </Paragraph>
    </div>
  )
}
const mapStateToProps = (state:any) => {
  // console.log(state.data.allData.engines.byId)
    return{
      error: state.data.error,
      loading: state.data.loading, 
    }
}

export default connect(mapStateToProps, null)(TabBoat);