import React from "react";
import '../Stylesheets/Counter.css';

function Counter({ clickNumber }) {
    return (
        <div className="counter">
            {clickNumber}
        </div>
    )
}

export default Counter;