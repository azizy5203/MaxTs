enum Role {
    admin, guest, owner
}

const person: {
    name: string;
    age: number;
    city: string;
    role: number;
    talent: 'Flex' | 'Dev' | 4
} = {
    name: 'John',
    age: 30,
    city: 'New Yorkd',
    role: Role.admin,
    talent: "Flex"
}
// asdasd
console.log(person.role)

let res: (arg1: number, arg2: number) => string

function addReturnString(n1: number, n2: number): string {
    return `${n1} + ${n2} = ${n1 + n2}`
}

res = addReturnString
console.log(res(1, 2))


function recCallback(n1: number, n2: number, cb: (arg1: number) => void) {
    const res: number = n1 + n2
    cb(res)
}

recCallback(4, 5, (res) => {
    console.log(res)
})

for (let g in ["dd", "we", 44]) {
    console.log(g)
}