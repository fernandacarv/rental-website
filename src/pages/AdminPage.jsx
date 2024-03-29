/* eslint-disable react/jsx-key */
import rentalsData from "../assets/data.json";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import AddRental from "../components/AddRental";

function AdminPage () {    

  const [rentals, setRentals] = useState(rentalsData.results);

  const addNewRental = (rental) => {
    const updatedRentals = [...rentals, rental];
 
    setRentals(updatedRentals);
  };

  return (
    <div className="page-container">
            <Navbar />
      <h2 className="list-title2">Available Rentals</h2>
      <div className="flex flex-col wrap">
        <AddRental addRental={addNewRental} />
        {rentals.map((rental) => (
          <div className="rental-container" key={rental.id}>
            <div className="group relative m-10 h-96 w-96 overflow-hidden rounded-lg shadow-md bg-white">
              {/* Page1 */}
              <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
                {rental.picture_url?.url && ( // Check if picture_url is defined
                  <img
                    className="h-4/6 w-full object-cover"
                    src={rental.picture_url.url}
                    alt=""
                  />
                )}
                <h1 className="mt-2 px-4 text-center font-serif text-xl font-semibold text-rose-500">
                  {rental.name}
                </h1>
                <p className=" py-1 px-4 text-center text-gray-800">
                  {rental.city}, {rental.country}
                </p>
                <p className=" py-1 px-4 text-center text-gray-800">
                  {rental.property_type}
                </p>
              </div>
              {/* /Page1 */}

              {/* Page2 */}
              <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
                <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-rose-500">
                  {rental.name}
                </h1>
                <h2 className="px-8 text-center">${rental.price}</h2>
                <Link
                  to={`/rentals/${rental.id}`}
                  className="flex justify-center pt-5"
                >
                  <button className="discover-button">Discover More</button>
                </Link>
              </div>
              {/* /Page2 */}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default AdminPage;