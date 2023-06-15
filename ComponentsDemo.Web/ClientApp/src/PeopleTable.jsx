import React from 'react';


const PeopleTable = ({people}) => {
    return (
        <table className='table table-hover table-striped table-bordered'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {people.map(p => <tr key={p.id}>
                    <td>{p.firstName}</td>
                    <td>{p.lastName}</td>
                    <td>{p.age}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default PeopleTable;