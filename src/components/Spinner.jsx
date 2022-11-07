import React from 'react'
import loading from './loading.gif'
function spinner() {
 
    return (
      <div className='text-center my-4'>
        <img className='mx-auto my-auto' src={loading} alt="Loading" />
      </div>
    )
  
}

export default spinner