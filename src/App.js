import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';

const App = () => {
  // URLs
  const baseApiUrl = `https://nutri-score-app-api.ew.r.appspot.com/`;
  // Categories
  const [category, setCategory] = useState('others');
  // Points A
  const [energy, setEnergy] = useState(356.0);
  const [sugars, setSugars] = useState(3.0);
  const [saturatedFats, setSaturatedFats] = useState(0.0);
  const [saturatedFatsAndLipids, setSaturatedFatsAndLipids] = useState(0.0);
  const [sodium, setSodium] = useState(920.0);
  // Points C
  const [fruitAndVegetables, setFruitAndVegetables] = useState(0.0);
  const [fibre, setFibre] = useState(0.0);
  const [protein, setProtein] = useState(16.0);
  const [isWater, setIsWater] = useState(false);
  // API response
  const [apiResult, setApiResult] = useState(null);

  // Submit button
  const onSubmit = async () => {
    const foodData = {
      category: category,
      energy: energy,
      fibre: fibre,
      fruit_and_vegetables: fruitAndVegetables,
      is_water: isWater,
      protein: protein,
      sodium: sodium,
      saturated_fats: saturatedFats,
      saturated_fats_and_lipids: saturatedFatsAndLipids,
      sugars: sugars,
    };

    fetch(`${baseApiUrl}calculate?q=${JSON.stringify(foodData)}`)
      .then((res) => res.json())
      .then((res) => setApiResult(res));
  };

  // Reset button
  const onReset = async () => {
    setEnergy(0);
    setFibre(0);
    setFruitAndVegetables(0);
    setIsWater(false);
    setProtein(0);
    setSodium(0);
    setSaturatedFats(0);
    setSaturatedFatsAndLipids(0);
    setSugars(0);
    setApiResult(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h5">Categoría</Typography>
            <InputLabel id="category">Categoría</InputLabel>
            <Select
              defaultValue={category}
              fullWidth
              id="category"
              label="Categoría"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <MenuItem value="cheese">Queso</MenuItem>
              <MenuItem value="drinks">Bebidas</MenuItem>
              <MenuItem value="fats">Grasas, aceites, o mantequillas</MenuItem>
              <MenuItem value="others">Otros</MenuItem>
            </Select>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5">Puntos A</Typography>
            <TextField
              defaultValue={energy}
              id="energy"
              label="Energía (KJ)"
              margin="normal"
              onChange={(e) => setEnergy(e.target.value)}
              required={true}
              type="number"
              value={energy}
              variant="outlined"
            />
            <TextField
              defaultValue={sugars}
              id="sugars"
              label="Azúcares (g)"
              margin="normal"
              onChange={(e) => setSugars(e.target.value)}
              required={true}
              type="number"
              value={sugars}
              variant="outlined"
            />
            {category === ('cheese' || 'others') ? (
              <TextField
                defaultValue={saturatedFats}
                id="saturatedFats"
                label="Grasas saturadas (g)"
                margin="normal"
                onChange={(e) => setSaturatedFats(e.target.value)}
                required={false}
                type="number"
                value={saturatedFats}
                variant="outlined"
              />
            ) : null}
            {category === 'fats' ? (
              <TextField
                defaultValue={saturatedFatsAndLipids}
                id="saturatedFatsAndLipids"
                label="Grasas saturadas y lípidos (%)"
                margin="normal"
                onChange={(e) => setSaturatedFatsAndLipids(e.target.value)}
                required={false}
                type="number"
                value={saturatedFatsAndLipids}
                variant="outlined"
              />
            ) : null}
            <TextField
              defaultValue={sodium}
              id="sodium"
              label="Sodio (mg)"
              margin="normal"
              onChange={(e) => setSodium(e.target.value)}
              required={true}
              type="number"
              value={sodium}
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5">Puntos C</Typography>
            <TextField
              defaultValue={fruitAndVegetables}
              id="fruitAndVegetables"
              label="Frutas y vegetales (%)"
              margin="normal"
              onChange={(e) => setFruitAndVegetables(e.target.value)}
              required={true}
              type="number"
              value={fruitAndVegetables}
              variant="outlined"
            />
            <TextField
              defaultValue={fibre}
              id="fibre"
              label="Fibra (g)"
              margin="normal"
              onChange={(e) => setFibre(e.target.value)}
              required={true}
              type="number"
              value={fibre}
              variant="outlined"
            />
            <TextField
              defaultValue={protein}
              id="protein"
              label="Proteínas (g)"
              margin="normal"
              onChange={(e) => setProtein(e.target.value)}
              required={true}
              type="number"
              value={protein}
              variant="outlined"
            />
            {category === 'drinks' ? (
              <FormControlLabel
                control={
                  <Switch
                    checked={isWater}
                    onChange={(e) => setIsWater(e.target.checked)}
                    name="isWater"
                  />
                }
                label="Es agua"
                labelPlacement="start"
                value="isWater"
              />
            ) : null}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Stack spacing={2} direction="row">
              <Button onClick={onReset} variant="outlined">
                Reset
              </Button>
              <Button onClick={onSubmit} variant="contained">
                Calcular
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      {apiResult ? (
        <Box>
          <h2>Resultado</h2>
          <li>Final score: {apiResult?.final_score}</li>
          <li>Nutri score: {apiResult?.nutri_score}</li>
          <li>Points A:</li>
          <ul>
            <li>A: {apiResult?.points_a.a}</li>
            <li>B: {apiResult?.points_a.b}</li>
            <li>C: {apiResult?.points_a.c}</li>
            <li>D: {apiResult?.points_a.d}</li>
          </ul>
          <li>Points C:</li>
          <ul>
            <li>A: {apiResult?.points_c.a}</li>
            <li>B: {apiResult?.points_c.b}</li>
            <li>C: {apiResult?.points_c.c}</li>
          </ul>
        </Box>
      ) : null}
    </Box>
  );
};

export default App;
