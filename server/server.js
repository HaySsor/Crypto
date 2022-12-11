const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.get("/coin-data", (req, res) => {
    axios
        .get(
            "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5",
            {
                headers: {
                    "X-CMC_PRO_API_KEY": "2b24379e-c7ad-474e-8c7b-25acc5f4766f",
                },
            }
        )
        .then((response) => res.json(response.data))
        .catch((error) => res.sendStatus(500));
});
app.get("/info", (req, res) => {
    axios
        .get(
            "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=1,1027,825,1839,3408",
            {
                headers: {
                    "X-CMC_PRO_API_KEY": "2b24379e-c7ad-474e-8c7b-25acc5f4766f",
                },
            }
        )
        .then((response) => res.json(response.data))
        .catch((error) => res.sendStatus(500));
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
