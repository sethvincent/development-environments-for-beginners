var ReadmeBuilder = require('manuscript-builder');

var readme = new ReadmeBuilder({
  target: '/readme.md',
  include: ['preface.md'],
  bookDir: '/manuscript/',
  tableOfContents: '/manuscript/Book.txt'
});

readme.build();