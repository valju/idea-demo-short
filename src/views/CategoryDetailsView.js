import React from "react";
import {Link, useParams } from "react-router-dom";


const CategoryDetailsView = () => {
    let params = useParams();
    const categoryId = params.categoryId;


    return(
        <div>
            <h1>Hello from dummy CategoryDetailsView!</h1>
            <p>{categoryId}</p>
            <nav>
                <Link to="/category">Back to list</Link>
            </nav>            
        </div>

    );
}

export default CategoryDetailsView;