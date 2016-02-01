exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['features.js'],
  capabilities: {
    browserName: 'chrome'
  }
}
