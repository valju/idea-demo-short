import React, {useState, useEffect} from "react";
import CategoryRow from "../components/CategoryRow";
import dao from "../ajax/dao";

const CategoryListView = () => {
    const [categories, setCategories] = useState([]);

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
        <div>
            {categories && categories.length>0 ? 
                categories.map((item)=>
                    <CategoryRow    key={item.id} 
                                    id={item.id} 
                                    category={item} />
            ) : "no categories yet"
        }
        </div>
        </>
    );
    
    
    
    
    
    
    
    
    
    
    
    
    
   



    return (
        <div>
        <h3>Categories</h3>
        <div>
            {categories? categories.map((item, index)=>
                <CategoryRow key={index} index={index} category={item} />
            ) : "no categories"
        }
        </div>
        </div>
    );
}

export default CategoryListView;