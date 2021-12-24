import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const App = () => {
  // URLs
  const baseApiUrl = `https://nutri-score-app-api.ew.r.appspot.com/`;
  // Categories
  const [category, setCategory] = 'others';
  // Points A
  const [energy, setEnergy] = 356;
  const [sugars, setSugars] = 3.0;
  const [saturatedFats, setSaturatedFats] = 0;
  const [saturatedFatsAndLipids, setSaturatedFatsAndLipids] = 0;
  const [sodium, setSodium] = 920;
  // Points C
  const [fruitAndVegetables, setFruitAndVegetables] = 0;
  const [fibre, setFibre] = 0;
  const [protein, setProtein] = 16;
  const [isWater, setIsWater] = false;

  return (
    <div>
      <Box>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      <h2>Categoría</h2>

      <h2>Puntos A</h2>
    </div>
  );
};

export default App;

/* import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';

const IndexPage = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <Formik
        initialValues={{

        }}
        onSubmit={async (values) => {
          const foodData = {
            category: `${values.category}`,
            energy: values.energy,
            fibre: values.fibre,
            fruit_and_vegetables: values.fruitAndVegetables,
            is_water: `${values.isWater}`,
            protein: values.protein,
            sodium: values.sodium,
            saturated_fats: values.saturatedFats,
            saturated_fats_and_lipids: values.saturatedFatsAndLipids,
            sugars: values.sugars,
          };

          fetch(`${baseUrl}calculate?q=${JSON.stringify(foodData)}`)
            .then((res) => res.json())
            .then((res) => setData(res));
        }}
      >
        <Form>
          <label htmlFor="category">Categoría</label>
          <Field id="category" name="category" as="select">
            <option value="queso">Queso</option>
            <option value="bebidas">Bebidas</option>
            <option value="grasas">Grasas, aceites, o mantequillas</option>
            <option value="otros">Otros</option>
          </Field>



          <label htmlFor="energy">Energía (KJ)</label>
          <Field id="energy" name="energy" placeholder="0.0" type="number" />

          <label htmlFor="sugars">Azúcares (g)</label>
          <Field id="sugars" name="sugars" placeholder="0,0" type="number" />

          <label htmlFor="saturatedFats">Grasas saturadas (g)</label>
          <Field
            id="saturatedFats"
            name="saturatedFats"
            placeholder="0,0"
            type="number"
          />

          <label htmlFor="sodium">Sodio (mg)</label>
          <Field id="sodium" name="sodium" placeholder="0,0" type="number" />

          <h2>Puntos C</h2>

          <label htmlFor="fruitAndVegetables">Frutas y vegetales (%)</label>
          <Field
            id="fruitAndVegetables"
            name="fruitAndVegetables"
            placeholder="0.0"
            type="number"
          />

          <label htmlFor="fibre">Fibra (g)</label>
          <Field id="fibre" name="fibre" placeholder="0,0" type="number" />

          <label htmlFor="protein">Proteínas (g)</label>
          <Field id="protein" name="protein" placeholder="0,0" type="number" />

          <button type="submit">Calcular Nutri-score</button>
        </Form>
      </Formik>

      <h2>Resultado</h2>

      <li>Final score: {data ? data.final_score : null}</li>
      <li>Nutri score: {data ? data.nutri_score : null}</li>
      <li>Points A:</li>
      <ul>
        <li>A: {data ? data.points_a.a : null}</li>
        <li>B: {data ? data.points_a.b : null}</li>
        <li>C:{data ? data.points_a.c : null}</li>
        <li>D:{data ? data.points_a.d : null}</li>
      </ul>
      <li>Points C:</li>
      <ul>
        <li>A:{data ? data.points_c.a : null}</li>
        <li>B:{data ? data.points_c.b : null}</li>
        <li>C:{data ? data.points_c.c : null}</li>
      </ul>
    </div>
  );
};

export default IndexPage;

*/
