import Carousel from 'react-bootstrap/Carousel';
import   "../Carrusel/styles.css"

function Carrusel(){
    return (
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 carrousel;"
              src="../img/img1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className='title'>
            <h3>Barbie</h3>
            <p>2023 ‧ Comedia/Romance ‧ 1h 54m</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../img/img2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Avatar: El camino del agua</h3>
            <p>2022 ‧ Ciencia ficción/Acción ‧ 3h 12m</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../img/img3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption >
            <h3 class=" text-primary">Mujer Maravilla</h3>
            <p class=" text-primary"> 2017 ‧ Acción/Aventura ‧ 2h 21m</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
    
export default Carrusel