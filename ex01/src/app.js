import express from 'express';

const app = express();
const port = 5000;

const forecast = [
  { day: 1, temperature: "32 °C", wind: "8 km/h", views: 0 },
  { day: 2, temperature: "27 °C", wind: "9 km/h", views: 0 },
  { day: 3, temperature: "30 °C", wind: "8 km/h", views: 0 },
  { day: 4, temperature: "32 °C", wind: "7 km/h", views: 0 },
  { day: 5, temperature: "31 °C", wind: "8 km/h", views: 0 },
  { day: 6, temperature: "26 °C", wind: "10 km/h", views: 0 },
  { day: 7, temperature: "27 °C", wind: "9 km/h", views: 0 }
];

app.get('/forecast', (req, res) => {
  forecast.forEach(weather => weather.views++);
  res.send(forecast);
})

app.get("/forecast/:day", (req, res) => {
  const day = req.params.day;
  const dayForecast = forecast.find((weather) => weather.day === Number(day));
  dayForecast.views++;
  res.send(dayForecast);
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
