import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"


function App() {

  return (
    <>
      <Navbar/>
      <div className="Cards">
        <Card title='Card 1' description="This is a description for Card 1"/>
        <Card title='Card 2' description="This is a description for Card 2"/>
        <Card title='Card 3' description="This is a description for Card 3"/>
        <Card title='Card 4' description="This is a description for Card 4"/>
        <Card title='Card 5' description="This is a description for Card 5"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
