export function findNaughtyStep(original, modified) {
    if (original.length === modified.length) return "";
   
    const [shorterStr, longerStr] = [original, modified].sort((originalArr, modifiedArr) => originalArr.length - modifiedArr.length);

    return [...longerStr].find((letter, index) => {
       return [...shorterStr][index] !== letter;
    });
}
