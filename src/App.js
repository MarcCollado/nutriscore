import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
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

  // Submit
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

  return (
    <div>
      <Typography variant="h5">Categoría</Typography>
      <Box>
        <FormControl fullWidth>
          <Select
            defaultValue={category}
            id="category"
            value={category}
            label="Categoría"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="cheese">Queso</MenuItem>
            <MenuItem value="drinks">Bebidas</MenuItem>
            <MenuItem value="fats">Grasas, aceites, o mantequillas</MenuItem>
            <MenuItem value="others">Otros</MenuItem>
          </Select>
          <InputLabel id="category">Categoría</InputLabel>
        </FormControl>
      </Box>
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
          variant="outlined"
        />
        <TextField
          defaultValue={saturatedFats}
          id="saturatedFats"
          label="Grasas saturadas (g)"
          margin="normal"
          onChange={(e) => setSaturatedFats(e.target.value)}
          required={false}
          type="number"
          variant="outlined"
        />
        <TextField
          defaultValue={saturatedFatsAndLipids}
          id="saturatedFatsAndLipids"
          label="Grasas saturadas y lípidos (%)"
          margin="normal"
          onChange={(e) => setSaturatedFatsAndLipids(e.target.value)}
          required={false}
          type="number"
          variant="outlined"
        />
        <TextField
          defaultValue={sodium}
          id="sodium"
          label="Sodio (mg)"
          margin="normal"
          onChange={(e) => setSodium(e.target.value)}
          required={true}
          type="number"
          variant="outlined"
        />
      </Box>
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
          variant="outlined"
        />
      </Box>
      <Box>
        <Stack spacing={2} direction="row">
          <Button variant="outlined">Reset</Button>
          <Button onClick={onSubmit} variant="contained">
            Calcular
          </Button>
        </Stack>
      </Box>
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
    </div>
  );
};

export default App;
