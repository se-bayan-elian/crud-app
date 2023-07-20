import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import StoreForm from '../../components/storeForm/StoreForm'
import Swal from 'sweetalert2'
import stores from '../../api/stores'
import { useParams } from 'react-router'

const EditStore = () => {
  const params = useParams()
  const [store,setStore] = useState()
  const[isLoading,setIsLoading]= useState(true)
  
  const handleFn = ({name,cities},setisSubmit)=>{
    stores.put(`${params.id}`, {
      name,
      cities: cities
    }).then(()=>{
      setisSubmit(false);
      Swal.fire(
        'Good job!',
        'update store info Successfully!',
        'success'
      )
    })
}
 useEffect(()=>{
  (async()=>{
    const res = await stores.get(`${params.id}`)
    setStore(res.data)
    console.log(store);
    setIsLoading(false)
  })()
 },[])
return (

  <div className="create-from pt-5 ">
    <Container>
    {isLoading ? (
          <>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
          </>
        ) : (
      <Row>
        <Col lg={4} className="mx-auto">
          <StoreForm handleFn={handleFn} data={store}></StoreForm>
        </Col>
      </Row>)}
    </Container>
  </div>
);
}

export default EditStore