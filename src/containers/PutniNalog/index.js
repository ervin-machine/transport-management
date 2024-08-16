import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import "./PutniNalog.css"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(24, 24, 24)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "white"
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

function createData(nalogodavac, datumUtovara, mjestoUtovara, datumIstovara, mjestoIstovara, price) {
  return {
    nalogodavac,
    datumUtovara,
    mjestoUtovara,
    datumIstovara,
    mjestoIstovara,
    price,
    history: [
      {
        datum: "",
        sat: "",
        pozicija: '2020-01-05',
        StanjeNaKMBrojilu: '11091700',
        Stanjenakmbrojilupripretuzimgoriva: 3,
        BrojRacuna: 0,
        Plinskouljenafta: 2,
        Benzin: 20,
        MotorUlja: 20,
        OstMaziva: 20,
        MjestotankovanjaPumpstanicaPotpisizig: 20
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon  sx={{ color: "white" }}/> : <KeyboardArrowDownIcon sx={{ color: "white" }} />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.nalogodavac}
        </StyledTableCell>
        <StyledTableCell align="right">{row.datumUtovara}</StyledTableCell>
        <StyledTableCell align="right">{row.mjestoUtovara}</StyledTableCell>
        <StyledTableCell align="right">{row.datumIstovara}</StyledTableCell>
        <StyledTableCell align="right">{row.mjestoIstovara}</StyledTableCell>
        <StyledTableCell align="right">{row.price}</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>Cas</StyledTableCell>
                    <StyledTableCell>pozicija</StyledTableCell>
                    <StyledTableCell align="right">Stanje na km brojilu</StyledTableCell>
                    <StyledTableCell align="right">Stanje na km brojilu pri pret. uzim. goriva</StyledTableCell>
                    <StyledTableCell align="right">Broj racuna</StyledTableCell>
                    <StyledTableCell>Plinsko ulje nafta</StyledTableCell>
                    <StyledTableCell>Benzin</StyledTableCell>
                    <StyledTableCell align="right">Motor. ulja</StyledTableCell>
                    <StyledTableCell align="right">Ost. maziva</StyledTableCell>
                    <StyledTableCell align="right">Mjesto tankovanja Pump. stanica Potpis i zig</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <StyledTableRow key={historyRow.date}>
                      <StyledTableCell component="th" scope="row">
                        {historyRow.date}
                      </StyledTableCell>
                      <StyledTableCell>{historyRow.customerId}</StyledTableCell>
                      <StyledTableCell align="right">{historyRow.amount}</StyledTableCell>
                      <StyledTableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

const PutniNalog = () => {
  
  return (
    <div className='putni-nalog-container'>
      <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
        Putni Nalog
      </Typography>
      <Grid container spacing={2} justifyContent={"center"} sx={{ marginTop: "50px" }}>
        <Grid item md={10}>
      <Table aria-label="collapsible table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell />
              <StyledTableCell align="left">Principal</StyledTableCell>
              <StyledTableCell align="left">Loading Date</StyledTableCell>
              <StyledTableCell align="left">Loading Place</StyledTableCell>
              <StyledTableCell align="left">Unloading Date</StyledTableCell>
              <StyledTableCell align="left">Unloading Place</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
        </Grid>
      
    </Grid>
    </div>
      
  );
};

export default PutniNalog;