var mobx = require('mobx');
var person = mobx.observable({
    username: 'chenpx',
    age: '24',
    work: 'coder',
    allMessage: function () {
        return this.username + '  ' + this.age + '  ' + this.work;
    }
});
console.log(person.allMessage);

person.username = 'chenpx976';

console.log(person.allMessage);
