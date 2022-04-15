import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Cartscreen() {
   
    AOS.init({
        duration:1000
    })
    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x,item)=> x+item.price,0) 
    const dispatch = useDispatch()
    return (
        <div>
            <div className='row justify-content-center p-2' data-aos='fade-down'>

                <div className='col-md-6'>
                    <h2 style={{ fontSize: '40px' }}>My Cart</h2>
                    {cartItems.map(item => {
                        return <div className="flex-container">
                            <div  style={{textAlign: "left",margin:"1%",width:"100%"}}>
                                <h1>{item.name}[{item.varient}]</h1>
                                <h1> Price : {item.quatity}*{item.prices[0][item.varient]} = {item.price}</h1>
                                <h1  style={{display: "inline"}}>Quantity: </h1>
                                <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quatity+1,item.varient))}}></i>
                                <b>{item.quatity}</b>
                                <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quatity-1,item.varient))}}></i>
                                <hr />

                            </div>
                            <div  style={{margin:"1%",width:"100%"}}>
                                <img src={item.image} style={{height:'80px',height:'80px'}} />
                            </div>
                            <div style={{margin:"1%",width:"100%"}}>
                            <i className="fa fa-trash mt-4" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                            </div>
                        </div>
                    })}

                </div>
                <div className="col-md-4 ">
                    <h2 style={{textAlign: "right",fontSize:'45px'}}>Subtotal : {subtotal} /-</h2>
                    <Checkout subtotal={subtotal}/>
                </div>
            </div>
        </div>
    )
}
