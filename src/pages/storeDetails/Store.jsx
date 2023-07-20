import React, { useEffect, useState } from "react";
import stores from "../../api/stores";
import { useParams } from "react-router";
import { Container, Spinner } from "react-bootstrap";

const Store = () => {
  const [store, setStore] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await stores.get(`/${params.id}`);
        setStore(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    })();
    console.log(params);
  }, [params.id]);
  return (
    <div className="store-details pt-5">
      <Container>
        {isLoading ? (
          <>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
          </>
        ) : (
          <>
            <p style={{fontSize : '2rem'}}>
              <b>id :</b> <span>{store.id}</span>
            </p>
            <p style={{fontSize : '2rem'}}>
              <b>name :</b> <span>{store.name}</span>
            </p>
            <p style={{fontSize : '2rem'}}>
              <b>cities :</b> <span>[{store.cities.join(",")}]</span>
            </p>
          </>
        )}
      </Container>
    </div>
  );
};

export default Store;
