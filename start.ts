
// CODE HERE
interface Address {
    city: string;
    street: string;
    postalCode: string;
}
enum Role {
    staff = 'staff',
    student = 'studend',
    manager = 'manager',
    admin = 'admin',
}


interface Companies {

    id: number;
    name: string;
    description: string;
    location: {
        city: string;
        street: string;
        postalCode: string
    };
}

enum Gender {
    male = 'male',
    female = 'female',
    other = 'other',
}

interface Person {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: Address;
    role: Role;
    username: string;
    profilePhotoUrl: string;
    companies: Companies[];
    gender: Gender;
}






class User implements Person {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: Address;
    role: Role;
    username: string;
    profilePhotoUrl: string;
    companies: Companies[];
    gender: Gender;
    constructor() { }

    get fullName(): string {
        return `${this.name} ${this.username}`
    }
}
