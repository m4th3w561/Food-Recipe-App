import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';


const App = () => {

  const APP_ID = 'f4ab8550';
  const APP_KEY = "407f91acfa9d2210d21f8d4299bcb5e4";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('');

  useEffect( async ()=> {
    getRecipes();
    console.log("we are fetching data")
  }, [query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.group(data.hits)
}
const updateSearch = event => {
  setSearch(event.target.value);
};

const getSearch = event => {
  event.preventDefault();
  setQuery(search);
  setSearch('')
}


  return (
    <div className="App">
      <form onSubmit={getSearch}className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="main-content">
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label}imgSrc={recipe.recipe.image} calories={recipe.recipe.calories} title={recipe.recipe.label} ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
    </div>
  );
}

export default App
