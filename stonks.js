let stonks = require("./stonkValues")
stonks = stonks.map(s => ({ sum: s.return+s.cost, ...s }))

const totalStonks = stonks.reduce((a, b) => a + b.sum, 0)
stonks = stonks.map(s => ({ fill: (s.sum/totalStonks)*100, ...s }))
console.log(stonks.map(s => [s.name, s.fill]))