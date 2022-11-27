import React from "react";

const Donate = () => {
  return (
    <div className="w-full h-screen mb-3">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://media.istockphoto.com/photos/many-second-hand-clothes-are-on-sale-picture-id1248406700?k=20&m=1248406700&s=612x612&w=0&h=OH8eyoshszG0w08jVfaVRkuhpUNz92nRDsvxeuWdmy8="
        alt="/"
      />
      <div className=" fixed top-0 left-0 w-full "></div>
      <div className="bg-white/60 absolute h-full w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Donate</h1>

            <form className="w-full flex flex-col py-4">
              <select
                className="p-3 my-2 bg-white-700 rouded text-gray-600"
                id="types"
                name="type"
              >
                <option value="type">Type</option>
                <option value="short">Short</option>
                <option value="long">Long</option>
              </select>
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600"
                type="text"
                placeholder="Size"
                autoComplete="size"
                name="size"
                required
              />
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600"
                type="text"
                placeholder="Age"
                autoComplete="age"
                name="age"
                required
              />

              <select
                className="p-3 my-2 bg-white-700 rouded text-gray-600"
                id="sex"
                name="sex"
              >
                <option>Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600"
                type="text"
                placeholder="Quantity"
                autoComplete="quantity"
                name="quantity"
                required
              />
              <button className="bg-green-500 py-3 my-6 rounded font-bold">
                Add to Bag
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
