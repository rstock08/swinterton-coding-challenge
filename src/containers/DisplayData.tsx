import React from "react";
import FolderBrowser from "../components/FolderBrowser";

export default function DisplayData() {

    const handleOnDrop = (data: any) => {
        console.log('---------------------------');
        console.log(data);
        console.log('---------------------------');
    };

    const handleOnError = (err: any, file: any, inputElem: any, reason: any) => {
        console.log(err);
    };

    const handleOnRemoveFile = (data: any) => {
        console.log('---------------------------');
        console.log(data);
        console.log('---------------------------');
    };

    return (

        <FolderBrowser
            handleOnDrop={handleOnDrop}
            handleOnError={handleOnError}
            handleOnRemoveFile={handleOnRemoveFile}
        />
    )
}