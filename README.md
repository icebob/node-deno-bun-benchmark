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