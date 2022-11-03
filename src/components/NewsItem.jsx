import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title,description,imageUrl,newsUrl,publishedAt,author} = this.props;
    return (
      <div className=' p-2 my-3'>
      <div className="">
      <img src={imageUrl} className=" sm:w-80 sm:h-40" alt=""/>
        <h5 className="font-bold text-lg sm:h-16">{title}...</h5>
        <p className="break-normal sm:h-20">{description}...</p>
        <p className='sm:h-24'>Published on <b>{new Date(publishedAt).toGMTString()}</b> <br /> Source: <b>{author}</b> </p>
        <a href={newsUrl}><button className='bg-black text-white mx-auto p-2 rounded-md hover:bg-slate-800 my-3'>Read More</button></a>
      
    </div>
    </div>
    )
  }
}

export default NewsItem