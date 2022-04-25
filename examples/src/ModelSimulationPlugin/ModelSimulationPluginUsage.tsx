import React from "react";
import {unsafe__useFiveInstance} from '@realsee/five/react'


const ModelSimulationPluginUsage = () => {
	const five = unsafe__useFiveInstance()
	//@ts-ignore
	const handleClickSimulation = () => {
		five.changeMode('Floorplan')
	}

	const handleClickInit = () => {
		const { enable, disable, play, init } = five.plugins['ModelSimulationPlugin']
		init()
	}

	const handleClickPlay = () => {
		const { enable, disable, play, init } = five.plugins['ModelSimulationPlugin']
		play()
	}
	return <React.Fragment>
		<button onClick={handleClickSimulation} style={{position:'absolute',top:'20px',left:"20px"}}>切换至俯视模型态</button>
		<button onClick={handleClickInit} style={{position:'absolute',top:'50px',left:"20px"}}>初始化</button>
		<button onClick={handleClickPlay} style={{position:'absolute',top:'80px',left:"20px"}}>开始仿真</button>
		</React.Fragment>
}

export default ModelSimulationPluginUsage