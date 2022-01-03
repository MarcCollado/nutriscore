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

const Detail = ({ apiResult, formData }) => {
  const createPointsATableRow = (
    beveragesEnergy,
    beveragesSugars,
    saturatedFatsAndLipids,
    key,
    notBeveragesEnergy,
    notBeveragesSugars,
    sodium
  ) => {
    const colors = [
      '#ffffff',
      '#fcece9',
      '#f9d9d3',
      '#f6c6bd',
      '#f4b3a8',
      '#f1a092',
      '#ee8d7c',
      '#ec7a67',
      '#e96751',
      '#e6543b',
      '#e44226',
    ];
    return (
      <TableRow key={key}>
        <TableCell
          align="right"
          component="th"
          scope="row"
          sx={{ backgroundColor: colors[key] }}
        >
          {key}
        </TableCell>
        {/* Energy */}
        {formData.category !== 'beverages'
          ? createTableCell(apiResult.points_a.a, key, notBeveragesEnergy)
          : createTableCell(apiResult.points_a.a, key, beveragesEnergy)}
        {/* Sugars */}
        {formData.category !== 'beverages'
          ? createTableCell(apiResult.points_a.b, key, notBeveragesSugars)
          : createTableCell(apiResult.points_a.b, key, beveragesSugars)}
        {/* Saturated fats/Saturated fats and lipids */}
        {formData.category !== 'fats'
          ? key === 0
            ? createTableCell(apiResult.points_a.c, key, '≤ ' + (key + 1))
            : createTableCell(apiResult.points_a.c, key, '> ' + key)
          : createTableCell(apiResult.points_a.c, key, saturatedFatsAndLipids)}
        {/* Sodium */}
        {createTableCell(apiResult.points_a.d, key, sodium)}
      </TableRow>
    );
  };

  const createPointsCTableRow = (
    beveragesFruitsAndVegetables,
    fibre,
    notBeveragesFruitsAndVegetables,
    key,
    proteins
  ) => {
    const beveragesColors = [
      '#ffffff',
      '#e8f2ec',
      '#d1e5da',
      '#bad8c7',
      '#a3cbb5',
      '#8cbfa2',
      '#75b290',
      '#5ea57d',
      '#47986b',
      '#308b58',
      '#197f46',
    ];
    const notBeveragesColors = [
      '#ffffff',
      '#d1e5da',
      '#a3cbb5',
      '#75b290',
      '#47986b',
      '#197f46',
    ];
    return (
      <TableRow key={key}>
        <TableCell
          align="right"
          component="th"
          scope="row"
          sx={
            formData.category !== 'beverages'
              ? key <= 5 && { backgroundColor: notBeveragesColors[key] }
              : { backgroundColor: beveragesColors[key] }
          }
        >
          {formData.category !== 'beverages' && key > 5 ? '-' : key}
        </TableCell>
        {/* Fruits and vegetables */}
        {formData.category === 'beverages'
          ? createTableCell(
              apiResult.points_c.a,
              key,
              beveragesFruitsAndVegetables
            )
          : createTableCell(
              apiResult.points_c.a,
              key,
              notBeveragesFruitsAndVegetables
            )}
        {/* Fibre */}
        {createTableCell(apiResult.points_c.b, key, fibre)}
        {/* Proteins */}
        {createTableCell(apiResult.points_c.c, key, proteins)}
      </TableRow>
    );
  };

  const createTableCell = (comparison, key, text) => {
    return (
      <TableCell
        align="right"
        sx={{
          backgroundColor: comparison === key ? 'LightGrey' : '#ffffff',
        }}
      >
        {text}
      </TableCell>
    );
  };

  return (
    apiResult && (
      <div>
        Puntos A y C:
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="Detail table">
            {/* Table headers */}
            <TableHead>
              <TableRow>
                <TableCell align="right">Puntos</TableCell>
                <TableCell align="right">Energía (KJ)</TableCell>
                <TableCell align="right">Azúcares (g)</TableCell>
                <TableCell align="right">Grasas saturadas (g)</TableCell>
                <TableCell align="right">Sodio (mg)</TableCell>
              </TableRow>
            </TableHead>
            {/* Table body */}
            <TableBody>
              {createPointsATableRow(
                '≤ 0,0',
                '≤ 0,0',
                '< 10',
                0,
                '≤ 335',
                '≤ 4,5',
                '≤ 90'
              )}
              {createPointsATableRow(
                '≤ 30',
                '≤ 3,0',
                '< 16',
                1,
                '> 335',
                '> 4,5',
                '> 90'
              )}
              {createPointsATableRow(
                '≤ 60',
                '> 13,5',
                '< 22',
                2,
                '> 670',
                '> 9,0',
                '> 180'
              )}
              {createPointsATableRow(
                '≤ 90',
                '≤ 4,5',
                '< 28',
                3,
                '> 1005',
                '> 13,5',
                '> 270'
              )}
              {createPointsATableRow(
                '≤ 120',
                '≤ 6,0',
                '< 34',
                4,
                '> 1340',
                '> 18,0',
                '> 360'
              )}
              {createPointsATableRow(
                '≤ 150',
                '≤ 7,5',
                '< 40',
                5,
                '> 1675',
                '> 22,5',
                '> 450'
              )}
              {createPointsATableRow(
                '≤ 180',
                '≤ 9,0',
                '< 46',
                6,
                '> 2010',
                '> 27,0',
                '> 540'
              )}
              {createPointsATableRow(
                '≤ 210',
                '≤ 10,5',
                '< 52',
                7,
                '> 2345',
                '> 31,0',
                '> 630'
              )}
              {createPointsATableRow(
                '≤ 240',
                '≤ 12,0',
                '< 58',
                8,
                '> 2680',
                '> 36,0',
                '> 720'
              )}
              {createPointsATableRow(
                '≤ 270',
                '≤ 13,5',
                '< 64',
                9,
                '> 3015',
                '> 40,0',
                '> 810'
              )}
              {createPointsATableRow(
                '> 270',
                '> 13,5',
                '≥ 64',
                10,
                '> 3350',
                '> 45,0',
                '> 900'
              )}

              {/* Category score */}
              <TableRow key="11" sx={{ border: 2 }}>
                <TableCell component="th" scope="row"></TableCell>
                <TableCell>a = {apiResult.points_a.a}</TableCell>
                <TableCell>b = {apiResult.points_a.b}</TableCell>
                <TableCell>c = {apiResult.points_a.c}</TableCell>
                <TableCell>d = {apiResult.points_a.d}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        Puntos A = a + b + c + d ={' '}
        {apiResult.points_a.a +
          apiResult.points_a.b +
          apiResult.points_a.c +
          apiResult.points_a.d}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="Detail table">
            {/* Table headers */}
            <TableHead>
              <TableRow>
                <TableCell align="right">Puntos</TableCell>
                <TableCell align="right">Frutas y vegetales (%)</TableCell>
                <TableCell align="right">Fibra (g)</TableCell>
                <TableCell align="right">Proteínas (g)</TableCell>
              </TableRow>
            </TableHead>
            {/* Table body */}
            <TableBody>
              {createPointsCTableRow('≤ 40', '≤ 0,7', '≤ 40', 0, '≤ 1,6')}
              {createPointsCTableRow('-', '> 0,7', '> 40', 1, '> 1,6')}
              {createPointsCTableRow('> 40', '> 1,4', '> 60', 2, '> 3,2')}
              {createPointsCTableRow('-', '> 2,1', '-', 3, '> 4,8')}
              {createPointsCTableRow('> 60', '> 2,8', '-', 4, '> 6,4')}
              {createPointsCTableRow('-', '> 3,5', '> 80', 5, '> 8,0')}
              {createPointsCTableRow('-', '-', '-', 6, '-')}
              {createPointsCTableRow('-', '-', '-', 7, '-')}
              {createPointsCTableRow('-', '-', '-', 8, '-')}
              {createPointsCTableRow('-', '-', '-', 9, '-')}
              {createPointsCTableRow('> 80', '-', '-', 10, '-')}
              {/* Category score */}
              <TableRow key="11" sx={{ border: 2 }}>
                <TableCell component="th" scope="row"></TableCell>
                <TableCell>a = {apiResult.points_a.a}</TableCell>
                <TableCell>b = {apiResult.points_a.b}</TableCell>
                <TableCell>c = {apiResult.points_a.c}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        Puntos C = a + b + c ={' '}
        {apiResult.points_a.a + apiResult.points_a.b + apiResult.points_a.c}
        <br />
        Puntuación final:
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="Detail table">
            {/* Table headers */}
            <TableHead></TableHead>
            {/* Table body */}
            <TableBody>
              <TableRow key={0}>
                <TableCell
                  component="th"
                  scope="col"
                  style={{ fontWeight: 'bold' }}
                >
                  {'Puntos A ≥ 11'}
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow key={1}>
                <TableCell>
                  {'Puntos de frutas y vegetales '}
                  {formData.category !== 'beverages' ? '=' : '≥'} 5:
                  <br />
                  {'Puntuación final = Puntos A - Puntos C'}
                  {apiResult.points_a.a +
                    apiResult.points_a.b +
                    apiResult.points_a.c +
                    apiResult.points_a.d >=
                    11 &&
                    apiResult.points_c.a >= 5 &&
                    ' = ' + apiResult.final_score}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor:
                      apiResult.points_a.a +
                        apiResult.points_a.b +
                        apiResult.points_a.c +
                        apiResult.points_a.d >=
                        11 && apiResult.points_c.a >= 5
                        ? 'LightGrey'
                        : '#ffffff',
                  }}
                ></TableCell>
              </TableRow>
              <TableRow key={2}>
                <TableCell>
                  {'Puntos de frutas y vegetales < 5:'}
                  <br />
                  {
                    'Puntuación final = Puntos A - (puntos de fibra + puntos de frutas y vegetales)'
                  }
                  {apiResult.points_a.a +
                    apiResult.points_a.b +
                    apiResult.points_a.c +
                    apiResult.points_a.d >=
                    11 &&
                    apiResult.points_c.a < 5 &&
                    ' = ' + apiResult.final_score}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor:
                      apiResult.points_a.a +
                        apiResult.points_a.b +
                        apiResult.points_a.c +
                        apiResult.points_a.d >=
                        11 && apiResult.points_c.a < 5
                        ? 'LightGrey'
                        : '#ffffff',
                  }}
                ></TableCell>
              </TableRow>
              <TableRow key={3}>
                <TableCell
                  component="th"
                  scope="col"
                  style={{ fontWeight: 'bold' }}
                >
                  {'Puntos A < 11'}
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow key={4}>
                <TableCell>
                  {'Puntuación final = Puntos A - Puntos C'}
                  {apiResult.points_a.a +
                    apiResult.points_a.b +
                    apiResult.points_a.c +
                    apiResult.points_a.d <
                    11 && ' = ' + apiResult.final_score}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor:
                      apiResult.points_a.a +
                        apiResult.points_a.b +
                        apiResult.points_a.c +
                        apiResult.points_a.d <
                      11
                        ? 'LightGrey'
                        : '#ffffff',
                  }}
                ></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  );
};

export default Detail;
