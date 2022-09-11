
import './index.css';
import bg from "./images/pattern-background-desktop.svg"
import bg_1 from "./images/pattern-background-mobile.svg"
import cover from "./images/illustration-hero.svg";
import icon from "./images/icon-music.svg";
function App()
{
  return (
    <div className="App font-RedHat w-screen h-screen bg-Pale-blue flex items-center justify-center relative">
      {/* Mobile */}
      <img src={bg_1} alt="img bg" className='hidden w-full  top-0 left-0 right-0 bottom-0 absolute Mobile:block' />
      {/* Desktop */}
      <img src={bg} alt="img bg" className='w-full  top-0 left-0 right-0 bottom-0 absolute Mobile:hidden' />
      <div className="z-40 w-1/4 h-3/4 bg-[#fff] rounded-xl overflow-hidden Mobile:w-11/12 Mobile:h-11/12">
        <div className="top w-full h-1/3 " >
          <img src={cover} alt="img cover" className="object-cover w-full h-full" />
        </div>
        <div className="text w-full h-2/3 flex flex-col items-center gap-1 text-center">
          <h3 className='text-Dark-blue font-xl text-[1.2rem] py-2 font-RedHat'> Order Summary</h3>
          <p className='font-ms text-Desaturated-blue py-1'> You can now listen to millions of songs, audiobooks, and podcasts on any  device anywhere you like!</p>

          <div className="box bg-Very-pale-blue flex w-10/12 p-2 px-4 m-1 rounded-md items-center justify-between ">
            <img src={icon} alt="icon img" />
            <div className="box-2 mr-[2rem] my-2">
              <h3 className='font-lg text-Dark-blue'> Annual Plan</h3>
              <span className='font-ms text-Desaturated-blue'> $59.99/year</span>
            </div>
            <a href="#" className='text-Bright-blue font-lg underline text-[.9rem] hover:text-Desaturated-blue transition'>Change</a>
          </div>

          <button className='w-10/12 bg-Bright-blue text-Very-pale-blue p-2 rounded-lg font-lg drop-shadow-2xl  hover:bg-Dark-blue transition'>Proceed to Payment</button>
          <button className='text-Desaturated-blue font-lg my-2 text-[14px] hover:text-Dark-blue transition' >Cancel Order</button>
        </div>
      </div>

    </div >
  );
}

export default App;
