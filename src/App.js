import './App.css'
import NavigationBar from "./components/Navbar"
import "./style/landing.css"
import Intro from "./components/Intro"
import Top from "./components/Top"
import Editor from "./components/Editor"

function App() {
  return (
    <div>
      {/**Start Intro Section */}
      <div className="myBG">
      <NavigationBar />
      <Intro />
      </div>
      {/**End Intro Section */}

      {/**Start Top Game Section */}
      <div class="topGame">
      <Top />
      </div>
      {/**End Top Game Section */}

      {/**Start Editor Choice Section */}
      <div className="editorGame">
        <Editor />
      </div>
      {/**End Editor Choice Section */}
    </div>
  );
}

export default App
