import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Button, Form, FormGroup, Label, Input, FormText, Alert,FormControl } from 'reactstrap';

function InsertCoupon(){
  const [email, setEmail] = useState("");

  function OnChange(e){  
      setEmail(e.target.value);
  };

  function OnClick(){
      InsertCoupon({email});
  };

  function OnKeyPress(e){
    if(e.key == 'Enter')
      OnClick();
  }

  function InsertCoupon()  {
      fetch("/insertCoupon", {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
          },
            body: JSON.stringify({
              email: email
            })
          })
            .then(response => response.json())
            .then(response => {
              if (response == 1) {
                alert("쿠폰이 생성되었습니다.");
                setEmail("");
              } else if(response == -1) {
                alert("중복된 이메일입니다.");
              } 
              // else if(response == -2) {
              //   alert("이메일 형식에 맞지 않습니다.");
              // }
              else {
                alert("쿠폰 생성에 실패하였습니다.");
              }}) ;
  };

        return  (
          <div>
            <h3 class="text-center" color="blue">Coupon Toy Project</h3>
            <Form>
              <FormGroup row>
                <Col sm={10}>
                  <Input type="email" name="email" id="exampleEmail" placeholder="이메일을 입력하세요." onChange={OnChange}  ></Input>
                </Col>
                <Col>
                  <Button sm={3}  type="button" color="primary" onClick={OnClick}>Click!</Button> 
                </Col>
              </FormGroup>
            </Form>
          </div>
        )
}

export default InsertCoupon;