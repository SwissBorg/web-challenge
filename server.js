const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJson = require("./swagger.json");
const transactions = require("./transactions.json");
const app = express();
const PORT = 8080;

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

const BASE_EUR_RATES = {
  BTC: 94000,
  CHF: 1.05,
  USD: 0.93,
};

const generateRate = (baseRate) =>
  Math.random() < 0.5 ? (Math.random() * (1.1 - 0.9) + 0.9) * baseRate : null;

const generateRates = () => ({
  BTC: generateRate(BASE_EUR_RATES.BTC),
  CHF: generateRate(BASE_EUR_RATES.CHF),
  USD: generateRate(BASE_EUR_RATES.USD),
});

app.get("/api/transactions", (_, res) => res.send(transactions));

app.get("/api/eur-rates", (_, res) => res.send(generateRates()));

app.listen(PORT, () =>
  console.log(
    `mock transactions HTTP API server running at http://localhost:${PORT}`
  )
);
