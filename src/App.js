import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import NewsList from './component/NewsList';
import Pagination from './component/Pagination';
import Loading from './component/Loading';
import News, {newsCategory} from './news';
import axios from 'axios';

const news=new News(newsCategory.technology);
class App extends Component{
  state={
    data : {},
    isLoading: true,
  }
  
 

  componentDidMount(){
     
    news.getNews()
      .then((data)=>{
        this.setState({
          data,
          isLoading: false
        });
      });
    
  }
  
  next=()=>{
    if(this.state.data.isNext){
      this.setState({
        isLoading : true
      })
    }
    news.next()
    .then(data=>{
      this.setState({
        data,
      isLoading : false
      })
    })
  }

  prev=()=>{
    if(this.state.data.isPrev){
      this.setState({
        isLoading : true
      })
    }
    news.prev()
    .then(data=>{
      this.setState({
        data,
        isLoading : false
      })
    })
  }

  handlePageChange=value=>{
    this.setState({
      data:{
        ...this.state.data,
        currentPage: Number.parseInt(value)
      }
    });
  }
   
  gotoPage=()=>{
    this.setState({
      isLoading : true
    });
    news.setCurrentPage(this.state.data.currentPage)
    .then(data=>{
      this.setState({
        data,
        isLoading: false
      })
    })
  }

  changeCategory=category=>{
     this.setState({
       isLoading : true
     });
     news.changeCategory(category)
     .then(data=>{
      this.setState({
        data,
        isLoading: false,
      });
     });
  }

  render(){
    const {
      article,
      isPrev,
      isNext,
      category,
      totalResults,
      currentPage,
      totalPage
    } = this.state.data
  return (
   <div className="container">
     <div className="row">
       <div className="col-md-3"></div>
      <div className="col-md-6">

        <Header 
         category={ category }
         changeCategory={ this.changeCategory }
        />
        <div className="d-flex">
          <p className="text-black-50">
            About {totalResults} results found!
          </p>
          <p className="text-black-50 ml-auto">
            {currentPage} page of {totalPage}
          </p>
        </div>
        {
          this.state.isLoading ? (
            <Loading/>
          )
          :
          (
            <div>
            <NewsList news={ article } />
            <Pagination
             next={ this.next }
             prev= { this.prev }
             isPrev={isPrev}
             isNext={isNext}
             totalPage={totalPage}
             currentPage={currentPage}
             handlePageChange={this.handlePageChange}
             gotoPage={this.gotoPage}
            />
            </div>
          )
        }
       
     </div>
     <div className="col-md-3"></div>
     </div>
   </div>
    
    
  );
  }
}

export default App;
