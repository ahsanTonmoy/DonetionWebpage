import { useEffect, useState } from "react";
import Items from "../Items/Items";

const Donetion_Items = () => {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        fetch('./donetionData.json')
        .then(res => res.json())
        .then(ItemsData => setItems(ItemsData));
    },[])
    return (
        <div className="text-center my-4 mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                {
                    items.map(item => <Items key={items.id} getitems={item}></Items>)
                }
            </div>

        </div>
    );
};

export default Donetion_Items;