import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

function Career() {
    const careers = useLoaderData();
  return (
    <div className='careers'>
      {careers.map((career)=>(
        <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

export const careersLoader = async () => {
    try {
      const res = await fetch('http://localhost:4000/careers');
      return res.json();
      if(!res.ok){
        throw Error('could not fetch the career!!')
      }
    } catch (error) {
      console.error('Error fetching careers data:', error);
      return [];
    }
  }
  
careersLoader();
export default Career
