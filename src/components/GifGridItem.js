import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    return (
        <div className="card animate__animated   animate__fadeInRight animate__lightSpeedInRight">
           <img src ={url}alt={title} key ={id}></img> 
           <p>{title}</p>
        </div>
    )
}
