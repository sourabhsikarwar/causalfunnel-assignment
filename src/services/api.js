export const fetchData = async () => {
  let res = await fetch(
    `https://opentdb.com/api.php?amount=15`
  );
  return res.json();
};
