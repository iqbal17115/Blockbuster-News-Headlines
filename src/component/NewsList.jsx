import React from 'react';

function getDateString(DateTimeStr){
    return new Date(DateTimeStr).toDateString();
}

const NewsItem=({ item })=>(
  <div className="card mb-4">

    {item.urlToImage && (
            <img
              className="card-img-top"
              src={item.urlToImage}
              alt={item.title}
            />
    )}

    <div className="card-body">
      <a href={ item.url } target="_blank" style={{ color: '#424242' }}>
       <h5 className="card-title">
           { item.title }
       </h5>
      </a>

      <a href={ item.url } target="_blank" style={{ color: '#424242' }}>
       <h5 className="card-title">
           { item.content }
       </h5>
      </a>
      
      <div className="mt-2 d-flex align-items-center">
          <small>
              <strong>
                Published At {getDateString(item.publishedAt)}
              </strong>
          </small>

          <div
           style={{
               padding: '0.25rem 0.5 rem',
               background: '#ededed',
               color: '#424242',
               borderRadius: '0.25rem',
               display: 'inline-block'
           }}
           className="ml-auto"
          >
           <small>{ item.source.name }</small>
          </div>

      </div>

    </div>
  
  </div>
)

function NewsList({news}){
   return(
       <div>
           { news && news.length==0 && <h4> There is no news!! </h4> }
           { news && news.map( item=> <NewsItem key={ item.title } item={item} /> ) }
       </div>
   )
}

export default NewsList;