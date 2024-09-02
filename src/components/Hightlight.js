import React from 'react'

export default function examples() {
  return (
    <div className='container'>
      <div>
        <button class="btn btn-primary" >
          Notifications
          <span class="badge bg-primary">12</span>
        </button>
      </div>
      <div class="alert alert-primary" role="alert">
        <strong>Warning!</strong><a href="/" class="alert-link">Click Here</a>
      </div>

      <span class="badge rounded-pill text-bg-primary" >New!</span>

      <div class="card">
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Quote</p>
            <footer class="blockquote-footer">
              Footer
              <cite title="Source title">Source title</cite>
            </footer>
          </blockquote>
        </div>
      </div>


    </div>


  )
}
