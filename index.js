function introduction(fname) {
    return `Hi, my name is ${fname}.`;
}
console.log(introduction("Aki"))

function introductionWithLanguage(fname, language) { 
    return `Hi, my name is ${fname} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguage(Aki, Ember.js))

function introductionWithLanguageOptional(fname, language = "JavaScript") {
return `Hi, my name is ${fname} and I am learning to program in ${language}.`

}

