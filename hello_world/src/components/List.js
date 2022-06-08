import React from "react";
import Person from "./Person"

function List() {
    const names = ['Bruce', 'CLark', 'Diana']
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 45,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 30,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 26,
      skill: "Vue.js",
    },
    {
      id: 4,
      name: "Chunky",
      age: 32,
      skill: "Next.js",
    },
  ];

  const renderPersonList = persons.map((person) => <Person key={person.id} person={person} />);

  const renderNameList = names.map((name, index) => <h2 key={index}>{name}</h2>);

  return <div>{renderNameList}</div>;
}

export default List;
