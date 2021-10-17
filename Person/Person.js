class Person{

    constructor(personName, age, gender, interests = [])
    {
        this.name = personName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    hello()
    {
        let message = '';
        

        if(this.interests.length > 1){
            let arrToString = this.interests.slice(0, -1).join(', ');
            const lastElement =  this.interests[this.interests.length - 1];
            
            message = 'Hello, my name is ' + this.name + ', my gender is ' + this.gender + ' and I am ' + this.age + ' years old.' + ' My interests are ' + arrToString + ' and ' + lastElement + '.';
        }
        else if(this.interests.length === 1){
            message = 'Hello, my name is ' + this.name + ', my gender is ' + this.gender + ' and I am ' + this.age + ' years old.' + ' My interest is ' + this.interests + '.'; 
        }
        else{
            message = 'Hello, my name is ' + this.name + ', my gender is ' + this.gender + ' and I am ' + this.age + ' years old.' + 'I have no interests';
        }


        return message;
    }

    
}

let person = new Person('Valentine', 28, 'male', ['cooking', 'running', 'coding']);
let greeting = person.hello();
console.log(greeting);