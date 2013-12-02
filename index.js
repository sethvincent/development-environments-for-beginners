var ReadmeBuilder = require('manuscript-builder');

var readme = new ReadmeBuilder({
  target: '/book.md',
  bookDir: '/manuscript/',
  tableOfContents: '/manuscript/Book.txt'
});

readme.build();