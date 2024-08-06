// let buf=Buffer.from([105,111,121,101,117,114])
// console.log(buf.toString())
// let buf2=Buffer.from("mugi")
// buf[0]=95
// console.log(buf2[0].toString(2))

//overflow
let buf=Buffer.from('mugi')
buf[0]=361//0001 0110 1001 保留8bit
console.log(buf.toString())