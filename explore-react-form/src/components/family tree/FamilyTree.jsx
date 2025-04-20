import React, { createContext, useState } from "react";
import Grandpha from "./Grandpha";
import "./FamilyTree.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const [money,setMoney]=useState(0)
  const asset = "Diamond";
  const newAsset = "gold";
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <h4>Total family Money: {money}</h4>
      {/* <AssetContext.Provider value={newAsset}>
        <Grandpha asset={asset}></Grandpha>
      </AssetContext.Provider> */}

      <MoneyContext value={[money,setMoney]}>
      <AssetContext.Provider value={newAsset}>
        <Grandpha asset={asset}></Grandpha>
      </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;

/**
 * 1. create a context using createContext with a default value
 *
 * 2. Make sure you export the context to be used in other files
 */
