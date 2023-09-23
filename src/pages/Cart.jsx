import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState();
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])
  return (
    <div>
      {
        cart.length > 0 ?
          (<div className='flex w-11/12 justify-center max-w-[1080px] mx-auto'>
            <div className='mt-10 ml-5 w-[50%]'>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} />
                })
              }
            </div>

            <div className='flex flex-col justify-between max-h-[80vh]'>
              <div>
                <div className='text-gray-500 font-semibold text-lg'>Your Cart</div>
                <div className='text-green-600 font-semibold text-5xl'>Summary</div>
                <p><span>Total items:</span>{cart.length}</p>
              </div>
              <div>
                <p>Total Amount: <span className='font-bold'>${totalAmount}</span></p>
                <button className='bg-green-600 px-5 py-3 rounded-xl hover:bg-green-700 text-white w-full'>Checkout Now</button>
              </div>
            </div>

          </div>) :
          (<div className='w-[100vw] h-[100vh] flex justify-center items-center flex-col'>
            <h1 className='text-gray-700 font-semibold text-xl'>Cart is Empty</h1>
            <Link to={"/"}><button className='bg-green-600 px-5 py-3 rounded-xl text-white mt-2 hover:bg-green-700 transition-all duration-200 font-semibold'>Shop Now</button></Link>
          </div>)
      }
    </div>
  )
}

export default Cart