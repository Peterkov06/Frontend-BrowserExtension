import Header from "./components/header"
import '../src/App.css'
import ExtensionList from "./components/extensionList"

function App() {
  return (
    <div className="mainBody">
      <Header></Header>
      <ExtensionList></ExtensionList>
    </div>
  )
}

export default App
