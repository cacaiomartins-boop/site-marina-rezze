import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export { clinic } from "./data/clinic";
export { buildJsonLd } from "./seo";

// Usado só no build: gera o HTML da página para robôs e para o primeiro carregamento.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
