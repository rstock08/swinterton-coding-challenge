import { useState } from "react";
import { Grid } from "@material-ui/core";
import DataTable from "../components/DataTable";
import FolderBrowser from "../components/FolderBrowser";
import SummationTable from "../components/SummationTable";

export default function DisplayData() {

    const [csvData, setCSVData] = useState([] as any[]);
    const [csvHeaders, setCSVHeaders] = useState([] as any[]);
    const [summedData, setSummedData] = useState([] as any[]);
    const [summedHeaders, setSummedHeaders] = useState([] as any[]);
    const [totalSum, setTotalSum] = useState(0);

    const handleOnDrop = (data: any) => {
        console.log("Adding data...");
        console.log(data);

        if (data.length > 2) {
            const headers = data[0].data;
            const rowData = data.slice(1,);

            // Create dictionary from headers for summing values
            // let sumDict: any = {};
            // for (const key of headers) {
            //     sumDict[key] = 0 as number;
            // }

            // Build array of size - assuming the first is always date time
            const sumArr: number[] = Array(headers.length - 1).fill(0);
            let sum = 0;

            // Iterate over data to sum it and create the summation table data
            for (let i = 1; i < headers.length; i++) {
                for (let j = 0; j < rowData.length; j++) {
                    let val: number = parseInt(rowData[j].data[i]);
                    if (val) {
                        // sumDict[headers[i]] += val; // Array is easier for mapping to table
                        // if (sumArr[i - 1]) {
                        //     sumArr[i - 1] = val;
                        // }
                        sum += val;
                        sumArr[i - 1] += val;
                    }
                }
            }
            console.log(sumArr);
            setSummedData(sumArr);
            setSummedHeaders(headers.slice(1,));
            setCSVData(rowData);
            setCSVHeaders(headers);
            setTotalSum(sum);
        }

        else {
            console.log("No data to parse...");
            setSummedData([] as any[]);
            setSummedHeaders([] as any[]);
            setCSVData([] as any[]);
            setCSVHeaders([] as any[]);
            setTotalSum(0);
        }
    };

    const handleOnError = (err: any, file: any, inputElem: any, reason: any) => {
        console.log(err);
        console.log("Error - removing data...");
        setSummedData([] as any[]);
        setSummedHeaders([] as any[]);
        setCSVData([] as any[]);
        setCSVHeaders([] as any[]);
        setTotalSum(0);
    };

    const handleOnRemoveFile = (data: any) => {
        console.log("Removing data...");
        console.log(data);

        setSummedData([] as any[]);
        setSummedHeaders([] as any[]);
        setCSVData([] as any[]);
        setCSVHeaders([] as any[]);
        setTotalSum(0);
    };

    return (
        <Grid container>
            <Grid item xs={2} />
            <Grid item xs={4}>
                <FolderBrowser
                    handleOnDrop={handleOnDrop}
                    handleOnError={handleOnError}
                    handleOnRemoveFile={handleOnRemoveFile}
                />
            </Grid>
            <Grid item xs={6} />

            <Grid item xs={2} />
            <Grid item xs={8}>
                {summedData.length > 0 && csvHeaders.length > 0 ? (
                    <SummationTable data={summedData} headers={summedHeaders} totalSum={totalSum} />
                ) : (null)}
            </Grid>
            <Grid item xs={2} />

            <Grid item xs={2} />
            <Grid item xs={8}>
                {csvData.length > 0 && csvHeaders.length > 0 ? (
                    <DataTable data={csvData} headers={csvHeaders} />
                ) : (null)}
            </Grid>
            <Grid item xs={2} />

        </Grid>
    )
}