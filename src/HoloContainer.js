import { useContext } from 'react';
import HoloContext from './global_context/holo-context/HoloContext';
import HoloWorld from './HoloWorld';

const HoloContainer = () => {
	const { myHolo } = useContext(HoloContext);

	return <div>{!myHolo.name && <HoloWorld />}</div>;
};

export default HoloContainer;
