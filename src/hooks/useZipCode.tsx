import React, { useState } from 'react';
import axios from 'axios';

interface LocationData {
    place_id: number;
    display_name: string;
    lat: string;
    lon: string;
    osm_id: number;
}

const useZipCode = () => {
  const [data, setData] = useState<LocationData[] | null>(null);

  const fetchData = async (adressData: string) => {
    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/search.php?q=${adressData}&polygon_geojson=1&format=jsonv2`
      );
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { data, fetchData };
};

export default useZipCode;
