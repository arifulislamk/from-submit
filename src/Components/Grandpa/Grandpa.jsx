import { createContext, useState } from "react";
import Anty from "../Anty/Anty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold');
export const Moneycontext = createContext(1000);
const Grandpa = () => {
    const asset = 'diamond';
    const [money, setmoney] = useState(1000)
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>net money :{money}</p>

            <Moneycontext.Provider value={[money,setmoney]}>
                <AssetContext.Provider value="gold">
                    <section className=" flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Anty></Anty>
                    </section>
                </AssetContext.Provider>
            </Moneycontext.Provider>
            

        </div>
    );
};

export default Grandpa;