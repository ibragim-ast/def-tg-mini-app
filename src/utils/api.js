export default async function fetchApiData() {
  try {
    const res = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    const data = await res.json();
    return { USD: data.Valute.USD.Value };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
