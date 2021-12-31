import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const Detail = ({ apiResult }) => {
  function createData(energy, points, saturatedFats, sodium, sugars) {
    return { energy, points, saturatedFats, sodium, sugars };
  }

  const rows = [
    createData('≤ 335', 0, '≤ 1', '≤ 90', '≤ 4,5'),
    createData('> 335', 1, '> 1', '> 90', '> 4,5'),
    createData('> 670', 2, '> 2', '> 180', '> 9,0'),
    createData('> 1005', 3, '> 3', '> 270', '> 13,5'),
    createData('> 1340', 4, '> 4', '> 360', '> 18,0'),
    createData('> 1675', 5, '> 5', '> 450', '> 22,5'),
    createData('> 2010	', 6, '> 6', '> 540', '> 27,0'),
    createData('> 2345', 7, '> 7', '> 630', '> 31,0'),
    createData('> 2680	', 8, '> 8', '> 720', '> 36,0'),
    createData('> 3015', 9, '> 9', '> 810', '> 40,0'),
    createData('> 3350', 10, '> 10', '> 900', '> 45,0'),
  ];

  return (
    apiResult && (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 413.72 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Puntos</TableCell>
              <TableCell align="right">Energía (Kj)</TableCell>
              <TableCell align="right">Azúcares (g)</TableCell>
              <TableCell align="right">Grasas saturadas (g)</TableCell>
              <TableCell align="right">Sodio (mg)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right" component="th" scope="row">
                  {row.points}
                </TableCell>
                <TableCell align="right">{row.energy}</TableCell>
                <TableCell align="right">{row.sugars}</TableCell>
                <TableCell align="right">{row.saturatedFats}</TableCell>
                <TableCell align="right">{row.sodium}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default Detail;
