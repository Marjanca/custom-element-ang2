const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/test-custom-elements/runtime.js',
    './dist/test-custom-elements/polyfills.js',
    './dist/test-custom-elements/scripts.js',
    './dist/test-custom-elements/main.js',
  ]
  await fs.ensureDir('test-custom-elements')
  await concat(files, 'test-custom-elements/elements.js');
  await fs.copyFile('./dist/test-custom-elements/styles.css', 'test-custom-elements/styles.css')
  await fs.copy('./dist/test-custom-elements/assets/', 'test-custom-elements/assets/' )

})()