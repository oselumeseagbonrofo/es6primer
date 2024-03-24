var logger = output => {
    console.log(output)
};

export const add_num = (a,b) => {
    return a+b;
};

export const name = 'ES6 review'
export const dummyfunction = () => {
    return 'This is a dummy function';
}

export const genericFunction = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    let [firstLang, secondLang, ...otherLanguages] = languages; //otherLanguages will be equal to ['Java', 'C#', 'C++']
    //return `First language is ${firstLang} and the second is ${secondLang}. The others are ${otherLanguages}`
    return console.log(languages)
}

export const nameFunction = () => {
   let personalInformation  = {
        firstName: "Oselumese",
        lastName: "Agbonrofo",
        gender : 'Male',
        religion : 'Christianity (Catholic)',
        fathersName : 'John',
        mothersName : 'Patricia'
    }
    //deconstruct into new variables firstName, last name and otherPersonalInfo
    let {firstName, gender, ...otherPersonalInfo} = personalInformation;
    return `The first name is ${firstName} and the lastName is ${otherPersonalInfo.lastName}. Others are: gender = 
    ${gender}; religion = ${otherPersonalInfo.religion}; etc.`;
}

export default logger;

