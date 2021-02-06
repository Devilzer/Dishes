import React from 'react';
import DishCard from "./DishCard";
import { useSelector } from "react-redux";

function Vote() {
    const dishes = useSelector(state => state.dish.dish)
    return (
        <>
            <div className="note">
                Note : You can only vote for three dishes.
            </div>
            <div className="dish-container">
                {dishes.length === 0 && <h1>
                    No Dishes to display!
                </h1>}
                {
                    dishes.map((dish,index)=>(
                        <DishCard
                            dish = {dish}
                            key = {index}
                            index = {index}
                        />
                    ))
                }
                
            </div>   
        </>
    )
}

export default Vote;
