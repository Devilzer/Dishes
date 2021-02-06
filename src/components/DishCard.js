import React from 'react';

function DishCard({dish,index}) {
    return (
        <div className="dish-card">
            <div className="img-container">
                <img src={dish.image}/>
            </div>
            <div className="name">
                {dish.name}
            </div>
            <div className="description">
                {dish.description} 
            </div>
            <div className="author">
                CreatedBy : {dish.createdBy}
            </div>
         </div>
    )
};

export default DishCard;
