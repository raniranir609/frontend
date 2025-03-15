var employee1 = {firstname: "jhon",lastname: "smith"};
var employee2 = {firstname: "smily",lastname: "nani"};


function invite(greeting1,greeting2) {
    console.log(
        greeting1+ " "+ this.firstname + " "+ this.lastname +" ,"+greeting2
    );
}
 invite.call(employee1,"Hello", "How are you"); 
 invite.call(employee2,"Hello", "How are you");
 