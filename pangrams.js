function pangrams(s){
    let lowerCase = s.toLowerCase();
    let lowerSet = new Set;

    for(let char of lowerCase){
        if(char >= 'a' && char <= 'z'){
            lowerSet.add(char)
        }
    }
    return lowerSet.size === 26 ? "pangrams" : "not pangrams"
}

console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
console.log(pangrams("We promptly judged antique ivory buckles for the prize"));