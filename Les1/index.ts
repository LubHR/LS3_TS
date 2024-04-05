
class User{

    constructor(public name: string,public age: number,protected status: boolean) {
    }

    getName():string{
        return this.name
    }

    setName(name:string){
            this.name = name
    }

}

let user1= new User ('Pedro' ,12, false)

user1.setName('Vasul')

console.log(user1.getName())
