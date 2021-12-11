import React, { useState, useEffect } from "react";

const IndexPage = () => {
  const [data, setData] = useState(null);

  const fetchAPI = () => {
    fetch(
      "https://nutri-score-auditor-api.ew.r.appspot.com/calculate?q={%22category%22%20:%20%22others%22,%20%22energy%22%20:%20356.0,%20%22fibre%22%20:%200.0,%20%22fruit_and_vegetables%22%20:%200.0,%20%22is_water%22%20:%20%22False%22,%20%22protein%22%20:%2016.0,%20%22sodium%22%20:%20920.0,%20%22saturated_fats%22%20:%200.0,%20%22saturated_fats_and_lipids%22%20:%200.3,%20%22sugars%22%20:%203.0}"
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  return (
    <div>
      <button onClick={() => fetchAPI()}>Nutri-Score API</button>
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
