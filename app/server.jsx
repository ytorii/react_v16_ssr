import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import { renderToNodeStream } from 'react-dom/server';
import App from 'App';

function renderFullPage(renderedContent) {
  return `
  <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <title>React SSR v16</title>
    </head>

    <body>
    <div id="app">${renderedContent}</div>

    <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
    </body>
    </html>

  `;
}

export default function render(req, res) {
  res.write("<!DOCTYPE html><html>");
  res.write("<head><title>React SSR v16</title><meta charset='utf-8'></head><body>");
  res.write("<div id='app'>"); 
//res.write(renderToString(<App/>));

  const stream = renderToNodeStream(<App/>);
  stream.pipe(res, { end: false });
  stream.on('end', () => {


    res.write("</div>");
    res.write("<script type='text/javascript' charset='utf-8' src='/assets/app.js'></script>");
    res.write("</body></html>");
    res.end();

  });

};
