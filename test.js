var tester = require('gitbook-tester')
tester
  .builder()
  .withContent('Test baidu and google')
  .withBookJson({ plugins: ['siteVerification'] })
  .withBookJson({ pluginsConfig: { siteVerification: { baidu: '222' } } })
  .create()
  .then(function(result) {
    console.log(result[0].content)
  })
