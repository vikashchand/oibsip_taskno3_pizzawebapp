import React from 'react'

import StripeCheckout from 'react-stripe-checkout';
import {useDispatch,useSelector} from 'react-redux';
import { placeOrder } from '../../Actions/orderActions'

const Checkout = ({subTotal}) => {


  const dispatch =useDispatch()

    const tokenHandler =(token)=>{
      dispatch(placeOrder(token,subTotal))
        console.log(token);
    };

  return (
    <StripeCheckout
    amount={subTotal *100}
    shippingAddress
    token={tokenHandler}
    stripeKey='pk_test_51MqA2bSIOQnWYltDp4aE5Vuwq6n7jGqzi7iVbsxbXfuNzQxv5jxVGSchAxxdgYruB2clkm1fSDBD1LdL76cOsWd800YPZJibK7'
    currency='INR'
    >
    <button>Pay now</button>
    
    </StripeCheckout>
  )
}

export default Checkout