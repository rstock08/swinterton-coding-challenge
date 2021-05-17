import { useState } from "react";
import { Grid } from "@material-ui/core";
import DataTable from "../components/DataTable";
import FolderBrowser from "../components/FolderBrowser";

export default function DisplayData() {

    const [csvData, setCSVData] = useState([] as any[]);
    const [csvHeaders, setCSVHeaders] = useState([] as any[]);

    const handleOnDrop = (data: any) => {
        console.log("Adding data...");
        console.log(data);
        const slicedData = data.slice(1,);
        setCSVData(slicedData);
        setCSVHeaders(data[0].data);
    };

    const handleOnError = (err: any, file: any, inputElem: any, reason: any) => {
        console.log(err);
    };

    const handleOnRemoveFile = (data: any) => {
        console.log("Removing data...");
        console.log(data);
        setCSVData([] as any[]);
        setCSVHeaders([] as any[]);
    };

    return (
        <Grid container>
            <Grid item xs={1} />
            <Grid item xs={4}>
                <FolderBrowser
                    handleOnDrop={handleOnDrop}
                    handleOnError={handleOnError}
                    handleOnRemoveFile={handleOnRemoveFile}
                />
            </Grid>
            <Grid item xs={7} />

            <Grid item xs={1} />
            <Grid item xs={10}>
                {csvData.length > 0 && csvHeaders.length > 0 ? (
                    <DataTable data={csvData} headers={csvHeaders} />
                ) : (null)}
            </Grid>
            <Grid item xs={1} />

        </Grid>
    )
}