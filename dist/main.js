"use strict";
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["guest"] = 1] = "guest";
    Role[Role["owner"] = 2] = "owner";
})(Role || (Role = {}));
const person = {
    name: 'John',
    age: 30,
    city: 'New Yorkd',
    role: Role.admin,
    talent: "Flex"
};
console.log(person.role);
let res;
function addReturnString(n1, n2) {
    return `${n1} + ${n2} = ${n1 + n2}`;
}
res = addReturnString;
console.log(res(1, 2));
function recCallback(n1, n2, cb) {
    const res = n1 + n2;
    cb(res);
}
recCallback(4, 5, (res) => {
    console.log(res);
});
for (let g in ["dd", "we", 44]) {
    console.log(g);
}
//# sourceMappingURL=main.js.map