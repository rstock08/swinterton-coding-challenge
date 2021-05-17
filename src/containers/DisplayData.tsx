import { useState } from "react";
import { Grid } from "@material-ui/core";
import DataTable from "../components/DataTable";
import FolderBrowser from "../components/FolderBrowser";
import SummationTable from "../components/SummationTable";

export default function DisplayData() {

    const [csvData, setCSVData] = useState([] as any[]);
    const [csvHeaders, setCSVHeaders] = useState([] as any[]);
    const [summedData, setSummedData] = useState([] as any[]);

    const handleOnDrop = (data: any) => {
        console.log("Adding data...");
        console.log(data);

        if (data.length > 2) {
            const headers = data[0].data;
            const rowData = data.slice(1,);

            // Create dictionary from headers for summing values
            let sumDict: any = {};
            for (const key of headers) {
                sumDict[key] = 0 as number;
            }

            // Iterate over data to sum it and create the summation table data
            for (let i = 1; i < headers.length; i++) {
                for (let j = 0; j < rowData.length; j++) {
                    let val: number = parseInt(rowData[j].data[i]);
                    if (val) {
                        sumDict[headers[i]] += val;
                    }
                }
            }
            console.log(sumDict);

            setSummedData(sumDict);
            setCSVData(rowData);
            setCSVHeaders(headers);
        }

        else {
            console.log("No data to parse...");
            setSummedData([] as any[]);
            setCSVData([] as any[]);
            setCSVHeaders([] as any[]);
        }
    };

    const handleOnError = (err: any, file: any, inputElem: any, reason: any) => {
        console.log(err);
    };

    const handleOnRemoveFile = (data: any) => {
        console.log("Removing data...");
        console.log(data);

        setSummedData([] as any[]);
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
                {summedData.length > 0 && csvHeaders.length > 0 ? (
                    <SummationTable data={summedData} headers={csvHeaders} />
                ) : (null)}
            </Grid>
            <Grid item xs={1} />

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