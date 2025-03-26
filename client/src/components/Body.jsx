import axios from "axios";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

function Body() {
  const [propertys, setProperty] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1111/property/data?page=${page}`);
        setProperty(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData(); // Call the async function
  }, [page]);

  return (<div className="top-0 left-0 bg-fixed w-full bg-cover bg-center bg-no-repeat overflow-auto" style={{
      backgroundImage: "url('/images/home.jpg')"
    }}>
    <div className="min-h-screen w-full backdrop-blur-sm flex felx-col justify-center">
      <div className="container top-0 w-full min-h-screen grid-cols-1 flex flex-col md:grid-cols-[0.7fr,2fr,0.7fr] border-4 border-amber-500 gap-5 p-10">
        {propertys.map((property, index) => (<PropertyCard key={index} property={property}/>))}
        <div className="pagination mx-auto mt-5 text-center">
          {
            page > 1 && (<button onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-amber-100 border border-black h-full px-6  py-2 rounded-xl cursor-pointer hover:bg-gray-900 hover:text-amber-100 transition-all duration-500">
              Previous
            </button>)
          }
          <span className="text-amber-200 text-2xl"> Page {page} of {totalPages}</span>
          {
            page < totalPages && (<button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="bg-amber-100 border border-black h-full ml-2 px-6  py-2 rounded-xl cursor-pointer hover:bg-gray-900 hover:text-amber-100 transition-all duration-500">
              Next
            </button>)
          }
        </div>
      </div>
    </div>
  </div>);
}

function PropertyCard({property}) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      prev => prev === 0
      ? property.images.length - 1
      : prev - 1);
  };

  return (<div className="card border-2 w-full h-auto flex flex-col md:flex-row self-start md:rounded-[70px] overflow-hidden gap-5 bg-[#fef3c6] hover:bg-black hover:text-[#fef3c6] transition-all duration-500 border-none">
    {/* Image Slider */}
    <div className="relative h-48 w-48 border rounded-2xl overflow-hidden md:h-80 md:w-1/3">
      <img src={property.images[currentImage]} alt="Property" className="h-full w-full object-cover overflow-hidden  transition-all duration-900 ease-in-out"/>{" "}
      {/* Previous Button */}
      <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-300" onClick={prevImage}>
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      {/* Next Button */}
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-300" onClick={nextImage}>
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>

    {/* Property Details */}
    <Link to={`/property/${property._id}`} className="content flex flex-col left-0 md:text-2xl mt-6 gap-3 cursor-pointer">
      <h1 className="font-bold">{property.price}</h1>
      <h3>{property.title}</h3>
      <p>📍{property.displayAddress}</p>
      <p>
        🛏️ Bedrooms: {property.bedrooms}, 🚿 Bathrooms: {property.bathrooms}, 📐 Size: {property.size}
        sqFt
      </p>
    </Link>
  </div>);
}

export default Body;
