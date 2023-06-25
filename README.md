# react-three-fiber-app

### 使用ライブラリ

## npm i three react-three-fiber @react-three/drei

# React Three Fiber and Drei Components

このソースコードは React Three Fiber と Drei を用いた 3D ビジュアルの作成例です。

## 使用コンポーネントとプロパティの説明

### PresentationControls

ユーザーによるインタラクティブな制御を可能にするコンポーネントです。`global`, `config`, `snap`などのプロパティを持ちます。

```jsx
<PresentationControls
  global
  config={{ mass: 2, tension: 400 }}
  snap={{ mass: 4, tension: 300 }}
/>
```

---

### Float

オブジェクトを揺らすためのコンポーネントです。`rotationIntensity`プロパティで揺れの強度を制御します。

```jsx
<Float rotationIntensity={1.5} />
```

---

### rectAreaLight

特定の矩形領域から放出される光を模擬します。`color`プロパティで光の色、`intensity`プロパティで光の強度、`rotation`プロパティで光源の回転、`width`と`height`で光源の大きさ、`position`プロパティで光源の位置を制御します。

```jsx
<rectAreaLight
  color={"#0021a7"}
  intensity={55}
  rotation={[0.1, Math.PI, 0]}
  width={2.0}
  height={1.65}
  position={[0, 0, -1]}
/>
```

---

### primitive

3D オブジェクトをシーンに配置するためのコンポーネントです。`object`プロパティには表示したい 3D オブジェクトを、`position`プロパティにはオブジェクトの位置を指定します。

```jsx
<primitive object={macbook.scene} position={[0, -1.5, 0]} />
```

---

### Html

3D オブジェクト上に HTML 要素を配置するためのコンポーネントです。`position`プロパティで要素の位置、`distanceFactor`で要素の大きさ、`rotation-x`で要素の X 軸回転を制御します。`transform`プロパティは、要素が 3D 空間内で正しく表示されるようにします。`wrapperClass`には CSS クラス名を指定します。

```jsx
<Html
  position={[0, 1.56, -1.4]}
  distanceFactor={1.17}
  rotation-x={-0.256}
  transform
  wrapperClass="htmlScreen"
>
```

---

### Text

3D 空間内にテキストを配置するためのコンポーネントです。`font`プロパティで使用するフォントを、`fontSize`プロパティでフォントサイズを、`position`プロパティでテキストの位置を指定します。

```jsx
<Text font="RobotoSlab-Bold.ttf" fontSize={0.6} position={[0, 1.7, 0.75]}>
  React-three-fiber
</Text>
```

---

### ContactShadows

接触するオブジェクト間に影を生成するコンポーネントです。`scale`プロパティで影の大きさ、blur プロパティで影のぼかしの度合い、`position-y`プロパティで影の位置（Y 軸）、`opacity`プロパティで影の不透明度を制御します。

```jsx
<ContactShadows scale={7} blur={2.4} position-y={-2.0} opacity={0.7} />
```
