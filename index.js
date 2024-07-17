'use strict';

const errorMessage = {
    required: (field) => `${field[0].toUpperCase() + field.slice(1)} is a required field!`,
    invalidField: (field, value) => `Invalid ${field} - value: ${value}`,
    integer: (field) => `${field[0].toUpperCase() + field.slice(1)} must be an integer.`,
};

class Person {
    #name;
    #gender;
    #age;

    static #prefix = new Map([
        ["male", "Mr."],
        ["female", "Ms."]
    ]);

    constructor({ name, gender, age }) {
        this.#validateRequiredFields({ name, gender, age });
        this.#name = name;
        this.#gender = gender;
        this.#validateAge(age);
        this.#age = age;
    }

    static create(data) {
        return new Person(data);
    }

    #validateRequiredFields(fields) {
        for (const [field, value] of Object.entries(fields)) {
            if (!value) {
                throw new Error(errorMessage.required(field));
            }
        }
    }

    #getPrefix() {
        if (!Person.#prefix.has(this.#gender)) {
            throw new Error(errorMessage.invalidField('gender', this.#gender));
        }
        return Person.#prefix.get(this.#gender);
    }

    #validateAge(age) {
        if (!Number.isInteger(age) || age <= 0) {
            throw new Error(errorMessage.integer('age'));
        }
    }

    get name() {
        return `${this.#getPrefix()} ${this.#name}`;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        this.#validateAge(value);
        this.#age = value;
    }

    get birthday() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.#age;
    }
}

const person1 = Person.create({
    name: 'John Doe',
    gender: 'male',
    age: 25,
});

const person2 = Person.create({
    name: 'Jane Doe',
    gender: 'female',
    age: 29,
});

console.log(person1.name); // Mr. John Doe
console.log(person2.name); // Ms. Jane Doe
console.log(person1.birthday); // Year of birth
console.log(person2.birthday); // Year of birth
