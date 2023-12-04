

export function manufacture(gifts, materials) {
    const splittedMaterial = new String(materials).split("")
    const validGifts = []
    gifts.map((gift)=>{
        if(new String(gift).split("").every((letter)=>splittedMaterial.includes(letter)))
            validGifts.push(gift)
    })
    return validGifts
}