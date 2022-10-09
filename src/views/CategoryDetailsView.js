import React from "react";
import {Link} from "react-router-dom";

const CategoryDetailsView = () => {

    return(
        <div>
            <h1>Hello from dummy CategoryDetailsView!</h1>

            <nav>
                <Link to="/categoryListURL">Back to list</Link>
            </nav>            
        </div>

    );
}

export default CategoryDetailsView;