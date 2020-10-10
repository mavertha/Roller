import React, {useState} from "react";
import "./SearchButton.scss";
import Form from "../Form";

export default function SearchButton() {
    const [showForm, setShowForm] = useState(false);

    const handleShow = () => {
        setShowForm(true);
    }

    return (
        <>
            <button onClick={handleShow}>Search for previous results</button>
            {showForm && <Form />}
        </>
    )
}