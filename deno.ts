Deno.serve({
    port: 3000,
  }, (_) => new Response("Hello world!"));