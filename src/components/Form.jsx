
const Form = () => {
  return (
    <div className="mt-5 mx-5 p-5 border-b-4 border-black" id="contact">
        <div className="bg-black p-5 flex flex-col gap-10">
            <h1 className="text-primary font-extrabold text-4xl ">CONTACT US</h1>
            <form className="flex flex-col gap-5">
                <input type="name" placeholder="First Name" className="w-3/6 p-4 rounded-lg outline-none text-xl"></input>
                <input type="name" placeholder="Last Name" className="w-3/6 p-4 rounded-lg outline-none text-xl"></input>
                <input type="number" placeholder="Phone No." className="w-3/6 p-4 rounded-lg outline-none text-xl"></input>
                <input type="state" placeholder="State" className="w-3/6 p-4 rounded-lg outline-none text-xl"></input>
            </form>
            <div className="flex  justify-end">
                <div className="bg-primary border-4 border-white p-3 cursor-pointer">
                    <h1 className="text-3xl font-extrabold">SUBMIT</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form