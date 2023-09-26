import { Link } from "react-router-dom";

const Items = ({ getitems }) => {
    // console.log(getitems);

    const {id, category, picture, title, card_bg, category_bg, text_Color } = getitems;
    return (
        <div>
            <Link to={`/Donetion_Details/${id}`}>
                <div style={{ background: card_bg }} className="card card-compact h-full rounded text-left">
                    <figure ><img className="w-full" src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p style={{ background: category_bg, color: text_Color }} className="card-title rounded text-sm p-2">{category}</p>
                        <p className="text-xl font-bold" style={{ color: text_Color }}>{title}</p>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Items;