import { PanoCursorRaycasterPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";


import { Newwork } from '../mockData'
import { Box } from "@mui/material";
import PanoCursorRaycasterPluginUse from "./PanoCursorRaycasterPluginUse";
import { parseWork } from "@realsee/five";

const FiveProvider = createFiveProvider({
  onlyRenderIfNeeds: true,
  plugins: [
    [PanoCursorRaycasterPlugin, 'panoCursorRaycasterPlugin']
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

  return Newwork && <FiveProvider initialWork={parseWork(Newwork)} ref={ref => Object.assign(window, {$five: ref?.five})}>
    <FiveCanvas {...size}/>
    <PluginFullScreenContainer/>
    <PanoCursorRaycasterPluginUse/>
  </FiveProvider>;
};

export default App ;

