import Link from "next/link";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const ServiceMapLayout: React.FC = () => {
  const [xNECoord, setXNECoord] = useState<number>(0);
  const [yNECoord, setYNECoord] = useState<number>(0);

  const [xSWCoord, setXSWCoord] = useState<number>(0);
  const [ySWCoord, setYSWCoord] = useState<number>(0);

  const [zoom, setZoom] = useState<number>(0);

  const mapStyle = {
    width: "100%",
    height: "calc(100%)",
    position: "absolute",
    zIndex: -1,
    top: 0,
  };

  const initMap = () => {
    // set center of the map
    let locPosition;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        locPosition = new naver.maps.LatLng(lat, lon);
      });
    } else {
      locPosition = new naver.maps.LatLng(37.5677463677699, 126.9153946742084);
    }

    // create map
    const map = new naver.maps.Map("map", {
      center: locPosition,
      zoom: 15,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map,
    });

    // set bounds_changed listener
    const getBounds = debounce(bounds => {
      setZoom(map.getZoom());
      setXNECoord((map.getBounds() as any).getNE().x);
      setYNECoord((map.getBounds() as any).getNE().y);
      setXSWCoord((map.getBounds() as any).getSW().x);
      setYSWCoord((map.getBounds() as any).getSW().y);
      console.log(
        `NE x좌표: ${(map.getBounds() as any).getNE().x} NE y좌표: ${
          (map.getBounds() as any).getNE().y
        } SW x좌표: ${(map.getBounds() as any).getSW().x} SW y좌표: ${
          (map.getBounds() as any).getSW().y
        } zoom: ${map.getZoom()}`,
      );
    }, 400);
    naver.maps.Event.addListener(map, "bounds_changed", getBounds);
  };

  useEffect(() => {
    initMap();
  }, []);
  return (
    <>
      <div id="map" style={mapStyle} />
    </>
  );
};

export default ServiceMapLayout;
