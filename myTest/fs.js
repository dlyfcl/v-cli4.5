let fs = require('fs');
fs.readFile('ts/helloWorld.md', 'utf-8' ,function (error, data) {
  if (error) {
    console.log('读取文件失败了')
  } else {
    console.log(data)
  }
})