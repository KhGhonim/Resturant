import WorldMap from "../Assets/pngimg.com - world_map_PNG28.png";

export default function MapChart() {
  return (
    <div className="w-full h-full overflow-x-scroll md:overflow-x-hidden scroll  overflow-y-hidden">
      <div className="w-[200%] md:w-full h-full relative">
        <img src={WorldMap} alt="World Map" className="w-full h-full " />
        <div className="map-container">
          <div className="marker new-york">New York</div>
          <div className="marker beverly-hills">Beverly Hills</div>
          <div className="marker las-vegas">Las Vegas</div>
          <div className="marker london">London</div>
          <div className="marker bebek">Bebek</div>
          <div className="marker ankara">Ankara</div>
          <div className="marker riyadh">Riyadh</div>
          <div className="marker abu-dhabi">Abu Dhabi</div>
          <div className="marker dubai">Dubai</div>
          <div className="marker doha">Doha</div>
        </div>
      </div>
    </div>
  );
}
