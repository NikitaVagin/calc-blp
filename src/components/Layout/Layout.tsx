import React from 'react';
import logo from './578598694_colored_toned.png'
const Layout = ({children}:any) =>{
    return(
        <div className='main d-flex justify-content-center align-items-center'>
        <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-6'>
                <div className='d-flex justify-content-center' style={{marginBottom: '1rem'}}><img src={logo} alt='logo'></img></div>
                <div className='card-container'>
                    {children}
                </div>
              </div>
            </div>
        </div>
    </div>
    );
};

export default Layout;