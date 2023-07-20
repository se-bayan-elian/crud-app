import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import stores from "../../api/stores";
import Swal from "sweetalert2";

const StoreForm = ({handleFn,data}) => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [cities, setCities] = useState("");
  const [isSubmit, setisSubmit] = useState(false);
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    // start showing validation on form
    setValidated(true);

    // check if fields are valid
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    // for button loading
    setisSubmit(true);
    handleFn({name ,cities},setisSubmit)
    setName("")
    setCities("")
    setValidated(false)
  };
  useEffect(()=>{
    if(data){
      setName(data.name)
      setCities(data.cities.join(" "))
    }
  },[])
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Store name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Store name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 ">
        <Form.Label>Cities </Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="e,g : city1 city2 city3 etc.."
          value={cities}
          onChange={(e) => setCities(e.target.value)}

        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      {!isSubmit ? (
        <Button className="d-block ms-auto" type="submit">
          Submit form
        </Button>
      ) : (
        <Button className="d-block ms-auto" variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      )}
    </Form>
  );
};

export default StoreForm;
