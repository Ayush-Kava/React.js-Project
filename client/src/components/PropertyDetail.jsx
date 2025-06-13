import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import api from "../api";

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/property/${id}`,{withCredentials: true});
        setProperty(response.data.prop);
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div>
      <Header isDetail={true} />
      <PropertyCard property={property} />
    </div>
  );
}

// ✅ Moved PropertyCard outside PropertyDetail
function PropertyCard({ property }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  return (
    <div className="grid grid-cols-3 min-h-screen" style={{ gridTemplateColumns: "0.7fr 2.5fr 0.7fr" }}>
      <div ></div>
      <div className=" p-10">
        <div className="imageContainer relative rounded-4xl overflow-hidden h-[30vw]">
              <img src={property.images[currentImage]} alt="Property" className="h-full w-full object-cover transition-all duration-900 ease-in-out" />

              <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-300" onClick={prevImage}>
                <i className="fa-solid fa-chevron-left"></i> 
              </button>

              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-300" onClick={nextImage}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
        </div>
        <div className="textContainer mt-10 text-[1.2vw]  text-[#28304b]">
          <h1 className="font-bold text-[2vw] text-gray-900">Location: {property.displayAddress}</h1>
          <p>Price: {property.price}</p>
          <div className="roomDetail flex flex-row gap-5">
            <p>Baths: {property.bathrooms}</p>
            <p>Beds: {property.bedrooms}</p>
            <p>size: {property.size}</p>
          </div>
          <div className="title mt-10 text-[1.2vw]  text-[#28304b]">
              <p className="font-bold text-[1.3vw] text-gray-900">{property.title} </p>
              <p>Type: {property.type}</p>
              <p>Age: {property.property_age}</p>
              <p>Purpose: {property.purpose}</p>
              <p>Furnishing: {property.furnished}</p>
          </div>
          <div className="title mt-10 text-[1.2vw]  text-[#28304b]">
              <p className="font-bold text-[1.3vw] text-gray-900">About this Home </p>
              <div dangerouslySetInnerHTML={{ __html: property.description }}></div> {/*unknown*/}
          </div>
          <div className="agentDetail  mx-auto">
            <div className="agentImage flex mt-10 overflow-hidden flex-col w-[500px] border p-10 rounded-4xl  mx-auto">
              <img src={property.agent_profile_pic} alt="" className="rounded-full" />
              <div className="title mt-10 text-[1.2vw]  text-[#28304b]">
              <p className="font-bold text-[1.3vw] text-gray-900">Agent Detail</p>
              <p>{property.agent_name}</p>
              <p>Agency Name: {property.agency_name}</p>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default PropertyDetail;
