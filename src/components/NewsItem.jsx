import React from 'react'

function NewsItem(props){
  
    return (
      <div className=' p-2 my-3 outline sm:outline-1'>
      <div className="">
      <img src={props.imageUrl} className=" sm:w-80 sm:h-40" alt=""/>
        <h5 className="font-bold text-lg sm:h-16">{props.title}...</h5>
        <p className="break-normal sm:h-20">{props.description}...</p>
        <p className='sm:h-24'>Published on <b>{new Date(props.publishedAt).toGMTString()}</b> <br /> Source: <b>{props.author}</b> </p>
        <a href={props.newsUrl}><button className='bg-black text-white mx-auto p-2 rounded-md hover:bg-slate-800 my-3'>Read More</button></a>
      
    </div>
    </div>
    )
  
}

export default NewsItem