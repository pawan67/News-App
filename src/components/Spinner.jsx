import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div className='text-center my-4'>
        <img className='mx-auto my-auto' src={loading} alt="Loading" />
      </div>
    )
  }
}

export default spinner