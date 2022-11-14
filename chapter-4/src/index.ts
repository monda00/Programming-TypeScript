function add(a: number, b: number): number {
  return a + b
}

function gree(name: string) {
  return 'hello' + name
}

let greet2 = function (name: string) {
  return 'hello' + name
}

let greet3 = (name: string) => {
  return 'hello' + name
}

let green4 = (name: string) =>
  'hello' + name


// rest parameter
function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

// call signature (type signature)
type Greet = (name: string) => string
type SumVariadicSafe = (...numbers: number[]) => number

// generic
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}
