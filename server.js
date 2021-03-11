const express = require("express");
const app = express();
const PORT = 8080;
const transactions = require("./transactions.json");

const BASE_EUR_RATES = {
  BTC: 45000,
  CHF: 0.9,
  USD: 0.84
};

const generateRate = baseRate => Math.random() < 0.5 ? (Math.random() * (1.1 - 0.9) + 0.9) * baseRate : null;

const generateRates = () => ({
  BTC: generateRate(BASE_EUR_RATES.BTC),
  CHF: generateRate(BASE_EUR_RATES.CHF),
  USD: generateRate(BASE_EUR_RATES.USD),
});

app.get("/transactions", (_, res) => res.send(transactions));

app.get("/eur-rates", (_, res) => res.send(generateRates()));

app.listen(PORT, () => console.log(`mock transactions HTTP API server running at http://localhost:${PORT}`));
