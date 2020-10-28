import React, { useState }from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp= ()=>{

//const categories = ['One Punch','Samurai X','Full Metal'];
const [categories, setCategories] = useState(["One Punch"]);

/*const handlleAdd = ()=>{
    setCategories([...categories,'Samura X']);
    
}*/


    return (<div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/> 
        <hr></hr>
    
          {
              categories.map(category => (
                  <GifGrid 
                  key ={category}
                  category ={category}/>
              ))
          } 
           
    </div>)
}

export default GifExpertApp;