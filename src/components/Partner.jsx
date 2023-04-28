import amazon from "../assets/amazon.png";
import fb from "../assets/fb.png";
import mi from "../assets/mi.png";
import reddit from "../assets/reddit.png";
import twitter from "../assets/twitter.png";

const Partner = () => {
  return (
    <div className="mx-5 p-5 border-b-4 border-black" id="partner">
      <div className="mb-5 bg-black flex flex-col items-center justify-evenly gap-10 p-10">
        <h1 className="text-white font-extrabold text-4xl">
          OUR TRUSTED PARTNERS
        </h1>
        <div className="flex items-center justify-evenly  w-full">
          <img src={amazon} alt="Amazon" className="h-20 w-30"></img>
          <img src={fb} alt="FB" className="h-20 w-20"></img>
          <img src={mi} alt="MI" className="h-20 w-20"></img>
          <img src={reddit} alt="REDDIT" className="h-20 w-20"></img>
          <img src={twitter} alt="TWITTER" className="h-20 w-20"></img>
        </div>
      </div>
    </div>
  );
};

export default Partner;
