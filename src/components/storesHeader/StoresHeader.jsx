import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const StoresHeader = () => {
  return (
    <Stack direction="horizontal" className='justify-content-between mb-4'>
      <h2>Stores </h2>
      <Link to='create' as={'button'} className="btn btn-outline-success">Create New Store</Link>

    </Stack>

  )
}

export default StoresHeader