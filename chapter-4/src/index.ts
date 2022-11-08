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
