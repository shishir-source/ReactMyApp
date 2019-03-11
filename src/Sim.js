import React from 'react';

const Sim = ({ sims }) =>{
  const simsList = sims.map( sim => {
    return (
      <div className="sim" key ={sim.id}>
      <div>Name: { sim.name }</div>
      <div>Age: { sim.age }</div>
      <div>belt: { sim.belt }</div>
      </div>
    );
  });
  return (
    <div className="sims-list">
      {simsList}
    </div>
  );
}
export default Sim
