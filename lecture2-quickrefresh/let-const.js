const name = "Sumon";
let age = 26;
var hasPhone = true;
age = 30;

function userDetails(userName,userAge,userHasPhone) {
    return(
        'My name is '+userName+ 
        ' Age is '+userAge+ 
        ' Phone is available or not ? '+userHasPhone
    );
}
console.log(userDetails(name,age,hasPhone));