import React, {useState, useEffect, useContext} from "react";
import {Link, useParams } from "react-router-dom";
import dao from "../ajax/dao";
import { AppContext } from "../AppContext";

const CategoryDetailsView = () => {
    const [category, setCategory] = useState({});
    const {categoryId} = useParams();
    const appContext = useContext(AppContext);

    useEffect(() => {
        async function getCategory () {
            const data = await dao.fetchOneCategoryById(categoryId);
            setCategory(data);
        }
        getCategory();
    },[categoryId]);

    const selectAsCurrentCategory = (categoryId) => {
        appContext.currentCategoryId = categoryId;
    }

    return(
        <div>
            <h1>Details of a Category</h1>

            { category && category.id !== undefined ?
                <div>
                    <dl>
                        <dt>id: {category.id}</dt>
                        <dd>name: {category.name}</dd>
                        <dd>budget: {category.budgetLimit}</dd>
                    </dl>
                    <button onClick={()=>{selectAsCurrentCategory(category.id)}}>Select as current category</button>
                </div>
                : 
                "Still downloading the category"
            }
            <nav>
                <Link to="/category">Back to list</Link>
            </nav>            
        </div>

    );
}

export default CategoryDetailsView;