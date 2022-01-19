import React, { useState } from 'react';

import {
  Grid,
  MenuItem,
  Select,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { NutriCard } from '../utils/containers';

const Suggestions = ({ apiResult }) => {
  const [nutriScore, setNutriScore] = useState('A');
  const selectScore =
    apiResult.nutri_score === 'B'
      ? ['A']
      : apiResult.nutri_score === 'C'
      ? ['A', 'B']
      : apiResult.nutri_score === 'D'
      ? ['A', 'B', 'C']
      : apiResult.nutri_score === 'E' && ['A', 'B', 'C', 'D'];

  return (
    <NutriCard>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={6} lg={4} xl={2} sx={{ pr: 2 }}>
          <Typography sx={{ mb: 1.5 }} variant="h5">
            Selecciona el valor de Nutri-Score que quieres conseguir:
          </Typography>
          <Select
            defaultValue={nutriScore}
            fullWidth
            id="nutri-score-select"
            label="Nutri-Score"
            onChange={(e) => setNutriScore(e.target.value)}
            value={nutriScore}
          >
            {selectScore.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <TableContainer>
          <Table size="small" aria-label="Detail table A">
            {/* Table headers */}
            <TableHead key="1">
              <TableRow>
                <TableCell>Sugerencias</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key="2">
                {apiResult.nutri_score === 'A' ? (
                  <TableCell>
                    No hay ninguna sugerencia, tu producto tiene la puntuación
                    deseada
                  </TableCell>
                ) : apiResult.nutri_score === 'B' ? (
                  <TableCell>
                    Reduce los Puntos A al menos en{' '}
                    {apiResult.points_a.score + 1}
                  </TableCell>
                ) : apiResult.nutri_score === 'C' ? (
                  <TableCell>
                    Reduce los Puntos A al menos en{' '}
                    {apiResult.points_a.score - 2}
                  </TableCell>
                ) : apiResult.nutri_score === 'D' ? (
                  <TableCell>
                    Reduce los Puntos A al menos en{' '}
                    {apiResult.points_a.score - 10}
                  </TableCell>
                ) : (
                  apiResult.nutri_score === 'E' && (
                    <TableCell>
                      Reduce los Puntos A al menos en{' '}
                      {apiResult.points_a.score - 18}
                    </TableCell>
                  )
                )}
              </TableRow>
              {apiResult.points_a.score >= 11 &&
              apiResult.points_c.a < 5 &&
              apiResult.points_c.c > 0 ? (
                apiResult.nutri_score !== 'E' ? (
                  apiResult.points_a.score === 1 && (
                    <TableRow>
                      {' '}
                      {/* CÓMO PONEMOS LAS KEYS? */}
                      <TableCell>
                        Resta al menos {apiResult.points_a.score - 11} Punto A o
                        aumenta los puntos de frutas y vegetales como mínimo en{' '}
                        {5 - apiResult.points_c.a} para restar tus Puntos C a la
                        puntuación final
                      </TableCell>
                    </TableRow>
                  )
                ) : (
                  <TableRow>
                    <TableCell>
                      Resta al menos {apiResult.points_a.score - 11} Puntos A o
                      aumenta los puntos de frutas y vegetales como mínimo en{' '}
                      {5 - apiResult.points_c.a} para restar tus Puntos C a la
                      puntuación final
                    </TableCell>
                  </TableRow>
                )
              ) : (
                <TableRow>
                  <TableCell>
                    Aumenta los puntos de frutas y vegetales como mínimo en{' '}
                    {5 - apiResult.points_c.a} para restar tus Puntos C a tu
                    puntuación final
                  </TableCell>
                </TableRow>
              )}
              {apiResult.points_a.a > 5 && (
                <TableRow>
                  {/*KEYS!*/}
                  <TableCell>
                    Intenta que la cantidad de energía sea menor
                  </TableCell>
                </TableRow>
              )}
              {apiResult.points_a.b > 5 && (
                <TableRow>
                  {/*KEYS!*/}
                  <TableCell>
                    La puntuación podría mejorar con menos azúcares
                  </TableCell>
                </TableRow>
              )}
              {apiResult.points_a.c > 5 && (
                <TableRow>
                  {/*KEYS!*/}
                  <TableCell>
                    Sería conveniente reducir la cantidad de grasas
                  </TableCell>
                </TableRow>
              )}
              {apiResult.points_a.d > 5 && (
                <TableRow>
                  {/*KEYS!*/}
                  <TableCell>Deberías considerar disminuir el sodio</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </NutriCard>
  );
};

export default Suggestions;
