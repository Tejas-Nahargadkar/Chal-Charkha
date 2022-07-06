import { Assignment, FactCheck, FileCopy, Person } from "@mui/icons-material";
import React, { useState } from "react";
import "./Tabs.css";
import Table from '../Table/Table'
export default function Tabs() {
  const [ShowTab, setShowTab] = useState("Supplier_Master");
  return (
    <div className="Tab-Container">
      <div className="Tab-row">
        <div
          onClick={() => setShowTab("Supplier_Master")}
          className={`Tab-btn-row ${ShowTab === 'Supplier_Master' && 'Active-Tab'}`}
        >
          <Person />
          <p className="Tab-Button">Supplier Master</p>
        </div>
        <div
          className={`Tab-btn-row ${ShowTab === 'Customer_Master' && 'Active-Tab'}`}
          onClick={() => setShowTab("Customer_Master")}
        >
          <Person />
          <p className="Tab-Button ">Customer Master</p>
        </div>
        <div
          className={`Tab-btn-row ${ShowTab === 'ItemCategory_Master' && 'Active-Tab'}`}
          onClick={() => setShowTab("ItemCategory_Master")}
        >
          <FileCopy />
          <p className="Tab-Button ">Item Category Master</p>
        </div>
        <div className={`Tab-btn-row ${ShowTab === 'Item_Master' && 'Active-Tab'}`} onClick={() => setShowTab("Item_Master")}>
          <Assignment />
          <p className="Tab-Button ">Item Master</p>
        </div>
        <div className={`Tab-btn-row ${ShowTab === 'Purchase-Order' && 'Active-Tab'}`} onClick={() => setShowTab("Purchase-Order")}>
          <FactCheck />
          <p className="Tab-Button">Purchase Order</p>
        </div>
      </div>
      <span className="Tab-divider"></span>
      <div className="Tab-Target">
        {ShowTab === "Supplier_Master" && (
          <div className="Supplier_Master"><Table/> </div>
        )}
        {ShowTab === "Customer_Master" && (
          <div className="Customer_Master">item no 2</div>
        )}
        {ShowTab === "ItemCategory_Master" && (
          <div className="ItemCategory_Master">item no 3</div>
        )}
         {ShowTab === "Item_Master" && (
          <div className="Item_Master">item no 4</div>
        )}
         {ShowTab === "Purchase-Order" && (
          <div className="Purchase-Order">item no 5</div>
        )}
      </div>
    </div>
  );
}
