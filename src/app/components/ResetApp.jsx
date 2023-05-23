import React from 'react'
import { resetDestination } from '../../redux/slice/destinationSlice';
import { useDispatch } from 'react-redux';
function ResetApp() {
  const dispatch = useDispatch();
  const resetCounterDestination = ()=> {
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