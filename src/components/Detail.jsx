import React from 'react';
import {
  FormControlUnstyledContext,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { format } from 'prettier';

const Detail = ({ apiResult, formData }) => {
  function createPointsATableRow(beveragesEnergy, beveragesSugars, key, notBeveragesEnergy, notBeveragesSugars, sodium) {
    const colors = ['#fcece9', '#f9d9d3', '#f6c6bd', '#f4b3a8', '#f1a092', '#ee8d7c', '#ec7a67', '#e96751', '#e6543b', '#e44226']
    return (
      <TableRow key={key}>
        <TableCell align="right" component="th" scope="row" sx={{ backgroundColor: colors[key - 1] }}>{key}</TableCell>
        {formData.category !== 'beverages' && apiResult.points_a.a == key &&
            <TableCell align="right" sx={{ backgroundColor: 'LightGrey' }}>{notBeveragesEnergy}</TableCell>
        }
        {formData.category !== 'beverages' && apiResult.points_a.a != key &&
            <TableCell align="right">{notBeveragesEnergy}</TableCell>
        }
        {formData.category === 'beverages' && apiResult.points_a.a == key &&
            <TableCell align="right" sx={{ backgroundColor: 'LightGrey' }}>{beveragesEnergy}</TableCell>
        }
        {formData.category === 'beverages' && apiResult.points_a.a != key &&
            <TableCell align="right">{beveragesEnergy}</TableCell>
        }
        {formData.category !== 'beverages' && apiResult.points_a.b == key &&
            <TableCell align="right" sx={{ backgroundColor: 'LightGrey' }}>{notBeveragesSugars}</TableCell>
        }
        {formData.category !== 'beverages' && apiResult.points_a.b != key &&
            <TableCell align="right">{notBeveragesSugars}</TableCell>
        }
        {formData.category === 'beverages' && apiResult.points_a.b == key &&
            <TableCell align="right" sx={{ backgroundColor: 'LightGrey' }}>{beveragesSugars}</TableCell>
        }
        {formData.category === 'beverages' && apiResult.points_a.b != key &&
            <TableCell align="right">{beveragesSugars}</TableCell>
        }
        {apiResult.points_a.c == key ?
            <TableCell align="right" sx={{ backgroundColor: 'LightGrey' }}>{'> ' + key}</TableCell>
            : <TableCell align="right">{'> ' + key}</TableCell>
        }
        {apiResult.points_a.d == key ?
            <TableCell align="right" sx={{ backgroundColor: 'LightGrey' }}>{sodium}</TableCell>
            : <TableCell align="right">{sodium}</TableCell>
        }
      </TableRow>
    )
  }

  return (
    apiResult && (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="Detail table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Puntos</TableCell>
              <TableCell align="right">Energía (KJ)</TableCell>
              <TableCell align="right">Azúcares (g)</TableCell>
              <TableCell align="right">Grasas saturadas (g)</TableCell>
              <TableCell align="right">Sodio (mg)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {createPointsATableRow('≤ 0,0', '≤ 0,0', 0, '≤ 335', '≤ 4,5', '≤ 90')}
            {createPointsATableRow('≤ 30', '≤ 3,0', 1, '> 335', '> 4,5', '> 90')}
            {createPointsATableRow('≤ 60', '> 13,5', 2, '> 670', '> 9,0', '> 180')}
            {createPointsATableRow('≤ 90', '≤ 4,5', 3, '> 1005', '> 13,5', '> 270')}
            {createPointsATableRow('≤ 120', '≤ 6,0', 4, '> 1340', '> 18,0', '> 360')}
            {createPointsATableRow('≤ 150', '≤ 7,5', 5, '> 1675', '> 22,5', '> 450')}
            {createPointsATableRow('≤ 180', '≤ 9,0', 6, '> 2010', '> 27,0', '> 540')}
            {createPointsATableRow('≤ 210', '≤ 10,5', 7, '> 2345', '> 31,0', '> 630')}
            {createPointsATableRow('≤ 240', '≤ 12,0', 8, '> 2680', '> 36,0', '> 720')}
            {createPointsATableRow('≤ 270', '≤ 13,5', 9, '> 3015', '> 40,0', '> 810')}
            {createPointsATableRow('> 270', '> 13,5', 10, '> 3350', '> 45,0', '> 900')}
            {/* Category score */}
            <TableRow key="11" sx={{ border: 2 }}>
              <TableCell align="right" component="th" scope="row"></TableCell>
              <TableCell align="right">a = {apiResult.points_a.a}</TableCell>
              <TableCell align="right">b = {apiResult.points_a.b}</TableCell>
              <TableCell align="right">c = {apiResult.points_a.c}</TableCell>
              <TableCell align="right">d = {apiResult.points_a.d}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default Detail;
