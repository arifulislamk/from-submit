import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            has: {asset}
            <p>has also: {gift}</p>
            
        </div>
    );
};

export default Special;