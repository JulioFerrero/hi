import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>@hi/editor</title>
      </head>
      <body class="overflow-hidden">
        <div class="isolate">
          <Component />
        </div>
      </body>
    </html>
  );
});
