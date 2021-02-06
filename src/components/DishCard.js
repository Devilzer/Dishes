import React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateUser, updateVote } from "../redux/actions";
import { showNotification } from "../config/noty";


function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
};

function DishCard({dish}) {
    const forceUpdate = useForceUpdate();
    
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.currentUser);

    var cardClass ="";
    if(user.likedDishes.includes(dish.id)){
        cardClass = "dish-card dish-selected";
       
    }else{
        cardClass = "dish-card ";
    }

    const handleCardClick = ()=>{
        if(user.likedDishes.includes(dish.id)){
            let updatedUser = user;
            let index = updatedUser.likedDishes.findIndex(id=>id===dish.id);
            updatedUser.likedDishes.splice(index,1);
            dispatch(updateUser(updatedUser));
            
            let updatedDish = dish;
            if(dish.votes>0){
                updatedDish.votes--;
            }
            dispatch(updateVote(updatedDish));
            showNotification("Vote Removed");
        }
        else{
            if(user.likedDishes.length===3){
                showNotification("can't vote more than 3 times");
                return;
            }
            if(user.username === dish.createdBy){
                showNotification("can't vote own dishes");
                return;
            }
            let updatedUser = user;
            updatedUser.likedDishes = [...user.likedDishes,dish.id];
            dispatch(updateUser(updatedUser));

            let updatedDish = dish;
            updatedDish.votes++;
            dispatch(updateVote(updatedDish));
            showNotification("Vote added");
        }
        forceUpdate();
    }
    // dish-selected
    return (
        <div className={cardClass}>
            <div className="img-container" onClick={handleCardClick}>
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
