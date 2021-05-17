import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

interface ISummationTableProps {
    data: any[];
    headers: any[];
    totalSum: number;
}

export default function SummationTable(props: ISummationTableProps) {
    return (
        <TableContainer component={Paper} style={{ maxHeight: "30rem" }}>
            <Table stickyHeader size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Summations</TableCell>
                        {props.headers.map((col: any, index: number) => (
                            <TableCell key={`summation-header-${index}`}>{col}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{props.totalSum}</TableCell>
                        {props.data.map((val: number, index: number) => {
                            return <TableCell key={`summation-cell-${index}`}>{val}</TableCell>
                        })}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}