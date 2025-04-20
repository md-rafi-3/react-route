import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Speacial = ({name,asset}) => {
    const newAsset=useContext(AssetContext);
    console.log('new asset',newAsset)
    return (
        <div>
            <h3>Speacial:{name}</h3>
            <p>Asset: {asset}</p>
            <p>New Asset: {newAsset}</p>
        </div>
    );
};

export default Speacial;