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
