import React, { Component } from 'react';
import {newsCategory} from '../news';

class Header extends Component{
  state={
      searchTerm: ''
  }

  handleSearch= event =>{
    this.setState({
        searchTerm: event.target.value
    });
  }

  handlePress= event =>{
    this.setState({
        searchTerm: event.target.value
    });
  }

  render(){
      const { category, changeCategory } = this.props;
  return (
    <div className="my-4">

      <h1 className="mb-4" style={{ fontWeight: '300' }}>
          Block Buster Headlines!!
      </h1>

      <input
       type="search"
       className="form-control"
       placeholder="Type anything & Press enter to search" 
       value={ this.state.searchTerm }
       onChange={ this.handleSearch }
       onKeyPress={ this.handlePress }
      />

      <div className="my-4">
       {
        newsCategory && Object.keys(newsCategory).map(item=>{
          if( category==newsCategory[item] ){
            return(
                <button onClick={ ()=> this.props.changeCategory(newsCategory[item]) } className="btn btn-sm btn-warning mr-2 mb-2">
                  { `#${newsCategory[item]}` }
                </button>
            );
          }
          return <button onClick={ ()=> this.props.changeCategory(newsCategory[item]) } className="btn btn-sm btn-light mr-2 mb-2">{ `#${newsCategory[item]}` }</button>
       }) 
       }
      </div>

    </div>
  );
  }
}

export default Header;
