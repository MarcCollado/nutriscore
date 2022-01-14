import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export const tableAValues = [
  ['≤ 0,0', '≤ 0,0', '< 10', 0, '≤ 335', '≤ 4,5', '≤ 90'],
  ['≤ 30', '≤ 3,0', '< 16', 1, '> 335', '> 4,5', '> 90'],
  ['≤ 60', '> 13,5', '< 22', 2, '> 670', '> 9,0', '> 180'],
  ['≤ 90', '≤ 4,5', '< 28', 3, '> 1005', '> 13,5', '> 270'],
  ['≤ 120', '≤ 6,0', '< 34', 4, '> 1340', '> 18,0', '> 360'],
  ['≤ 150', '≤ 7,5', '< 40', 5, '> 1675', '> 22,5', '> 450'],
  ['≤ 180', '≤ 9,0', '< 46', 6, '> 2010', '> 27,0', '> 540'],
  ['≤ 210', '≤ 10,5', '< 52', 7, '> 2345', '> 31,0', '> 630'],
  ['≤ 240', '≤ 12,0', '< 58', 8, '> 2680', '> 36,0', '> 720'],
  ['≤ 270', '≤ 13,5', '< 64', 9, '> 3015', '> 40,0', '> 810'],
  ['> 270', '> 13,5', '≥ 64', 10, '> 3350', '> 45,0', '> 900'],
];

export const tableCValues = [
  ['≤ 40', '≤ 0,7', 0, '≤ 40', '≤ 1,6'],
  ['-', '> 0,7', 1, '> 40', '> 1,6'],
  ['> 40', '> 1,4', 2, '> 60', '> 3,2'],
  ['-', '> 2,1', 3, '-', '> 4,8'],
  ['> 60', '> 2,8', 4, '-', '> 6,4'],
  ['-', '> 3,5', 5, '> 80', '> 8,0'],
  ['-', '-', 6, '-', '-'],
  ['-', '-', 7, '-', '-'],
  ['-', '-', 8, '-', '-'],
  ['-', '-', 9, '-', '-'],
  ['> 80', '-', 10, '-', '-'],
];

// If the comparison matches the key => fill the cell with grey background
export const createCell = (comparison, key, text) => (
  <TableCell
    align="right"
    sx={{
      backgroundColor: comparison === key ? 'LightGrey' : '#ffffff',
    }}
  >
    {text}
  </TableCell>
);
