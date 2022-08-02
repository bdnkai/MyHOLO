import { Suspense, useContext, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei/';
import HoloContext from './global_context/holo-context/HoloContext';
import Architecture from './gltf_components/Architecture';
import MonsterIcon from './assets/MonsterIcon.png';
import FoodIcon from './assets/FoodIcon.png';
import PerformIcon from './assets/PerformIcon.png';
import PlayIcon from './assets/PlayIcon.png';
import holoButtonsCSS from './css/holo-buttons.css';
import holoDisplayCSS from './css/holo-panel.css';

const HoloWorld = () => {
	const { myHolo, display, feed, play, perform } = useContext(HoloContext);
	console.log(myHolo.overlay);
	return (
		<div>
			<div>
				{/*--------  3D ANIMATIONS AND MODELS  ---------*/}
				<div className='canvas-container'>
					<div className='canvas-display'>
						<Canvas>
							<OrbitControls />
							<ambientLight intensity={0} />
							<directionalLight intensity={0.5} />
							<Suspense fallback={null}>
								<Architecture />
							</Suspense>
						</Canvas>
					</div>

					{/*-------  BUTTONS STARTS HERE  -------- */}
					<div className='holo-buttons'>
						{/* --- DISPLAY PANEL ---- */}
						<button className='display-button' onClick={display}>
							<img
								src={MonsterIcon}
								alt='monster-icon'
								className='monster-icon'
							/>
						</button>
						{/* ------  FEED BUTTON  ------ */}
						<button className='feed-holo' onClick={feed}>
							<img src={FoodIcon} alt='food-icon' className='food-icon' />
						</button>

						{/*------  PLAY BUTTON  ------ */}
						<button className='holo-play' onClick={play}>
							<img src={PlayIcon} alt='play-icon' className='play-icon' />
						</button>

						{/*------  PERFORM BUTTON  ------*/}
						<button className='holo-perform' onClick={perform}>
							<img
								src={PerformIcon}
								alt='perform-icon'
								className='perform-icon'
							/>
						</button>
					</div>

					{/*-------  DISPLAY STARTS HERE  -------*/}
					<div className='overlay'>
						<div className='holo-attributes'>
							{/*--------   NAME  --------*/}
							<span className='holo-name'> {myHolo.holo_name}</span>

							{/*--------  HEALTH  --------*/}
							<span className='holo-health'> Health: {myHolo.health} </span>
							<div className='health-bar'></div>

							{/*--------  HAPPINESS  --------*/}
							<span className='holo-happiness'>
								Happiness: {myHolo.happiness}
							</span>
							<div className='happy-bar'></div>

							{/*--------  HUNGER  --------*/}
							<span className='holo-hunger'> Hunger: {myHolo.hunger} </span>
							<div className='hungry-bar'></div>

							{/*--------  CURRENCY --------*/}
							<span className='holo-coin'>Holo Coin : {myHolo.holo_coin}</span>
							<div className='coin-bar'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HoloWorld;
