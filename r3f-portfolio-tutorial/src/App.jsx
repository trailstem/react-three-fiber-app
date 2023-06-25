/* eslint-disable react/no-unknown-property */
import "./App.css";
// three.jsのシーンをReactのCanvas内に描画するためのコンポーネント
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows, // オブジェクトに接触しているシャドウを描画
  Float, // 等速回転
  Html, // 3Dオブジェクト上にHTML要素を描画
  PresentationControls, // three.jsのシーンにおけるユーザーインタラクションを管理するコンポーネント
  Text, // 3Dテキストを描画
  useGLTF, // GLTF形式の3Dモデルをロード
} from "@react-three/drei";

function App() {
  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const coffee = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf"
  );
  const donut = useGLTF("./donut.gltf");
  return (
    <>
      <div>
        {/* fov:カメラ角度  near,far: nearからfarまでの距離をカメラで映す  */}
        <Canvas
          camera={{ fov: 45, near: 0.1, far: 2000, position: [0, 1.5, 6] }}
        >
          {/* eslint-disable-next-line react/no-unknown-property */}
          <color args={["#1987CF"]} attach="background" />
          <ambientLight />
          <directionalLight position={[0, 0, 5]} intensity={1.4} />
          <PresentationControls
            global
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 300 }}
          >
            <Float rotationIntensity={1.5}>
              <rectAreaLight
                color={"#0021a7"}
                intensity={55}
                rotation={[0.1, Math.PI, 0]}
                width={2.0}
                height={1.65}
                positon={[0, 0, -1]}
              />
              <primitive object={macbook.scene} position={[0, -1.5, 0]}>
                <Html
                  position={[0, 1.56, -1.4]}
                  distanceFactor={1.17}
                  rotation-x={-0.256}
                  transform
                  wrapperClass="htmlScreen"
                >
                  <iframe
                    src=" https://www.trailstem.dev"
                    frameboder="0"
                  ></iframe>
                </Html>
              </primitive>
            </Float>

            <Float rotationIntensity={1.5}>
              <rectAreaLight
                color={"#0021a7"}
                intensity={55}
                rotation={[0.1, Math.PI, 0]}
                width={2.0}
                height={1.65}
                positon={[0, 0, -1]}
              />
              <primitive
                object={coffee.scene}
                position={[-2.5, -1.3, 0.2]}
                scale={[2, 2, 2]}
              />
            </Float>

            <Float rotationIntensity={1.5}>
              <rectAreaLight
                color={"#0021a7"}
                intensity={55}
                rotation={[0.1, Math.PI, 0]}
                width={2.0}
                height={1.65}
                positon={[0, 0, -1]}
              />
              <primitive
                object={donut.scene}
                position={[2.4, -1.3, 0.2]}
                scale={[3, 3, 3]}
                rotation-x={0.4}
              />
            </Float>

            <Text
              font="RobotoSlab-Bold.ttf"
              fontSize={0.6}
              position={[0, 1.7, 0.75]}
            >
              React-thee-fiber
            </Text>
          </PresentationControls>
          <ContactShadows
            scale={7}
            blur={2.4}
            position-y={-2.0}
            opacity={0.7}
          />
        </Canvas>
      </div>
    </>
  );
}

export default App;
