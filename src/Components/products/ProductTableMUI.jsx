import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, IconButton } from "@mui/material";

const PRODUCT_DATA = [
  { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
  { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
  { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
  { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
  { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];

const columns = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "category", headerName: "Category", flex: 1 },
  { field: "price", headerName: "Price ($)", flex: 1, type: "number" },
  { field: "stock", headerName: "Stock", flex: 1, type: "number" },
  { field: "sales", headerName: "Sales", flex: 1, type: "number" },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: (params) => (
      <div>
        <IconButton color="primary">
          <Edit size={18} />
        </IconButton>
        <IconButton color="error">
          <Trash2 size={18} />
        </IconButton>
      </div>
    ),
  },
];

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <TextField
          variant="outlined"
          placeholder="Search products..."
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            startAdornment: <Search size={18} style={{ marginRight: 8 }} />,
          }}
          sx={{ backgroundColor: "#374151", borderRadius: 1, input: { color: "#fff" } }}
        />
      </div>
      <div className="h-96">
      <DataGrid
  rows={filteredProducts}
  columns={columns}
  pageSize={5}
  
  sx={{
    bgcolor: "#1F2937",
    color: "#E5E7EB",
    borderColor: "#374151",
    "& .MuiDataGrid-cell": { borderBottom: "1px solid rgb(207, 210, 215)" },
    "& .MuiDataGrid-columnHeaders": {
     
      color: "black", 
      "& .MuiDataGrid-columnHeaderTitle": {
        fontWeight: "bold",
      },
    }
  }}
/>
      </div>
    </motion.div>
  );
};

export default ProductTable;
