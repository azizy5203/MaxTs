"use strict";
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["guest"] = 1] = "guest";
    Role[Role["owner"] = 2] = "owner";
})(Role || (Role = {}));
var person = {
    name: 'John',
    age: 30,
    city: 'New York',
    role: Role.admin,
    talent: "Flex"
};
console.log(person.role);
var ff = 10;
//# sourceMappingURL=main.js.map