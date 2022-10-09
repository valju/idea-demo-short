import React from "react";

const CategoryRow = ({index, category}) => {
    return (<div>{category.id + ":" +category.name}</div>);
}

export default CategoryRow;