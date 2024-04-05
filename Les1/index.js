var User = /** @class */ (function () {
    function User(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    return User;
}());
var user1 = new User('Pedro', 12, false);
user1.setName('Vasul');
console.log(user1.getName());
