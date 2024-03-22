import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({ name,asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <h2>{name}</h2>
            {name=='Amina' && <Friend></Friend>}
            <section>
                {asset && <Special asset={asset}></Special>}
            </section>
        </div>
    );
};

export default Cousin;