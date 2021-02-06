import React from 'react';
import { useDispatch, useSelector } from "react-redux";

function DishCard({dish,index}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.currentUser);
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
