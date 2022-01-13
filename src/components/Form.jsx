import React, { useState } from 'react';
import {
  Button,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';

import { NutriCard } from '../utils/containers';

// Base API URL
const baseApiUrl = `https://nutri-score-app-api.ew.r.appspot.com/`;

const Form = ({ setFormData, setApiResult }) => {
  // Categories
  const [category, setCategory] = useState('others');
  // Points A
  const [energy, setEnergy] = useState(0.0);
  const [sugars, setSugars] = useState(0.0);
  const [saturatedFats, setSaturatedFats] = useState(0.0);
  const [saturatedFatsAndLipids, setSaturatedFatsAndLipids] = useState(0.0);
  const [sodium, setSodium] = useState(0.0);
  // Points C
  const [fruitAndVegetables, setFruitAndVegetables] = useState(0.0);
  const [fibre, setFibre] = useState(0.0);
  const [protein, setProtein] = useState(0.0);
  const [isWater, setIsWater] = useState(false);

  // Submit button
  const onSubmit = async () => {
    // Create an object with form data inputs
    const formData = {
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
    // Set form data on App.js before submit
    setFormData(formData);
    // Fetch Calculate API
    fetch(`${baseApiUrl}calculate?q=${JSON.stringify(formData)}`)
      .then((res) => res.json())
      .then((res) => setApiResult(res));
  };

  // Reset button
  const onReset = async () => {
    setEnergy(0.0);
    setFibre(0.0);
    setFruitAndVegetables(0.0);
    setIsWater(false);
    setProtein(0.0);
    setSodium(0.0);
    setSaturatedFats(0.0);
    setSaturatedFatsAndLipids(0.0);
    setSugars(0.0);
    // Reset data on App.js component
    setFormData(null);
    setApiResult(null);
  };

  return (
    <NutriCard>
      <Grid container spacing={2}>
        {/* Category */}
        <Grid item xs={12} sm={8} md={6} lg={4} xl={2} sx={{ pr: 2 }}>
          <Typography sx={{ mb: 1.5 }} variant="h5">
            Categoría
          </Typography>
          <Select
            defaultValue={category}
            fullWidth
            id="category"
            label="Categoría"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <MenuItem value="cheese">🧀 Queso</MenuItem>
            <MenuItem value="beverages">🥤 Bebidas</MenuItem>
            <MenuItem value="fats">🍯 Grasas, aceites, o mantequillas</MenuItem>
            <MenuItem value="others">🎰 Otros</MenuItem>
          </Select>
        </Grid>
        {/* Points A */}
        <Grid item xs={12}>
          <Typography variant="h5">Puntos A</Typography>
          <TextField
            defaultValue={energy}
            id="energy"
            InputProps={{
              endAdornment: <InputAdornment position="end">KJ</InputAdornment>,
            }}
            label="Energía"
            margin="normal"
            onChange={(e) => setEnergy(e.target.value)}
            required={true}
            sx={{ pr: 2 }}
            type="number"
            value={energy}
            variant="outlined"
          />
          <TextField
            defaultValue={sugars}
            id="sugars"
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
            }}
            label="Azúcares"
            margin="normal"
            onChange={(e) => setSugars(e.target.value)}
            required={true}
            sx={{ pr: 2 }}
            type="number"
            value={sugars}
            variant="outlined"
          />
          {category === 'cheese' || category === 'others' ? (
            <TextField
              defaultValue={saturatedFats}
              id="saturatedFats"
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
              }}
              label="Grasas saturadas"
              margin="normal"
              onChange={(e) => setSaturatedFats(e.target.value)}
              required={false}
              sx={{ pr: 2 }}
              type="number"
              value={saturatedFats}
              variant="outlined"
            />
          ) : null}
          {category === 'fats' || category === 'beverages' ? (
            <TextField
              defaultValue={saturatedFatsAndLipids}
              id="saturatedFatsAndLipids"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              label="Grasas saturadas y lípidos"
              margin="normal"
              onChange={(e) => setSaturatedFatsAndLipids(e.target.value)}
              required={false}
              sx={{ pr: 2 }}
              type="number"
              value={saturatedFatsAndLipids}
              variant="outlined"
            />
          ) : null}
          <TextField
            defaultValue={sodium}
            id="sodium"
            InputProps={{
              endAdornment: <InputAdornment position="end">mg</InputAdornment>,
            }}
            label="Sodio"
            margin="normal"
            onChange={(e) => setSodium(e.target.value)}
            required={true}
            sx={{ pr: 2 }}
            type="number"
            value={sodium}
            variant="outlined"
          />
        </Grid>
        {/* Points C */}
        <Grid item xs={12}>
          <Typography variant="h5">Puntos C</Typography>
          <TextField
            defaultValue={fruitAndVegetables}
            id="fruitAndVegetables"
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            label="Frutas y vegetales"
            margin="normal"
            onChange={(e) => setFruitAndVegetables(e.target.value)}
            required={true}
            sx={{ pr: 2 }}
            type="number"
            value={fruitAndVegetables}
            variant="outlined"
          />
          <TextField
            defaultValue={fibre}
            id="fibre"
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
            }}
            label="Fibra"
            margin="normal"
            onChange={(e) => setFibre(e.target.value)}
            required={true}
            sx={{ pr: 2 }}
            type="number"
            value={fibre}
            variant="outlined"
          />
          <TextField
            defaultValue={protein}
            id="protein"
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
            }}
            label="Proteínas"
            margin="normal"
            onChange={(e) => setProtein(e.target.value)}
            required={true}
            sx={{ pr: 2 }}
            type="number"
            value={protein}
            variant="outlined"
          />
          {category === 'beverages' ? (
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
        </Grid>
        {/* Buttons */}
        <Grid item xs={6}>
          <Stack spacing={2} direction="row">
            <Button onClick={onReset} variant="outlined">
              Reset
            </Button>
            <Button onClick={onSubmit} size="large" variant="contained">
              Calcular
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </NutriCard>
  );
};

export default Form;
