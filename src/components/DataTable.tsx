import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

interface IDataTableProps {
    data: any[];
    headers: any[];
}

export default function DataTable(props: IDataTableProps) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
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