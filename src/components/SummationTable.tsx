import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

interface ISummationTableProps {
    data: any[];
    headers: any[];
}

export default function SummationTable(props: ISummationTableProps) {
    return (
        <TableContainer component={Paper} style={{ maxHeight: "30rem" }}>
            <Table stickyHeader size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Summations </TableCell>
                        {props.headers.map((col: any, index: number) => (
                            <TableCell key={`header-${index}`}>{col}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row: any, index: number) => (
                        <TableRow key={`row-${index}`}>
                            {row.data.map((val: any, innerIndex: number) => {
                                return <TableCell key={`cell-${innerIndex}`}>{val}</TableCell>
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}