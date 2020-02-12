'use strict';

const path = require('path');
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');
const myCustomisedTheme = mandelbrot({
    "skin": "black",
    "nav": ["docs", "components"]//show docs before patterns in nav
});

fractal.set('project.title', 'MegaFood Pattern Library');

fractal.components.set('label', 'Patterns');

fractal.components.set('path', path.join(__dirname, 'pattern-library/patterns'));

fractal.docs.set('path', path.join(__dirname, 'pattern-library/docs'));

fractal.web.set('static.path', path.join(__dirname, 'pattern-library/public'));

fractal.components.set('default.preview', '@preview');

fractal.components.set('default.display', {
    'max-width': '90rem',
    'margin': '0 auto'
});

fractal.set('project.author', 'Nicki Rios');

fractal.components.set('default.status', 'wip');

fractal.components.set('statuses', {
    wip: {
        label: "WIP",
        description: "Currently being built.",
        color: "#9b2242"
    },
    done: {
        label: "Done",
        description: "Ready to be used in production.",
        color: "#2a5236"
    }
});

fractal.web.theme(myCustomisedTheme);

fractal.web.set('server.sync', true);

fractal.web.set('server.watch', true);

fractal.web.set('server.syncOptions', {
    open: true,
    browser: ['google chrome'],
    notify: true
});

fractal.web.set('builder.dest', __dirname + '/dist');

