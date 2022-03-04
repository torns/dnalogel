import { TopviewFloorplanPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import { parseWork } from "@realsee/five";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import TopviewFloorplanPluginUse from "./TopviewFloorplanPluginUse";
import { Box } from '@mui/material'
import { work } from '../mockData'
import getInitialParamFromUrl from "../utils/getInitialParamFromUrl";

const defaultPluginParam = {
    selector: '.plugin-full-screen-container',
    hoverEnable: true
}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = (JSON.stringify(initialParamFromUrl) !== '{}') ? initialParamFromUrl : defaultPluginParam

const FiveProvider = createFiveProvider({
    plugins: [
        [
            TopviewFloorplanPlugin,
            'topviewFloorplanPlugin',
            { ...pluginParams }
        ]
    ]
});

const App: FC = () => {
    const size = useWindowDimensions();

    const PluginFullScreenContainer = React.memo(
        () => <Box
            className="plugin-full-screen-container"
            sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        />,
        () => true
    )

    return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
		<FiveCanvas {...size} />
		<PluginFullScreenContainer />
		<TopviewFloorplanPluginUse />
	</FiveProvider>;
};

export default App;
