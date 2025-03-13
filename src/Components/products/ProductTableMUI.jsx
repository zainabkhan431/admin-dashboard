import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const products = [
  { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
  { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
  { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
  { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
  { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];

const columns = [
  {
    field: "name",
    headerName: "NAME",
    flex: 1,
    renderCell: (params) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img
          src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww" 
          alt={params.value}
          style={{ width: 32, height: 32, borderRadius: "50%" }}
        />
        <Typography fontWeight="bold" color="#E5E7EB">
          {params.value}
        </Typography>
      </Box>
    ),
  },
  { field: "category", headerName: "CATEGORY", flex: 1 },
  { field: "price", headerName: "PRICE", width: 120, renderCell: (params) => `$${params.value.toFixed(2)}` },
  { field: "stock", headerName: "STOCK", width: 120 },
  { field: "sales", headerName: "SALES", width: 120 },
  {
    field: "actions",
    headerName: "ACTIONS",
    width: 120,
    renderCell: () => (
      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton sx={{ color: "#60A5FA" }} size="small">
          <EditIcon />
        </IconButton>
        <IconButton sx={{ color: "#EF4444" }} size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
    ),
  },
];

const dataGridStyles = {
  bgcolor: "#1F2937",
  color: "#E5E7EB",
  borderColor: "#374151",

  "& .MuiDataGrid-cell": {
    borderBottom: "0.5px solid #374151",
    color: "#E5E7EB",
    display: "flex", 
    alignItems: "center", 
  },

  "& .MuiDataGrid-columnHeaders": {
    color: "white",
  borderColor: "#374151",
    borderBottom: "0.5px solid #374151",
  },
  "& .MuiDataGrid-row": {
    borderBottom: "1px solid rgba(68, 65, 65, 0.2)", 
  },
  
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "#111827",
    color: "white",
    borderTop: "0.5px solidrgb(58, 60, 62)",
    "& .MuiTablePagination-root, & .MuiTablePagination-caption, & .MuiSvgIcon-root": {
      color: "white",
    },
  },

  "& .MuiDataGrid-row": {
    borderBottom: "0.3px solid #374151",
  },

  "& .MuiDataGrid-columnSeparator": {
    "& svg": { width: "0.3px" },
  },
};

const ProductTable = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3, bgcolor: "#111827", minHeight: "70vh", borderRadius: 2 }}>
      <Typography variant="h5" color="white" gutterBottom>
        Product List
      </Typography>

      <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            bgcolor: "#1F2937",
            borderRadius: 2,
            input: { color: "#E5E7EB" },
            fieldset: { borderColor: "#374151" },
            "&:hover fieldset": { borderColor: "#4B5563" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#9CA3AF" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <DataGrid
        rows={filteredProducts}
        columns={columns}
        pageSize={5}
        sx={dataGridStyles}
      />
    </Box>
  );
};

export default ProductTable;
