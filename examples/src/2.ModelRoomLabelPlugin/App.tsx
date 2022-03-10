import { ModelRoomLabelPlugin, ModelRoomLabelController } from "@realsee/dnalogel/libs/ModelRoomLabelPlugin";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import { parseWork } from "@realsee/five";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import ModelRoomLabelPluginShow from "./ModelRoomLabelPluginShow";
import { work } from '../mockData'
import { Box } from "@mui/material";

const FiveProvider = createFiveProvider({
  plugins: [
    [ModelRoomLabelPlugin, 'modelRoomLabelPlugin']
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

  return work && <FiveProvider initialWork={parseWork(work)}>
    <FiveCanvas {...size}/>
    <PluginFullScreenContainer />
    <ModelRoomLabelPluginShow />
  </FiveProvider>;
};

export default App ;

