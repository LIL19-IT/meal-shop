import React from "react";
import "./Filter.css";

export function Filter({ filterFunc }) {
    return (
        <form className="Filter">
            <span>Search by category name</span>
            <input type="search" onChange={filterFunc} placeholder="Search categories..." />
            <button type="button"><i className="fas fa-search"></i> Search</button>
        </form>
    );
}

