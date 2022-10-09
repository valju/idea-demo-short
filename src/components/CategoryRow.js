import React from "react";

const CategoryRow = ({category}) => {
    return (<div>{`${category.id} : ${category.name}`}</div>);
}

export default CategoryRow;