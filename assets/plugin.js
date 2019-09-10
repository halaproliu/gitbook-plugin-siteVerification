require(['gitbook'], function(gitbook) {
  function addMeta(type, siteId) {
    var meta = document.createElement('meta')
    meta.setAttribute('name', type + '-site-verification')
    meta.setAttribute('content', siteId)
    var m = document.getElementsByTagName('meta')[0]
    m.parentNode.insertBefore(meta, m)
  }
  gitbook.events.bind('start', function(e, config) {
    var pluginConfig = config.siteVerification
    if (pluginConfig.baidu) {
      addMeta('baidu', pluginConfig.baidu)
    }
    if (pluginConfig.google) {
      addMeta('google', pluginConfig.google)
    }
  })
})
