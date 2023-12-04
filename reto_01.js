const giftEmpty = []
const giftWithTwo = [2,2]
const giftWithoutRepeat = [1,2,3,4,5]
const giftIds = [2,1, 3, 5, 3, 2]
const giftIds2 = [5, 1, 5, 1]

function findFirstRepeated(gifts) {
    if(gifts.length == 0) return -1
    else {
        const repeated = new Map()
        new Set(gifts).forEach((id)=>{
            if(gifts.filter((el)=>el==id).length>1){
                const firtOcurrence = gifts.indexOf(id); 
                repeated.set(id,gifts.indexOf(id,firtOcurrence+1))
            }
        })
        if(repeated.size == 0) return-1 
        else return gifts[Math.min(...repeated.values())]
    }  
}
  
console.log(findFirstRepeated(giftEmpty))
console.log(findFirstRepeated(giftWithTwo))
console.log(findFirstRepeated(giftWithoutRepeat))
console.log(findFirstRepeated(giftIds))
console.log(findFirstRepeated(giftIds2))