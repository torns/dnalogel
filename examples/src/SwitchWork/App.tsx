import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work, newWork , floorplanServerData , newData} from '../mockData'
import { parseWork } from "@realsee/five";
import PanoFloorplanRadarPanel from "./PanoFloorplanRadarPanel";
import getInitialParamFromUrl from "../utils/getInitialParamFromUrl";

const defaultPluginParam = {

}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = (JSON.stringify(initialParamFromUrl) !== '{}') ? initialParamFromUrl : defaultPluginParam


const FiveProvider = createFiveProvider({
  plugins: [
    [
      PanoFloorplanRadarPlugin,
      'panoFloorplanRadarPlugin',
      { ...pluginParams }
    ]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();
  const [data, setData] = React.useState(work)
    const [floorplanData, setFloorplanData] = React.useState(floorplanServerData)
    const changeData = () => {
        setFloorplanData(newData)
      setData(newWork)

    }

  return data && (
      <>
        <FiveProvider work={parseWork(data)} ref={ref => Object.assign(window, { $five: ref?.five })}>
          <FiveCanvas {...size} />
          <PanoFloorplanRadarPanel floorplanData={floorplanData}/>
        </FiveProvider>
        <div
            onClick={changeData}
            style={{
          position: 'absolute',
                width: 100,
                height: 100,
            top: 200,
            left: 200,
            cursor: 'pointer'
        }}>切换房源</div>
      </>
  )
};

export default App ;

