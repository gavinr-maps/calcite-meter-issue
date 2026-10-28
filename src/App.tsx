import './App.css'
import "@esri/calcite-components/components/calcite-meter";

function App() {

  return (
    <>
      <div>
        <calcite-meter label="Example meter" value={15}></calcite-meter>
      </div>
    </>
  )
}

export default App
