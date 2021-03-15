import React from 'react'
import Item from './Item'

const ItemsList = (({items})=>{
    const renderedList = items.map((item) =>{
            return <Item item={item}/>
    })
    return(
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
})

export default ItemsList