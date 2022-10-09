import React from "react";
import CategoryRow from "../components/CategoryRow";
import {Link} from "react-router-dom";

const CategoryListItem = ({category}) => {
    return (
        <Link to={`/category/${category.id}`}>
                <CategoryRow category={category} />
        </Link>
    );
}

export default CategoryListItem;