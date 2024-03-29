import MainContainer from "./MainContainer";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas style={{ background: "black" }}>
      <MainContainer />
    </Canvas>
  );
}

export default App;
