import React, {useEffect, useState} from 'react';
async function GetList(){
    const [coupons, setCoupons] = useState({ 
        couponList: "", 
        pageSize: 5, 
        currentPage: 1 
      });
    await fetch("/getAll", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
    },
      body: JSON.stringify({
        pageSize: 5,
        currentPage: 1
      })
    })
      .then(response => response.json())
      .then(response => {
        setCoupons(response);
      }) ;

    return coupons;
  }  
export default GetList;