import React from 'react'

function Person({person}) {
    return (
      <div>
        <h2>
          I am {person.name} aged {person.age} playing {person.genre}
        </h2>
      </div>
    );
}

export default Person
