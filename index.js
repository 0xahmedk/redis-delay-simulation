const express = require("express");
const Redis = require("ioredis");
const app = express();
const port = 3000;
const fs = require("fs");

const redis = new Redis({
  host: "localhost",
  port: 6379,
});

const waitLua = fs.readFileSync("./time-delay.lua");

redis.options.commandTimeout = 2000;

async function testDelay() {
  try {
    const result = await redis.eval(waitLua, 0, 3000);
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    redis.disconnect();
  }
}

app.get("/evaluate", (req, res) => {
  testDelay();
  res.send("value set!");
});

app.get("/get", (req, res) => {
  redis.get("mykey", (err, result) => {
    if (err) {
      console.error(err);
      res.send("Error getting value");
    } else {
      console.log(result);
      res.send(`Value ${result}`);
    }
  });
});

app.get("/", (req, res) => {
  res.send("PONGGG!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
