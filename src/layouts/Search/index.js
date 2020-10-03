//Powinien składać się z:
//1. Btn - odsłaniający widok wyszukiwarki
//2. Formularz - name, date
//3. Btn Search

import React from "react";
import "./Search.scss";
import SearchButton from "../../components/Search/SearchButton";
import Form from "../../components/Search/Form";

export default function Search() {
    return (
        <>
            <h1>Search section</h1>
            <SearchButton />
            <Form />
        </>
    )
}