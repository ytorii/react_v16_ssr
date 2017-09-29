import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import { renderToNodeStream } from 'react-dom/server';
import App from 'App';
import fs from 'fs';

function renderFullPage(renderedContent, items) {
  const appProps = JSON.stringify(items);
  return `
  <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <title>React Server Rendering sample</title>
    </head>

    <body>
    <script> var APP_PROPS = ${appProps}; </script>
    <div id="app">${renderedContent}</div>

    <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
    </body>
    </html>

  `;
}

export default function render(req, res) {
  //const text = fs.createReadStream('./big.file');
  fs.readFile('./big.file', (err, data) => {
    res.write("<!DOCTYPE html><html><head><title>My Page</title><meta charset='utf-8'></head><body>");
    res.write("<div id='app'>"); 
    const stream = renderToNodeStream(<App text={data}/>);
    stream.pipe(res, { end: false });
    stream.on('end', () => {
      res.write("<script type='text/javascript' charset='utf-8' src='/assets/app.js'></script>");
      res.write("</div></body></html>");
      res.end();
    });
  });
};
