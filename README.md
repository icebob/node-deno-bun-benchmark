# Node vs Deno vs Bun benchmark

- Node 18.16.0
- Deno 1.36.4
- Bun 1.0.2


## Fastify HTTP server

```bash
node fastify.mjs
deno run fastify.mjs
bun run ./fastify.mjs
```

### 100 concurrent threads
- Node: `55.379 req/s`
- Deno: `41.266 req/s`
- Bun: `36.540 req/s`

## Express HTTP server

```bash
node express.mjs
deno run express.mjs
bun run ./express.mjs
```

### 100 concurrent threads
- Node: `16.124 req/s`
- Deno: `21.083 req/s`
- Bun: `24.082 req/s`

## Native HTTP server

```bash
node node.mjs
deno run deno.ts
bun run ./bun.ts
```

### 100 concurrent threads
- Node: `61.364 req/s`
- Deno: `78.597 req/s`
- Bun: `57.048 req/s`


![chart](https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7B%20%22type%22%3A%20%22bar%22%2C%20%22data%22%3A%20%7B%20%22labels%22%3A%20%5B%20%22Node%22%2C%20%22Deno%22%2C%20%22Bun%22%20%5D%2C%20%22datasets%22%3A%20%5B%20%7B%20%22label%22%3A%20%22Fastify%22%2C%20%22backgroundColor%22%3A%20%22rgba%28255%2C%2099%2C%20132%2C%200.5%29%22%2C%20%22borderColor%22%3A%20%22rgb%28255%2C%2099%2C%20132%29%22%2C%20%22borderWidth%22%3A%201%2C%20%22data%22%3A%20%5B%2055379%2C%2041266%2C%2036540%20%5D%20%7D%2C%20%7B%20%22label%22%3A%20%22Express%22%2C%20%22backgroundColor%22%3A%20%22rgba%2854%2C%20162%2C%20235%2C%200.5%29%22%2C%20%22borderColor%22%3A%20%22rgb%2854%2C%20162%2C%20235%29%22%2C%20%22borderWidth%22%3A%201%2C%20%22data%22%3A%20%5B%2016124%2C%2021083%2C%2024082%20%5D%20%7D%2C%20%7B%20%22label%22%3A%20%22Native%22%2C%20%22backgroundColor%22%3A%20%22rgba%2854%2C%20162%2C%2035%2C%200.5%29%22%2C%20%22borderColor%22%3A%20%22rgb%2854%2C%20162%2C%2035%29%22%2C%20%22borderWidth%22%3A%201%2C%20%22data%22%3A%20%5B%2061364%2C%2078597%2C%2057048%20%5D%20%7D%20%5D%20%7D%2C%20%22options%22%3A%20%7B%20%22responsive%22%3A%20true%2C%20%22legend%22%3A%20%7B%20%22position%22%3A%20%22top%22%20%7D%2C%20%22title%22%3A%20%7B%20%22display%22%3A%20true%2C%20%22text%22%3A%20%22HTTP%20requests%20%2F%20sec%22%20%7D%20%7D%20%7D)
<!-- Bar data:
{ "type": "bar", "data": { "labels": [ "Node", "Deno", "Bun" ], "datasets": [ { "label": "Fastify", "backgroundColor": "rgba(255, 99, 132, 0.5)", "borderColor": "rgb(255, 99, 132)", "borderWidth": 1, "data": [ 55379, 41266, 36540 ] }, { "label": "Express", "backgroundColor": "rgba(54, 162, 235, 0.5)", "borderColor": "rgb(54, 162, 235)", "borderWidth": 1, "data": [ 16124, 21083, 24082 ] }, { "label": "Native", "backgroundColor": "rgba(54, 162, 35, 0.5)", "borderColor": "rgb(54, 162, 35)", "borderWidth": 1, "data": [ 61364, 78597, 57048 ] } ] }, "options": { "responsive": true, "legend": { "position": "top" }, "title": { "display": true, "text": "HTTP requests / sec" } } } -->

# Credits
This repo is created based on [this article](https://medium.com/deno-the-complete-reference/node-js-vs-deno-vs-bun-fastify-hello-world-server-benchmarking-d08101457f99).