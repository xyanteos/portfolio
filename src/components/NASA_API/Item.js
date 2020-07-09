import React from 'react'

const Item = (({item})=>{

    return(
    <div className="wyniki ui segment">
        <h1>{item.data ? item.data[0].title :null}</h1>
        <img src={item.links ? item.links[0].href :null} alt={item.links ? item.links[0].rel : null}/>
        <p>{item.data ? item.data[0].description : null}</p>
    </div>
    )
})



export default Item
