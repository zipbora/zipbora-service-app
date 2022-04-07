import Link from "next/link";
import { CSSProperties, useEffect, useState } from "react";
import { debounce } from "lodash";
import Script from "next/script";

const ServiceMapLayout: React.FC = () => {
  const [xNECoord, setXNECoord] = useState<number>(0);
  const [yNECoord, setYNECoord] = useState<number>(0);

  const [xSWCoord, setXSWCoord] = useState<number>(0);
  const [ySWCoord, setYSWCoord] = useState<number>(0);

  const [zoom, setZoom] = useState<number>(0);

  const mapStyle: CSSProperties = {
    width: "100%",
    height: "calc(100%)",
    position: "absolute",
    zIndex: "-1",
    top: "0",
  };

  const initMap = () => {
    // create map
    const map = new naver.maps.Map("map", {
      zoom: 15,
    });

    // set center of the map
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const locPosition = new naver.maps.LatLng(lat, lon);
        map.setCenter(locPosition);
      });
    } else {
      const locPosition = new naver.maps.LatLng(37.3433319, 127.1100525);
      map.setCenter(locPosition);
    }

    const markerOption = {
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map,
    };

    const marker = new naver.maps.Marker(markerOption);

    const locationBtnHtml =
      '<a href="#" class="btn_mylct"><span class="spr_trff spr_ico_mylct">내 위치</span></a>';
    naver.maps.Event.once(map, "init", function () {
      const customControl = new naver.maps.CustomControl(locationBtnHtml, {
        position: naver.maps.Position.LEFT_CENTER,
      });
      customControl.setMap(map);

      naver.maps.Event.addDOMListener(
        customControl.getElement(),
        "click",
        function () {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;

              const curLocation = new naver.maps.LatLng(lat, lon);
              map.setCenter(curLocation);
            });
          }
        },
      );
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
      <Script
        type="text/javascript"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=u27hpbj3bf"
        strategy="beforeInteractive"
      />
      <div id="map" style={mapStyle} />
    </>
  );
};

export default ServiceMapLayout;
