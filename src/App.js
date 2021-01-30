import React, { useState, useEffect } from 'react';
import CouponList from './CouponList';
import './index.css';
import Pagenation from './component/common/Pagination';
import InsertCoupon from './component/InsertCoupon';

function App(){
    return(
        <div className="App">
            <header className="App-header">
              <div className="container" >
                <InsertCoupon/>
                <CouponList />
              </div>
            </header>
        </div>
    )
  }

export default App;