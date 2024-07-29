# Redis Slow Command Simulation

This project demonstrates how to simulate slow commands in Redis using Node.js and Lua scripts. This can be useful for testing timeout behaviors and handling slow operations in Redis.

## Overview

The project includes three different Lua scripts to introduce delays in Redis commands:

- `pttl-delay.lua`: Introduces a delay based on the `PTTL` command.
- `time-delay.lua`: Introduces a delay based on the `TIME` command.
- `exists-delay.lua`: Introduces a delay based on the `EXISTS` command.

## Prerequisites

- Node.js
- Redis
- ioredis (Node.js Redis client)

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/0xahmedk/redis-delay-simulation.git
   cd redis-delay-simulation
   ```

2. Install the necessary dependencies:

   ```sh
   npm install
   ```

3. Ensure Redis is running on your local machine or configure the Redis client to connect to your Redis server.

## Lua Scripts

### `pttl-delay.lua`
