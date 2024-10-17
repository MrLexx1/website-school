import { Carousel } from "react-bootstrap";
import hero1 from "./../component/assets/hero1.jpeg";
import hero2 from "./../component/assets/hero2.jpeg";
import hero3 from "./../component/assets/hero3.jpeg";

const Hero = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={hero1} alt="First slide" />
        <Carousel.Caption>
          <h5>SMK Informatika Gowa</h5>
          <p>Tingkatkan Iman dan skill, Di SMK Informatika</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero2} alt="Second slide" />
        <Carousel.Caption>
          <h5>Kampus Informatika</h5>
          <p>Tingkatkan Iman Dan Skill, Di Kampus Informatika</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero3} alt="Third slide" />
        <Carousel.Caption>
          <h5>Full Stack Web</h5>
          <p>
            Anak anak yang telah menguasai Full Stack web
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
