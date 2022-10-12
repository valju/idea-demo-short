import React, {useState, useEffect} from "react";
import {Link, useParams } from "react-router-dom";
import dao from "../ajax/dao";

const CategoryDeleteConfirmationView = () => {
    const [message, setMessage] = useState("Do you want to delete this category?");
    const [category, setCategory] = useState({});
    const {categoryId} = useParams();

    useEffect(() => {
        async function getCategory () {
            const data = await dao.fetchOneCategoryById(categoryId);
            setCategory(data);
        }
        getCategory();
    },);

    const deleteCategory = () => {
        async function doDeleteCategory (categoryId) {
            const answer = await dao.deleteOneCategoryById(categoryId);
            console.log("answer: "+ answer);
            if(answer===true) {
                setMessage(`Category "${category.name}" deleted`);
                setCategory({});
            }

        }
        doDeleteCategory(categoryId);
    }
        

    return(
        <div>
            <h1>Deleting a Category</h1>
            <div>{message}</div>
            { category && category.id !== undefined ?
                <>
                    <button onClick={()=>{deleteCategory()}}>Yes, delete!</button>
                </>
                : ""                
            }
            
            { category && category.id !== undefined ?
            <dl>
                <dt>id: {category.id}</dt>
                <dd>name: {category.name}</dd>
                <dd>budget: {category.budgetLimit}</dd>
            </dl>
            : "No category yet / anymore"
            }
            <nav>
                <Link to="/category">Back to list</Link>
            </nav>            
        </div>

    );
}

export default CategoryDeleteConfirmationView;