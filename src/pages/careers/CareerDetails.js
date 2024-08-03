import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function CareerDetails() {
    const {id} = useParams();
    const career = useLoaderData();
  return (
    <div className='career-details'>
      <h2>Career details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
      </div>
    </div>
  )
}

export const CareerDetailsLoader = async({params}) =>{
    const {id} = params;
    const res = await fetch(`http://localhost:4000/careers/${id}`);
    return res.json();
    if(!res.ok){
        throw Error('could not find the career')
    }
}

export default CareerDetails
