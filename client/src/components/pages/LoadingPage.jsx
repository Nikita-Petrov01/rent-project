import React from 'react'
import { Spinner } from 'react-bootstrap'

function LoadingPage() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 text-center">
      <div>
        <Spinner animation="border" variant="primary" />
        <h3 className="mt-3">Загрузка...</h3>
      </div>
    </div>
  )
}

export default LoadingPage