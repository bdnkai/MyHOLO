import { Suspense, useContext, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei/';
import HoloContext from './globalContext/holoContext/HoloContext';
import { Model } from './gltfComponents/MyHolo';
import FoodIcon from './assets/FoodIcon.png';
import PerformIcon from './assets/PerformIcon.png';
import PlayIcon from './assets/PlayIcon.png';

const HoloWorld = () => {
	const [action, setAction] = useState("Wave")
	const { myHolo, display, feed, play, perform } = useContext(HoloContext);
	const ref = useRef();
	console.log();
	return (
		<div>
			<div>
				{/*--------  3D ANIMATIONS AND MODELS  ---------*/}
				<div className='canvas-container'>
					<div className='canvas-display'>
						<Canvas shadows dpr={[1, 2]} camera={{ fov: 10 }}>
							<Suspense fallback={null}>
								<Stage
									controls={ref}
									preset='portrait'
									intensity={0}
									environment='dawn'>
									<Model action={action}/>
								</Stage>
							</Suspense>
							<OrbitControls />
						</Canvas>
					</div>
					{/*-------  BUTTONS STARTS HERE  -------- */}
					<div className='holo-buttons'>
						{/* --- DISPLAY PANEL ---- */}
						<button onClick={()=> setAction("Wave")}>TEST</button>
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
