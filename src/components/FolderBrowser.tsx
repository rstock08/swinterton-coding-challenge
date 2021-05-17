import React from "react";
import { CSVReader } from 'react-papaparse'

interface IFolderBrowserProps {
    handleOnDrop(e: any): void;
    handleOnError(err: any, file: any, inputElem: any, reason: any): void;
    handleOnRemoveFile(data: any): void;
}

export default function FolderBrowser(props: IFolderBrowserProps) {
    return (
        <div>
            <h5>Click ( No Drag ) Upload</h5>
            <CSVReader
                onDrop={props.handleOnDrop}
                onError={props.handleOnError}
                noDrag
                addRemoveButton
                onRemoveFile={props.handleOnRemoveFile}
            >
                <span>Click to upload.</span>
            </CSVReader>
        </div>
    )
}