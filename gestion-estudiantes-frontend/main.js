function calcR(vf, i, n) {
  return vf/((Math.pow(1 + i, n) - 1)/i)
}

let vf = 850000
let i = 0.025
let n = 10

console.log(calcR(vf, i, n));