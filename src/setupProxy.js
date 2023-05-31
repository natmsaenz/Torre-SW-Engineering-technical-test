import { createProxyMiddleware } from "http-proxy-middleware";
import React from "react"; // eslint-disable-line no-unused-vars
export function middlewareProxy (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://cors-anywhere.herokuapp.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
}

