import React from 'react';
import './ExportImport.css'
import { styled } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(24, 24, 24)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    color: "white"
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    color: "white"
  },
}));

function createData(pozicija, nalogodavac, datumUtovara, mjestoUtovara, datumIstovara, mjestoIstovara, cijena) {
  return { pozicija, nalogodavac, datumUtovara, mjestoUtovara, datumIstovara, mjestoIstovara, cijena};
}

const rows = [
  createData('Export', "Bingo d.o.o", "11/11/2023", "Tuzla", "12/12/2024", "Srebrenik", "120"),
];

const ExportImport = (props) => {
  const { section } = props;

  return (
    <div className='export-import-container'>
      <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
        {section}
      </Typography>
      
      <Grid container spacing={2} justifyContent={"center"} sx={{ marginTop: "50px" }}>
        <Grid item md={10}>
          <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Position</StyledTableCell>
              <StyledTableCell align="center">Principal</StyledTableCell>
              <StyledTableCell align="center">Loading Date</StyledTableCell>
              <StyledTableCell align="center">Loading Place</StyledTableCell>
              <StyledTableCell align="center">Unloading Date</StyledTableCell>
              <StyledTableCell align="center">Unloading Place</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow 
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.pozicija}
                </StyledTableCell>
                <StyledTableCell align="center">{row.nalogodavac}</StyledTableCell>
                <StyledTableCell align="center">{row.datumUtovara}</StyledTableCell>
                <StyledTableCell align="center">{row.mjestoUtovara}</StyledTableCell>
                <StyledTableCell align="center">{row.datumIstovara}</StyledTableCell>
                <StyledTableCell align="center">{row.mjestoIstovara}</StyledTableCell>
                <StyledTableCell align="center">{row.cijena}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
    </div>
      
  );
};

export default ExportImport;