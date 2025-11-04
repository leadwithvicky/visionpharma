import React from 'react';
import EmployeeCard from './EmployeeCart';
import FoundersCart from './FoundersCart';
import { founders, employees, management } from './teamData';
const OurTeam = () => {
  return (
    <div className="lg:w-10/12 m-auto my-20 ">

      {/* Founding Members */}
      <div className="flex justify-center gap-28 my-10 flex-wrap">
        {founders.map((emp, index) => (
          <FoundersCart key={index} item={emp} />
        ))}
      </div>

      <p className="text-3xl font-bold text-center">Our Team</p>

      {/* Management */}
      <div className="flex justify-center gap-28 mt-10 flex-wrap my-5">
        {management.map((emp, index) => (
          <EmployeeCard key={index} item={emp} />
        ))}
      </div>

      {/* Employees */}
      <div className="flex justify-center gap-14 mt-10 flex-wrap my-5">
        {employees.slice(0, 4).map((emp, index) => (
          <EmployeeCard key={index} item={emp} />
        ))}
      </div>
      <div className="flex justify-center gap-14 mt-10 flex-wrap my-5">
        {employees.slice(4).map((emp, index) => (
          <EmployeeCard key={index} item={emp} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
