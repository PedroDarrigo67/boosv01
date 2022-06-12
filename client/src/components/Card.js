import React from 'react'
import Image1 from '../image/logoSona.gif'

function Card() {
  return (
    <div className="card text-center bg-dark">
      <img src={Image1} />
      <div className="card-body text-light">
        <h4 className="card-title"> my titulo </h4>
          <p className="card-text text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <a href="#!" class="btn btn-secondary rounded-1"> Go to web </a>
      </div>
    </div>
  )
}

export default Card