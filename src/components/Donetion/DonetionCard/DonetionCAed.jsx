import { Link } from "react-router-dom";

const DonetionCAed = ({ setDonete }) => {
    const { id, category, picture, title, price, card_bg, category_bg, text_Color } = setDonete;
    return (
        <div>

            <div style={{ background: card_bg }} className="flex h-full rounded text-left">
                <figure ><img className="w-56 h-full" src={picture} alt="Shoes" /></figure>
                <div className="card-body p-4">
                    <p style={{ background: category_bg, color: text_Color }} className="card-title rounded text-sm w-20 p-2">{category}</p>
                    <p className="text-xl font-bold" >{title}</p>
                    <h3 className="font-bold" style={{ color: text_Color }}>{price}</h3>
                    <Link to={`/Donetion_Details/${id}`}><button style={{background: text_Color}} className=" w-32 px-4 rounded py-1 text-white">View Details</button></Link>
                    

                </div>
            </div>
        </div>
    );
};

export default DonetionCAed;