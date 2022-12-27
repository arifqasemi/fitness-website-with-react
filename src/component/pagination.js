import React from 'react'
import './home.css'
const Pagination = ({totalpost, postPerPage,setCurrentPage, currentPage}) => {
    const pages = []
    for(let i=1; i<=Math.ceil(totalpost/postPerPage); i++){
    pages.push(i)
    }
  return (
    <div className='pagination'>
      {pages.map((page,index) =>{
        return(
            <div className="page">
            <button key={index}  onClick={() =>setCurrentPage(page)} className={page == currentPage ? 'active' : ''}>{page}</button>
            </div>
           
        )
      })}
    </div>
  )
}

export default Pagination
