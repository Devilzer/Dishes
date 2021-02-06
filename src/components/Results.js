import React from 'react';
import { useSelector } from "react-redux";
import TableRow from "./TableRow";


function Results() {
    const dishes = useSelector(state => state.dish.dish);
    var sorted = [...dishes];
    //function for sorting
    function compare(a, b) {
        const votesA = a.votes;
        const votesB = b.votes;
        let comparison = 0;
        if (votesA > votesB) {
          comparison = -1;
        } else if (votesA < votesB) {
          comparison = 1;
        }
        return comparison;
    };

    sorted.sort(compare);
    console.log(sorted);
    
    return (
        <>
            <table className="results">
            <thead>
                <tr>
                    <th>Ranking</th>
                    <th>Dish Name</th>
                    <th>Votes</th>
                    <th>CreatedBy</th>
                </tr>
            </thead>

            {sorted.map((dish,index)=>(
                <TableRow
                    key={index}
                    dish={dish}
                    index={index}
                />
            ))}
            {/* <TableRow/> */}
            </table>
        </>
    )
}

export default Results;
