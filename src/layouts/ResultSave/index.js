//Powinien składać się z:
//1. Formularz - Name + Date
//2. Btn Save - zapisuje wszystkie wyrzucone wyniki do LS
//3. Btn Clear - czyści całe LS

import React from "react";
import "./ResultSave.scss";
import Form from "../../components/ResultSave/Form";
import ClearResultsButton from "../../components/ResultSave/ClearResultsButton";
import SaveResultsButton from "../../components/ResultSave/SaveResultButton";

export default function ResultSave() {
    return (
        <>
            <h1>Saving result section</h1>
            <Form />
            <SaveResultsButton />
            <ClearResultsButton />
        </>
    )
}