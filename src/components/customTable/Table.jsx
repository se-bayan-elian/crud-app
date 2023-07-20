import React from "react";
import { Table } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";

const Index = ({ isLoading, columns, data, onRowClick = () => {} }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <>
            {[1,2,3].map((el)=>(
              <Placeholder key={el}
                as={"tr"}
                style={{ height: "40px" }}
                animation="glove"
              >
                <Placeholder as={"td"} animation="glove"></Placeholder>
                <Placeholder as={"td"} animation="glove"></Placeholder>
                <Placeholder as={"td"} animation="glove"></Placeholder>
                <Placeholder as={"td"} animation="glove"></Placeholder>
              </Placeholder>
              ))
            }
          </>
        ) : (
          data.map((row) => (
            <tr key={row.id} onClick={() => onRowClick(row)}>
              {columns.map((column) => (
                <td key={`${row.id + column.key}`}>
                  {column.render ? column.render(row) : Array.isArray(row[column.key]) ? '['+row[column.key].join("-")+']': row[column.key]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default Index;
