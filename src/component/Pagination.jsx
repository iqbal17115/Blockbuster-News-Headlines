import React, { Component } from 'react';

class Pagination extends Component{
   
   state={
       isEditable : false
   }

   render(){
    const {
        currentPage,
        totalPage,
        next,
        prev,
        isPrev,
        isNext, 
        gotoPage,
        handlePageChange,
      } = this.props
       return(
           <div className="d-flex my-5 align-items-center">
               <button className="btn btn-warning" disabled={!isPrev} 
                onClick={
                    ()=>{
                        prev();
                    }
                }
               >Prev</button>
               <div className="flex-grow-1 text-center">
                  {
                      this.state.isEditable ? (
                       <input type="number" 
                       value={currentPage}
                       onChange={(e)=>handlePageChange(e.target.value) }
                       onKeyPress={e=>{
                        if(e.key=='Enter'){
                            gotoPage();
                           this.setState({
                               isEditable: false
                           });
                        }
                    }}
                        />
                      )
                      :
                      ( 
                        <p
                         style={{ userSelect: 'none', lineHeight: '1.1' }}
                         title="Double Tap to Jump Page!!"
                         onDoubleClick={
                             ()=>{
                                 this.setState({
                                     isEditable: !this.state.isEditable,
                                 });
                             }
                         }
                       
                        >
                         {currentPage} off {totalPage}
                         <br/>
                         <small>Double Tap to Edit</small>
                        </p>
                      )
                  }
               </div>
               <button className="btn btn-warning" disabled={!isNext} 
                onClick={
                    ()=>{
                        next();
                    }
                }>Next</button>
           </div>
       )
   }

}
export default Pagination;