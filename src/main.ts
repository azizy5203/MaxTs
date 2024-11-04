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
    city: 'New York',
    role: Role.admin,
    talent: "Flex"
}

console.log(person.role)

type dd = number | string

const ff: dd = 10    