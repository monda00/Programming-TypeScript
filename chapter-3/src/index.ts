// any
let a_any: any = 666
let b_any: any = ['danger']
let c_any = a_any + b_any

// unknown
let a_unknown: unknown = 30
let b_unknown = a_unknown === 123
//let c_unknown = a_unknown + 10
if (typeof a_unknown === 'number') {
  let d_unknown = a_unknown + 10
}

// boolean
let a_b = true
let b_b = false
const c_b = true
let d_b: boolean = true
let e_b: true = true
//let f_b: true = false

// number
let a_n = 123
let b_n = Infinity * 0.10
const c_n = 5678
let d_n = a_n < b_n
let e_n: number = 100
let f_n: 26.218 = 26.218
//let g_n: 26.218 = 10

// bigint
let a_bi = 1234n
const b_bi = 56789n
var c_bi = a_bi + b_bi
let d_bi = a_bi < 1234
//let e_bi = 88.5n
let f_bi: bigint = 100n
let g_bi: 100n = 100n
//let h_bi: bigint = 100

// string
let a_st = 'hello'
var b_st = 'billy'
const c_st = '!'
let d_st = a_st + ' ' + b_st + c_st
let e_st: string = 'zoom'
let f_st: 'john' = 'john'

// symbol
let a_sy = Symbol('a')
let b_sy: symbol = Symbol('b')
var c_sy = a_sy === b_sy

// object
let a_obj1: object = {
  b: 'x'
}
let a_obj2 = {
  b: 'x'
}
let b_obj = {
  c: {
    d: 'f'
  }
}
let c_obj: {
  firstName: string
  lastName: string
} = {
  firstName: 'john',
  lastName: 'barrowman'
}
let a_obj3: {
  b: number
  c?: string
  [key: number]: boolean
}
a_obj3 = { b: 1 }
a_obj3 = { b: 1, c: undefined }
a_obj3 = { b: 1, c: 'd' }
a_obj3 = { b: 1, 10: true }
a_obj3 = { b: 1, 10: true, 20: false }

// type alias
type Age = number

// union & intersection
type Cat = { name: string, purrs: boolean }
type Dog = { name: string, barks: boolean, wags: boolean }
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog
let a_cat: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true
}
let a_dog = {
  name: 'Domino',
  barks: true,
  wags: true
}
let a_cat_dog = {
  name: 'Donkers',
  barks: true,
  purrs: true,
  wags: true
}

// array
let a_arr = [1, 2, 3]
var b_arr = ['a', 'b']
let c_arr: string[] = ['a']

let f_arr = ['red']
f_arr.push('blue')
let g_arr = []
g_arr.push(1)
g_arr.push('red')

// tuple
let a_tup: [number] = [1]
let b_tup: [string, string, number] = ['malcolm', 'gladwell', 1963]
let frineds: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']

// enum
enum Language {
  English,
  Spanish,
  Japanese
}
enum Language_2 {
  English = 0,
  Spanish = 1,
  Japanes = 2
}
