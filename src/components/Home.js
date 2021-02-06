import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddDish from "./AddDish";
import Vote from "./Vote";
import Results from "./Results";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions";

function Home() {
    const dispatch = useDispatch();
    const [page, setPage] = useState("addDish");
    var addClass = "";
    var voteClass = "";
    var resultClass="";
    if(page==="addDish"){
        addClass="selected";
        var voteClass = "";
        var resultClass="";
    }else if(page==="vote"){
        var addClass = "";
        var voteClass = "selected";
        var resultClass="";
    }else{
        var addClass = "";
        var voteClass = "";
        var resultClass="selected";
    }

    return (
        <Router>
            <>           
                <div className="header">
                    <h1>
                        Dishes <i className="fas fa-utensils"></i>
                    </h1>
                    <h2 onClick={()=>dispatch(logoutUser())}>
                        LogOut
                    </h2>
                </div>
                <div className="nav-bar">
                    <Link to="/">
                        <h3 className={addClass} onClick={()=>setPage("addDish")}>
                        Add Dish  <i className="fas fa-plus-square"></i>
                        </h3>
                    </Link>
                    <Link to="/vote">
                        <h3 className={voteClass} onClick={()=>setPage("vote")}>
                        Vote  <i className="fas fa-vote-yea"></i>
                        </h3>
                    </Link>
                    <Link to="/results">
                        <h3 className={resultClass} onClick={()=>setPage("results")}>
                        Results  <i className="fas fa-poll-h"></i>
                        </h3>
                    </Link>
                </div>     
                <Switch>
                    <Route exact path="/">
                        <AddDish/>
                    </Route>
                    <Route path="/vote">
                        <Vote/>
                    </Route>
                    <Route path="/results">
                        <Results/>
                    </Route>
                </Switch>       
            </>
        </Router>
    )
}

export default Home;
