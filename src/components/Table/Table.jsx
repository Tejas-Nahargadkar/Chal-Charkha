import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Table.css";
const columns = [
  { field: "id", headerName: "Id", width: 70 },
  { field: "Suppliername", headerName: "Supplier name" },
  { field: "Address", headerName: "Address"},
  { field: "Contact", headerName: "Contact"},
  { field: "EmailId", headerName: "Email Id"},
  { field: "Website", headerName: "Website"},
  { field: "GST", headerName: "GST"},
  { field: "Action", headerName: "Action"},
];

const rows = [
  {
    id: 210,
    Suppliername: "Pranay Shukla",
    Address: "ABC colony Kanpur",
    Contact: +91159875362,
    EmailId: "pranay@gmail.com",
    Website: "Abcefg.com",
    GST: 1232525252,
    Action: "...",
  },
];

export default function DataTable() {
  return (
    <div className="Table-Container">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
