import React from 'react'
import toast from 'react-hot-toast';
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice';
const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Remove from cart succesfully")
  }

  return (


    <div className='flex border-b-2 border-gray-700 items-center w-[70%] gap-4 p-5'>
      <div className='w-[180px]'>
        <img src={item.image} className='w-full h-full' />
      </div>
      <div className='flex flex-col justify-between gap-3'>
        <h1 className='font-semibold text-gray-700 text-lg'>{item.title}</h1>
        <p className='text-gray-500 text-xs'>{item.description.split(" ").splice(0, 30).join(" ") + "..."}</p>
        <div className='flex justify-between'>
          <p className='text-green-600 font-semibold'>${item.price}</p>
          <div onClick={removeFromCart} className='bg-red-700 rounded-full h-5 w-5 flex justify-center items-center'>

            <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>

  )
}

export default CartItem