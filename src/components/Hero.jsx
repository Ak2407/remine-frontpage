import laptop from "../assets/laptop.png";
import appliacne from "../assets/appliance.png";
import smartphone from "../assets/smartphone.png";
import trash from "../assets/trash.png";
const Hero = () => {
  return (
    <div className="mx-5 pb-10 flex flex-col mt-10 border-b-4 border-black">
      <div className="bg-primary  mx-5 border-black border-4 p-10 text-center flex flex-col gap-10">
        <h1 className="font-bold text-7xl">
          ONE STEP CLOSER TO A <span className="text-white">SUSTAINABLE </span>
          WORLD
        </h1>
        <h2 className="font-medium text-4xl">
          A more sustainable world starts with us, one gadget at a time
        </h2>
      </div>
      <div className="bg-black mt-10 mx-9  px-10 text-center flex flex-col gap-10">
        <h1 className="text-primary text-4xl mt-4 font-semibold">EVERY YEAR</h1>
        <div className="flex  items-center justify-evenly">
          <div className=" flex flex-col gap-4 mb-4">
            <div className="flex items-center justify-center">
              <img src={laptop} alt="Laptop" className="h-20"></img>
            </div>
            <h2 className="text-primary text-xl font-bold">476,339</h2>
            <h3 className="text-white text-xl">Laptops Recycled</h3>
          </div>
          <div className=" flex flex-col gap-4 mb-4">
          <div className="flex items-center justify-center">
              <img src={smartphone} alt="Laptop" className="h-20 "></img>
            </div>
            <h2 className="text-primary text-xl font-bold">21,836,470</h2>
            <h3 className="text-white text-xl">Smartphones Recycled</h3>
          </div>
          <div className=" flex flex-col gap-4 mb-4">
          <div className="flex items-center justify-center">
              <img src={appliacne} alt="Laptop" className="h-20 "></img>
            </div>
            <h2 className="text-primary text-xl font-bold">1,211,408</h2>
            <h3 className="text-white text-xl">Appliances Recycled</h3>
          </div>
          <div className=" flex flex-col gap-4 mb-4">
          <div className="flex items-center justify-center">
              <img src={trash} alt="Laptop" className="h-20 "></img>
            </div>
            <h2 className="text-primary text-xl font-bold">68,456,327 kgs</h2>
            <h3 className="text-white text-xl">E-Waste Recycled</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
