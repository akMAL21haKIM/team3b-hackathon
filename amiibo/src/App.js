import "./App.css";
import Home from "./Components/Home";
import Carousel, { CarouselItem } from "./Components/Categories/Carousel";
import animal_crossing from "./Assets/animal_crossing.png";
import legend_of_zelda from "./Assets/legend_of_zelda.png";
import super_mario from "./Assets/super_mario.png";

const image = [
  { id: animal_crossing },
  { id: legend_of_zelda },
  { id: super_mario },
];

function App() {
  return (
    <div className="App">
      <Home />
      <Carousel>
        {image.map((item, index) => {
          return (
            <CarouselItem key={index}>
              <img src={item.id} />
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
}

export default App;
