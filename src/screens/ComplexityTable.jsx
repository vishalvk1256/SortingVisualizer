import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ComplexityTable(props) {
  const { avg, best, worst, space } = props;
  function createData(name, calories) {
    return { name, calories };
  }

  const rows = [
    createData("Average Complexity", avg),
    createData("Best Case", best),
    createData("Worst Case", worst),
    createData("Space Complexity", space),
  ];
  return (
    <TableContainer
      component={Paper}
      style={{
        width: "400px",
        width: "400px",
        top: "430px",
        right: "100px",
        position: "absolute",
      }}
    >
      <Table
        //   sx={{ minWidth: 700 }}

        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>COMPLEXITY</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
