export const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const nutriScoreSorting = (ns1, ns2) => {
  return !!ns1 && !!ns2 ? ns1.toUpperCase() - ns2.toUpperCase() : null;
};
