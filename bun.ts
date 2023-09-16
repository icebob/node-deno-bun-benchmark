Bun.serve({
    port: 3000,
    fetch(_) {
      return new Response("Hello world!");
    },
  });