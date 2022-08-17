import Circle from "./Circle";
import image from "../images/ben.jpg";

export default function Card() {
  return (
    <div className="blue-card">
      <div className="card-div">
        <div className="card-para">
          Simply unbelievable! I am really satisfied with my projects and
          business. this is absolutely wonderful!
        </div>
        <div className="photo-para">
          <img src={image} alt="" />
          <div className="name">
            <p className="artist-name">Nar Singh</p>
            <p className="prof">Graphic Designer</p>
          </div>
        </div>
      </div>

      <div className="rounded">
        <Circle color="white" />
        <Circle color="grey" />
        <Circle color="grey" />
      </div>
    </div>
  );
}
