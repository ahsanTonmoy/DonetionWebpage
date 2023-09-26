// import bannarImg from './Bannar.png';
import './bannar.css'
const Bannar = () => {
    
    return (
        <div >
            <div className="bgImg">

                <div className="srcArea  py-60">
                    <form className=' bg-white flex w-2/3 mx-auto '>
                        <input className='rounded-l-lg p-4 w-full' type="search" name="src" id="srcFild" placeholder='Search hra' />

                        <button type='submit' className='bg-[#FF444A] text-white px-4 py-2 rounded-r-lg'>Search</button>
                    </form>
                </div>
                </div>
        </div>
    );
};

export default Bannar;