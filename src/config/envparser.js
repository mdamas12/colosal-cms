/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const DotEnv = require('dotenv')
const parsedEnv = DotEnv.config().parsed
module.exports = function () {
  // Let's stringify our variables
  // eslint-disable-next-line no-undef
  for (key in parsedEnv) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (typeof parsedEnv[key] === 'string') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      parsedEnv[key] = JSON.stringify(parsedEnv[key])
    }
  }
  return parsedEnv
}
