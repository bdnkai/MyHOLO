import { useContext } from 'react';
import HoloContext from './globalContext/holoContext/HoloContext';
import HoloWorld from './HoloWorld';

const HoloContainer = () => {
	const { myHolo } = useContext(HoloContext);

	return <div>{!myHolo.name && <HoloWorld />}</div>;
};

export default HoloContainer;
