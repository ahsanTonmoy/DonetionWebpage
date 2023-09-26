import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStordData } from "../utility/localStore";
import DonetionCAed from "./DonetionCard/DonetionCAed";

const Donetion = () => {

    const donetions = useLoaderData();

    const [donetion, setDonetion] = useState([]);
    const [cardLenght, setCardLenght] = useState(4)

    useEffect(() => {
        const storedId = getStordData();
        if (donetions.length > 1) {
            // const donetetd = donetions.filter(donete => storedId.includes(donete.id));
            // setDonetion(donetetd);

            const doneted = [];

            for (const id of storedId) {
                const donetion = donetions.find(donete => donete.id == id);
                if (donetion) {
                    doneted.push(donetion)
                }
            }
            setDonetion(doneted);
            

        }
    }, [])
    return (
        <div className="my-24 text-center">

            <div className="lg:p-20 md:p-10 p-4 grid md:grid-cols-2 gap-6">
                {
                    donetion.slice(0, cardLenght).map(donete => <DonetionCAed key={donete.id}
                        setDonete={donete}></DonetionCAed>)
                }
            </div>

            <div className={cardLenght === donetion.length && 'hidden'}>
                <button
                    onClick={() => setCardLenght(donetion.length)} className="btn bg-[#009444] text-white mx-auto btn-xs sm:btn-sm md:btn-md lg:btn-lg  ">See All</button>
            </div>
        </div>
    );
};

export default Donetion;