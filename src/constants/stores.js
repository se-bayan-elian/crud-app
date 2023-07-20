import { Button, Stack } from "react-bootstrap";

export const STORES_COLUMNS = (handleDelete, handleEdit) => [
  {
    key: 'id',
    title: 'Id',
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cities',
    title: 'Cities',
  },
  {
    key: 'actions',
    title: 'Actions',
    render: (data) => (
      <Stack gap={2} direction="horizontal" onClick={(e) => e.stopPropagation()} >
        <Button variant={'primary'} onClick={() => handleEdit(data.id)}>edit</Button>
        <Button variant={'danger'} onClick={() => handleDelete(data.id)}>delete</Button>
      </Stack>
    ),
  },
];