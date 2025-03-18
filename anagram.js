// check anagram : hello --> oellh
// Must be same length both string and exist same character but different position


function isAnagram(string1,string2) {
    
    if(string1.length != string2.length) {
        console.log("String not a anagram");
        return false;
    }

    let counter = {};
    for(let letter of string1) {
        
        counter[letter] = (counter[letter] || 0) + 1;

    }

    for(let item of string2) {

        if(!counter[item]) {
            console.log("Strings are not a anagram");
            return false;
        }

        counter[item]-=1;
    }

    console.log("Strings are anagram");
    return true;

}

isAnagram("hello","oehll");