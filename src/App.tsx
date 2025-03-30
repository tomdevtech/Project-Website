import "./App.css";
import { ContentFrameBox } from "./components/ContentFrameBox";
import { Route, createRoutesFromElements, RouterProvider, createHashRouter } from "react-router-dom";
import { DataSec } from "./components/dataSec";
import { ImPrint } from "./components/imprint";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<ContentFrameBox/>}></Route>
      <Route path="dataSec" element={<DataSec/>}></Route>
      <Route path="imprint" element={<ImPrint/>}></Route>
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}