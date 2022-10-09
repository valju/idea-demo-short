import React, {useState, useEffect} from "react";
import {Link, useParams } from "react-router-dom";
import dao from "../ajax/dao";


const CategoryDetailsView = () => {
    const [category, setCategory] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        // ...do something ONLY when component did mount
        // Notice: even if categories state change => not fired
        async function getCategory () {
            const data = await dao.fetchOneCategoryById(categoryId);
            setCategory(data);
        }
        getCategory();
    },[]);


    return(
        <div>
            <h1>Details of a Category</h1>
            <dl>
                <dt>
                    id: {category.id}
                </dt>
                <dd>
                    name: {category.name}
                </dd>
                <dd>
                    budget: {category.budgetLimit}
                </dd>
            </dl>
            <nav>
                <Link to="/category">Back to list</Link>
            </nav>            
        </div>

    );
}

export default CategoryDetailsView;