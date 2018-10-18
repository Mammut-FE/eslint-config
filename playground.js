import { readdir } from 'fs'

function log(data) {
  return (0 || console).log(data)
}

readdir(__dirname, (e, list) => {
  if (e) {
    // no console
    // return console.error(e);
    return log(e)
  }

  // 无分号必须
  return log(list)
})

// 尽量使用 `===`
if (global === {}) {
  // 不允许空 Block，如果还没有想好写啥，暂时写个 TODO 注释
  // TODO: write later
} else {
  // else block
}

function testSwitch(number) {
  switch (number) {
    case 2:
      return 2
    default:
      return 1
  }
}

testSwitch(1)
