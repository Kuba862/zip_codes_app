import React, { useState } from 'react';
import Input from './components/Input';
import useZipCode from './hooks/useZipCode';
import Map from './components/Map';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { BodyContainer, Content, Button, MapDiv, MapsContainer } from './styles/styles';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const App = () => {
  const [address, setAddress] = useState('');
  const { data, fetchData } = useZipCode();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const dataMap = data?.map((item: any) => {
    const { display_name } = item;
    return (
      <MapDiv key={item?.osm_id}>
        <Map
          position={[parseFloat(item.lat), parseFloat(item.lon)]}
          address={display_name}
        />
        <p>{display_name}</p>
      </MapDiv>
    );
  });

  return (
    <BodyContainer>
      <Content>
        <Input handleChange={handleChange} />
        <Button onClick={() => fetchData(address)} disabled={!address}>
          Wyszukaj kod pocztowy
        </Button>
        <MapsContainer>
        {data && dataMap}
        </MapsContainer>
      </Content>
    </BodyContainer>
  );
};

export default App;
