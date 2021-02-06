import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddDish from "./AddDish";
import Vote from "./Vote";
import Results from "./Results";


function Home() {
    return (
        <Router>
            <>           
                <div className="header">
                    <h1>
                        Dishes <i className="fas fa-utensils"></i>
                    </h1>
                </div>
                <div className="nav-bar">
                    <Link to="/">
                        <h3  >
                        Add Dish  <i className="fas fa-plus-square"></i>
                        </h3>
                    </Link>
                    <Link to="/vote">
                        <h3 className="selected">
                        Vote  <i className="fas fa-vote-yea"></i>
                        </h3>
                    </Link>
                    <Link to="/results">
                        <h3 >
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
