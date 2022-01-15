import React from 'react';

const Recipe = ({imgSrc, calories, title, ingredients}) => {
    return(
        <div className='card'>
            <h1>{title}</h1>
            <p>{Math.round(calories)}<br/>Calories</p>
            <img className="image" src={imgSrc} alt="" />
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((item, count) => (
                    <li key={item.food + count}>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe