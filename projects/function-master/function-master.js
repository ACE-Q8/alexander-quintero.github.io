//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function objectValues(object) {
    //Create output array
    let arrayOutput = [];
    //Itertate through and push each value to output
    for (var key in object){
    arrayOutput.push(object[key])
    }
    //return output
    return arrayOutput
    };

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////


    function keysToString(object) {
        let outputArray = [];
        
        for (var key in object) {
        outputArray.push(key)
        }
        
        let returnArray = outputArray.join(' ');
        
        return returnArray;
        
        } 


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let outputArray = [];
    
    for (var key in object){
        if (typeof object[key] === "string"){
            outputArray.push(object[key]);
    }

    }
    let returnArray = outputArray.join(' ')
    return returnArray;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return "array";
    } else if (typeof collection === 'object' &&
    collection !== null && !(collection instanceof Date)){
        return "object";
    
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let stringToUpperCase = string.charAt(0).toUpperCase() + string.slice(1);
   return stringToUpperCase;
 }
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var split = string.split(" ");
    for (var i = 0; i < split.length; i++) {
        split[i] = split[i][0].toUpperCase() + split[i].substr(1);
    var splitJoin = split.join(" ");
    }
    return splitJoin;
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
if (object.name){
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
} 
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
if (object.name){
    if (object.species){
 let upperCase = object.name.charAt(0).toUpperCase() + object.name.slice(1);
 let speciesUppercase = object.species.charAt(0).toUpperCase() + object.species.slice(1);
 return upperCase + " is a " + speciesUppercase;        
}       
    }   
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
var arr;
for (let i in object){
if (object.noises.length > 0){
    arr = object.noises;
    return arr.join(" ");
}
}
return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if(string.includes(word)){
    return true;
} else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
if(object.friends){
    object.friends.push(name);
    return object;
}
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    for (let i in object)
    if (object.friends.includes(name)){
    return true;
} else if (!object.friends.name){
    return false;  
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array){
    var nameList = [];
    var result = [];
    var current = null;
    for(var i=0; i<array.length; i++){
        if(name === array[i].name){
            current = array[i];
        }else{
            nameList.push(array[i].name);
        }
    }

    if(current === null){
        return nameList;
    }

    for(var i=0; i<nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }

    return result;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
if (!object[key]){
    object[key] = value;
    return object;
} else if (object[key]){
    object[key] = value;
    return object;
}
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (let keys in object){
        if (object.keys === array){
            delete object.keys;
        }
 }
 return object;
}




//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}