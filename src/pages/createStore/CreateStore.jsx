import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import StoreForm from "../../components/storeForm/StoreForm";
import stores from "../../api/stores";
import Swal from "sweetalert2";

const CreateStore = () => {
  const handleFn = ({name,cities},setisSubmit)=>{
      stores.post("", {
        name,
        cities: cities.split(" "),
      }).then(()=>{
        setisSubmit(false);
        Swal.fire(
          'Good job!',
          'Added New Store Successfully!',
          'success'
        )
      })
}
  return (
    <div className="create-from pt-5 ">
      <Container>
        <Row>
          <Col lg={4} className="mx-auto">
            <StoreForm handleFn={handleFn}></StoreForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateStore;
