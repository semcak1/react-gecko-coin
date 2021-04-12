


export const Observer =()=>{
//  let randomNumber=Math.random()*10
//  return randomNumber
let number=0
const passingTime=1000
let signalList=[]
let timerId = setInterval(() => {
  number=number+1
  signalList=[...signalList,randomNumberGenerator()]
  // console.log("Signal List",signalList)
  console.log(keepLastThreeSignal(number,signalList)) 
  console.log("merhaba",number)}, passingTime*2);
// 5 saniye sonunda durdur.
setTimeout(() => { clearInterval(timerId); console.log("Durdu",timerId) }, passingTime*10)


console.log("timerId",timerId)

}

export const randomNumberGenerator=()=>{
  let randomNumber= Math.random()*10
  return randomNumber
}


const keepLastThreeSignal=(signal,signalList)=>{
 let List=signalList
let length = signalList.length
 List = [...signalList,signal]

return List
// if (signalList.length<=3){
//   console.log([...signalList,...signal]) 
// }
// else {
// console.log( [...signalList,...signal].slice(length-3,length))
}



