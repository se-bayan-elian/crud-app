import React, { useEffect, useState } from "react";
import storesApi from "../../api/stores";
import CustomTable from "../../components/customTable/Table";
import { STORES_COLUMNS } from "../../constants/stores";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
const StoreCrud = () => {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refetch, setRrefetch] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await storesApi.get("");
        setStores(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [refetch]);
  // crud operations
  const handleView = (row) => {
    console.log(row);
    navigate(`${row.id}`, { replace: true });
  };

  const handleEdit = (row) => {
    navigate(`${row}/edit`, { replace: true });
  };
  const handleDelete = (row) => {
    console.log(row);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        (async () => {
          try {
            const res = storesApi.delete(`${row}`);
            if (res) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setRrefetch(true);
            } else {
              Swal.fire(
                "Not Deleted!",
                "Your file is already deleted!",
                "error"
              );
            }
          } catch (err) {
            console.log(err.message);
          }
        })();
      }
    });
  };
  return (
    <div>
      <CustomTable
        isLoading={isLoading}
        columns={STORES_COLUMNS(handleDelete, handleEdit)}
        data={stores}
        onRowClick={handleView}
      ></CustomTable>
    </div>
  );
};

export default StoreCrud;
