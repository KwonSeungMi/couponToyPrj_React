
import React, { useState, useLayoutEffect  } from 'react';
import Pagination from './component/common/Pagination';
import { paginate } from './component/common/utils/paginate';


const CouponList = () => {
  const [changePage, setChangePage] = useState("");
  const [coupons, setCoupons] = useState({ 
    couponList: "", 
    pageSize: 5, 
    currentPage: ""
  });
  
  function getCouponList(){
     fetch("/getAll", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
    },
      body: JSON.stringify({
        pageSize: 5,
        currentPage: changePage
      })
    })
      .then(response => response.json())
      .then(response => {
        setCoupons(response);
      }) ;
  }  

  useLayoutEffect(() => {
    getCouponList(); 
    
  }, [coupons]);

  const handlePageChange = (page) => {
    console.log("handle");
    setChangePage(page);
    setCoupons({ ...coupons, currentPage: page   });
    
  };

  const { couponList, pageSize, currentPage } = coupons;
  const pagedCoupons = paginate(couponList, currentPage, pageSize, changePage); 
  const { length: count } = coupons.couponList;
  if (count === 0) 
    return <p>생성된 쿠폰이 없습니다.</p>;

  return (
    <>
    <div class="container">
      <table className="table table-hover">
        <thead className="table">
          <tr>
            <th>CouponID</th>
            <th>CouponNo</th>
            <th>EmailAddr</th>
          </tr>
        </thead>
        <tbody>
          {pagedCoupons.map((coupon) => (
            <tr key={coupon.coupon_id}>
                <td>{coupon.coupon_id}</td>
                <td>{coupon.coupon_no}</td>
                <td>{coupon.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
</div>

      <Pagination
        pageSize={pageSize}
        itemsCount={count}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        
      />
    </>
  );
};

export default CouponList;