import React,{useState} from 'react';
//filebase64 for storing images in 64bit format
import FileBase64 from "react-file-base64";
import { useDispatch ,useSelector } from "react-redux";
import { addDish } from "../redux/actions";

function AddDish() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.currentUser);
    const [value, setValue] = useState({
        id : Date.now(),
        name : "",
        image : "",
        description : "",
        votes : 0,
        createdBy : user.username
    });

    //dish form submit handler function. 
    const handleSubmit = ()=>{
        if(value.name==="" || value.description==="" || value.image==""){
            return;
        }else{
            dispatch(addDish(value));
            setValue({
                ...value,
                id:Date.now(),
                name:"",
                description:"",
                image:""
            });
        }
    };
    
    return (
        <>
            <div className="add-product-container">
                <div className="heading">
                 Add a new dish
                </div>
                <div className="input-box">
                    <span>
                        Dish name <span className="required">*</span>
                    </span>
                    <input value={value.name} onChange={(e)=>setValue({...value,name:e.target.value})} type="text"/>
                    <span>
                        Image <span className="required">*</span>
                    </span>
                    <div>
                    <FileBase64
                        className="file-input"
                        multiple={ false }
                        onDone ={({base64})=>setValue({...value,image:base64})}
                    />
                    </div>
                    
                    <span>
                         Description <span className="required">*</span>
                    </span>
                    <textarea value={value.description} onChange={(e)=>setValue({...value,description:e.target.value})}/>
                    <button onClick={handleSubmit}>
                        Add Dish
                    </button>
                </div>
            </div>   
        </>
    )
}

export default AddDish;
