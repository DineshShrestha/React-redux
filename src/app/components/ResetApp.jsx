import React from 'react'
import { resetCounter } from '../../redux/slice/counterSlice';
import { resetDestination } from '../../redux/slice/destinationSlice';
import { useDispatch } from 'react-redux';
function ResetApp() {
  const dispatch = useDispatch();
  const resetCounterDestination = ()=> {
    dispatch(resetCounter());
    dispatch(resetDestination());
  }
  return (
    <div className='text-center'>
        <button className="btn btn-warning" onClick={resetCounterDestination}>
            Reset App
        </button>
    </div>
  )
}

export default ResetApp