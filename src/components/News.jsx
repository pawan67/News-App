import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export  class News extends Component {
  static defaultProps ={
    country : 'in',
    category:'general',
    

  }
  static propTypes ={
    country:PropTypes.string,
    category:PropTypes.string,
    apiKey:PropTypes.string
  }

constructor(props){
  super(props);
  this.state = {
    articles:[],
    loading:false,
    page:1,
    totalResults:0
  
  }
  document.title = `Newsy - ${this.props.category}`;
}
  async updateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=7`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json()
    
    this.setState({
      loading:false,
      articles: parseData.articles,
      totalResults: parseData.totalResults, 
    })
    this.props.setProgress(100);
  }
   componentDidMount(){
    
    this.updateNews();
  
  }
 async concatNews(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=7`;
  
  let data = await fetch(url);
  let parseData = await data.json()
  
  this.setState({
    
    articles: this.state.articles.concat(parseData.articles),
    
})
 }
  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1}, ()=>{
      this.concatNews();
    })

    
    
}
  render() {
    return (
      <div className='mx-2 mt-20 '>
        <h2 className='text-center font-bold bg-gray-300 min-w-full p-2 text-xl'>Newsy - Top {this.props.category} headlines </h2>
       {this.state.loading && <Spinner/>}
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {this.state.articles.map((element)=>{
            return <div className="" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0, 45):''} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage?element.urlToImage:"https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png"} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author?element.author:"Unknown"}/>
            </div>
          })}
           
        </div>
        </InfiniteScroll>
        
      </div>
     

    )
  }
}
export default News
