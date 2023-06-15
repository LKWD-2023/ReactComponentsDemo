import React from 'react';

import { faker } from '@faker-js/faker';
import PeopleTable from './PeopleTable';
import PeopleAgeChart from './PeopleAgeChart';

const people = Array.from(Array(100)).map((_, idx) => ({
  id: idx,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  age: faker.number.int({ min: 1, max: 100 })
}));


export default function App() {
  return (
    <div className='container mt-5'>
      <div>
        <PeopleAgeChart people={people} />
      </div>
      <div>
        <PeopleTable people={people} />
      </div>
    </div>
  )
}
