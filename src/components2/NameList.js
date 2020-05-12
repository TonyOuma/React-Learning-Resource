import React from 'react'
import Person from './Person'

function NameList() {
    const person = [
        {
            id: 1,
            name: "Luke Combs",
            age: 28,
            genre: 'Country Music'
        },
        {
            id: 2,
            name: "Ferre Golla",
            age: 32,
            genre: 'Rhumba'
        },
        {
            id: 3,
            name: "C. Martins",
            age: 34,
            genre: 'Reggae'
        }
    ]
const personList = person.map((person) => (
  <Person key={person.id} person={person} />
));
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList
