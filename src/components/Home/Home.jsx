import Bannar from "../Bannar/Bannar";
import Donetion_Items from "../DonetionItems/Donetion_Items";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>

            <div className="md:p-20 p-8"><Donetion_Items></Donetion_Items></div>
        </div>
    );
};

export default Home;