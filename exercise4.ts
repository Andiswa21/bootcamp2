class Person{
    name : String;
    age : number;

    constructor(name: String , age: number){
        this.name = name;
        this.age = age;
    }

    getName(): String{
        return this.name
    }
    
}

class Person1{
    name: String;
    age : number;
    private socialSecurityNumber : String;

    constructor(name: String,age : number,ssn : String){
        this.name = name ;
        this.age =age;
        this.socialSecurityNumber = ssn;
        }

      getName(): String{
        return this.name;
      }

      getAge() : number{
        return this.age;
      }
}