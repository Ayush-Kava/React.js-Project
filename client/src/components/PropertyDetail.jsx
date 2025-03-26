import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function PropertyDetail() {
    const { id } = useParams(); 
    const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchData = async ()=>{
        const response = await axios.get(`http://localhost:1111/property/${id}`);
        setProperty(response.data.prop);
    }
    fetchData();
    },[id]);
    if (!property) return <p>Loading...</p>; 
  return (
  <div>
    <p>{property.price}</p>
  </div>
  );
}

export default PropertyDetail;
