import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storeData } from "../utility/localStore";
const Donetion_Details = () => {
    const donetions = useLoaderData();
    const {id} = useParams();
    const donetion = donetions.find(donetion => donetion.id == id)
    // console.log(donetions, donetion);

    const {title,picture,price,description ,  text_Color} = donetion;

    const hendleDonetion= ()=>{

        storeData(id)
        toast('Thanks for yuor donations')
    }
    return (
        <div className="my-24 py-8 md:px-20">
            <div className="donetionCard md:w-2/3 p-4 mx-auto">
                <figure className="relative">
                    <img className="w-full" src={picture} alt=""  />
                    <div className="bg-[#0b0b0b7d] w-full bottom-0 absolute p-4"><button onClick={()=>hendleDonetion()} className="text-white px-4 py-2 font-semibold rounded" style={{background: text_Color}}>Donate {price}</button></div>
                </figure>
                <div className="body py-4">
                    <div className="text-2xl font-bold py-2">{title}</div>

                    <div className="">
                        <article>{description}</article>
                    </div>
                </div>
            </div>

            <ToastContainer></ToastContainer>
        </div>
        
    );
};

export default Donetion_Details;