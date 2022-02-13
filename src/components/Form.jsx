import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';

import { NutriCard } from '../utils/containers';
import { nsGroups } from '../utils/maps';

// Base API URL
const baseApiUrl = `https://nutri-score-app-api.ew.r.appspot.com/`;

const Form = ({ setFormData, setApiResult }) => {
  // Categories and groups
  const [category, setCategory] = useState('');
  const [group, setGroup] = useState('');
  // Points A
  const [energy, setEnergy] = useState('');
  const [sugars, setSugars] = useState('');
  const [saturatedFats, setSaturatedFats] = useState('');
  const [saturatedFatsAndLipids, setSaturatedFatsAndLipids] = useState('');
  const [sodium, setSodium] = useState('');
  // Points C
  const [fruitAndVegetables, setFruitAndVegetables] = useState('');
  const [fibre, setFibre] = useState('');
  const [protein, setProtein] = useState('');
  const [isWater, setIsWater] = useState(false);

  // Generate food groups
  const generateGroups = () => {
    return Object.keys(nsGroups()).map((k) => {
      return (
        <MenuItem key={k} value={k}>
          {nsGroups(k)['translation']}
        </MenuItem>
      );
    });
  };

  // Event listener to submit form on Enter
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
      // Checks whether the pressed key is "Enter"
      formIsValid() && onSubmit();
    }
  });

  // Form is valid and complete
  const formIsValid = () => {
    if (
      !!group &&
      !!energy &&
      !!sugars &&
      (!!saturatedFats || !!saturatedFatsAndLipids) &&
      !!sodium &&
      !!fruitAndVegetables &&
      !!fibre &&
      !!protein
    )
      return true;
    return false;
  };

  // Render submit button
  const SubmitButton = () => {
    return (
      <Button
        disabled={!formIsValid()}
        id="submit"
        onClick={onSubmit}
        size="large"
        variant="contained"
      >
        Calcular
      </Button>
    );
  };

  // Handle form submit
  const onSubmit = async () => {
    if (formIsValid()) {
      const formData = {
        category: category,
        group: group,
        energy: energy,
        fibre: fibre,
        fruit_and_vegetables: fruitAndVegetables,
        is_water: isWater,
        protein: protein,
        sodium: sodium,
        saturated_fats: saturatedFats || 0.0,
        saturated_fats_and_lipids: saturatedFatsAndLipids || 0.0,
        sugars: sugars,
      };
      // Set form data on App.js before submit
      setFormData(formData);
      // Remove category since it is not needed for the API
      delete formData[category];
      // Fetch Calculate API
      fetch(
        `${baseApiUrl}calculate?q=${JSON.stringify(
          formData
        )}&similar_products=True`
      )
        .then((res) => res.json())
        .then((res) => setApiResult(res));
    }
    return;
  };

  // Reset button
  const onReset = async () => {
    setEnergy('');
    setFibre('');
    setFruitAndVegetables('');
    setIsWater(false);
    setProtein('');
    setSodium('');
    setSaturatedFats('');
    setSaturatedFatsAndLipids('');
    setSugars('');
    // Reset data on App.js component
    setFormData(null);
    setApiResult(null);
  };

  // Seed button
  const onSeed = async () => {
    setGroup('en:fish-and-seafood');
    setCategory('others');
    setEnergy(330);
    setFibre(10);
    setFruitAndVegetables(23);
    setIsWater(false);
    setProtein(34);
    setSodium(7);
    setSaturatedFats(29);
    setSaturatedFatsAndLipids(27);
    setSugars(6);
  };

  return (
    <NutriCard>
      <Grid container spacing={2}>
        {/* Category */}
        <Grid item xs={9} sm={7} md={5} lg={4}>
          <Typography sx={{ mb: 1.5 }} variant="h5">
            Grupo
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="select-group">Selecciona un grupo</InputLabel>
            <Select
              id="category"
              label="Selecciona un grupo"
              onChange={(e) => {
                setGroup(e.target.value);
                setCategory(nsGroups(e.target.value)['category']);
              }}
              value={group}
            >
              {generateGroups()}
            </Select>
          </FormControl>
        </Grid>
        {/* Points A */}
        <Grid item xs={12}>
          <Typography variant="h5">Puntos A</Typography>
          <TextField
            id="energy"
            InputProps={{
              endAdornment: <InputAdornment position="end">KJ</InputAdornment>,
              inputMode: 'numeric',
              pattern: '[0-9]*',
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
            id="sugars"
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
              inputMode: 'numeric',
              pattern: '[0-9]*',
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
              id="saturatedFats"
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
                inputMode: 'numeric',
                pattern: '[0-9]*',
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
              id="saturatedFatsAndLipids"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
              label="Grasas saturadas y lípidos"
              margin="normal"
              onChange={(e) => setSaturatedFatsAndLipids(e.target.value)}
              required={false}
              sx={{ minWidth: '250px', pr: 2 }}
              type="number"
              value={saturatedFatsAndLipids}
              variant="outlined"
            />
          ) : null}
          <TextField
            id="sodium"
            InputProps={{
              endAdornment: <InputAdornment position="end">mg</InputAdornment>,
              inputMode: 'numeric',
              pattern: '[0-9]*',
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
            id="fruitAndVegetables"
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
              inputMode: 'numeric',
              pattern: '[0-9]*',
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
            id="fibre"
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
              inputMode: 'numeric',
              pattern: '[0-9]*',
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
            id="protein"
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
              inputMode: 'numeric',
              pattern: '[0-9]*',
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
        <Grid item xs={12}>
          <Stack spacing={2} direction="row" sx={{ float: 'right' }}>
            <Button onClick={onSeed} variant="outlined">
              🍀 Seed
            </Button>
            <Button onClick={onReset} variant="outlined">
              Reset
            </Button>
            <SubmitButton />
          </Stack>
        </Grid>
      </Grid>
    </NutriCard>
  );
};

export default Form;
