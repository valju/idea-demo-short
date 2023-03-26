import React, {useState, useEffect, useContext} from "react";
import CategoryListItem from "../components/CategoryListItem";
import dao from "../ajax/dao";
import { AppContext } from "../AppContext";

const CategoryListView = () => {
    const [categories, setCategories] = useState([]);
    const appContext = useContext(AppContext);

    useEffect(() => {
        // ...do something ONLY when component did mount
        // Notice: even if categories state change => not fired
        async function refreshCategories () {
            const data = await dao.fetchCategories();
            setCategories(data);
        }
        refreshCategories();       
    },[]);

    useEffect(() => {
        // ...do something when 1. component did mount
        // 2. categories state changes
    },[categories]);

    return (
        <>
        <h3>Categories</h3>
        <span>Current category: {appContext.currentCategoryId}</span>
        <div>
            {categories && categories.length>0 ? 
                categories.map((item)=>
                    <CategoryListItem    key={item.id} 
                                    category={item} />
            ) : "no categories yet"
        }
        </div>
        </>
    );
}

export default CategoryListView;