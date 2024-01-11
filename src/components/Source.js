import React,{useEffect,useState} from 'react'
import Recipe from './Recipie';
export default function Source(){
    const APP_ID="b100c825";
    const APP_KEY="3a1917b341ca35e51e8a419a05adb26c";	

const[recipes,setRecipes]=useState([]);
const[search,setSearch]=useState("");
const[query,setQuery]=useState("chicken");

useEffect( ()=>{
   getRecipes();
},[query]);


const getRecipes = async () =>{
   const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const data =await response.json();
   setRecipes(data.hits);
   console.log(data.hits);
};

const updateSearch= e =>{
   setSearch(e.target.value);
   
};

const getSearch= e =>{
   e.preventDefault();
   setQuery(search);
   setSearch("");
}

    return(
       <div>
          <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
            <button className="search-button" type="submit">Search</button>
          </form>
          <div className='recipies'>
          {recipes.map(item =>(
            <Recipe 
            key={item.recipe.label}
            title={item.recipe.label}
            // calories={item.recipe.calories}
            image={item.recipe.image}
            mealType={item.recipe.mealType}
            ingredients={item.recipe.ingredients}
             />
          ))}
          </div>
       </div>
    );
};
