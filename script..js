// {1,2,3,4}

// "ref"

// (0): {[1,2,3] => true}
// (1): {[1,2,3] => false}

const hasDuplicate = newArray => new Set(newArray).size !== newArray.length

function vowelCheck(char){
    return "aeiou".includes(char);
}
function vowelCount(word){
    let m = new Map();
    for(let char of str){
        let lower = char.toLowerCase();
        if(isVowel(lower)){
            if(m.has(lower)){
                m.set(lower, m.get(lower) + 1);
            } else {
                m.set(lower, 1);
            }
        }
    }
    return m;
}
