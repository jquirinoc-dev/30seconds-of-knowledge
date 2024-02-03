
import './App.css'
import Carousel from './Carousel'

function App() {

  return (
    <div className="App">
      <Carousel 
        carouselItems={[
          <h1>Item1</h1>,
          <h1>Item2</h1>,
          <h1>Item3</h1>
        ]}
      />
    </div>
  )
}

export default App
