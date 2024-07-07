"use server";

async function countriesList() {
  const apiUrl = "https://restcountries.com/v3.1/all";

  fetch(apiUrl).then((res) => {
    console.log(res);
  });

  return "list";
}
