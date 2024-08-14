import { useState } from 'react';

const Organization = () => {
  const [organization, setOrganization] = useState({
    name: 'Facebook',
    location: 'Menlo Park, CA',
    employees: 10000,
  });

  return (
    <div>
      <h1>{organization.name}</h1>
      <p>{organization.location}</p>
      <p>{organization.employees}</p>
    </div>
  );
};

export default Organization;