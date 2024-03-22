import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { Moneycontext } from "../Grandpa/Grandpa";

const Anty = () => {
    const [money, setmoney] = useContext(Moneycontext)
    return (
        <div>
            <h2>Anty</h2>
            <section className="flex">
                <Cousin name={'Aminul'}></Cousin>
                <Cousin name={'Amina'}></Cousin>
            </section>
            <p>{money} taka</p>
        <button onClick={() => setmoney(money+ 1000)}>Add: 1000</button>
        </div>
    );
};

export default Anty;