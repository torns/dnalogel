import { ModelSimulationPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas} from '@realsee/five/react'
import * as React from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATATYPES } from "../utils/useFetchDatas";
import ModelSimulationPluginUsage from './ModelSimulationPluginUsage'


const simulationWorkData = {
	resourceUrl: 'http://127.0.0.1:8001/data/result/',
	colorMapPath: 'http://127.0.0.1:8001/data/colorMaps/7.png',
	width: 84,
	height: 28,
	depth: 64,
	origin: [-12.6135, -1.205, -5.5345],
	step: 0.2,
	maxT: 307.138,
	minT: 291.158,
	maxKeyframes: 121,
	houseHeight: 2.7,
}

const simulationOptions = {
		boundingOffset: 0.02,
		keyFrameRate: 50,
		globalOpacity: 1.0,
		boundingOpacity: 0.5,
}



const FiveProvider = createFiveProvider({
    imageOptions: { size: 512 }, // 图片默认分辨率
    textureOptions: { size: 512 }, // 贴图默认分辨率
    onlyRenderIfNeeds: true,
    plugins: [
        [ModelSimulationPlugin, 'ModelSimulationPlugin', {
					simulationWorkData,
					simulationOptions
				}]
    ],
		webgl2: true
});


const App: React.FC = () => {
    const size = useWindowDimensions();
    const work = useFetchDatas(DATATYPES.WORK, 'balabala')

    return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
		<FiveCanvas {...size} />
		<ModelSimulationPluginUsage />
	</FiveProvider>;
};

export default App;
