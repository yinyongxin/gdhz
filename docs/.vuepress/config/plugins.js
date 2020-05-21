const moment = require('moment')
moment.locale('zh-cn')

module.exports = [
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp) => {
        return moment(timestamp).format('LLLL')
      }
    }
  ]
]