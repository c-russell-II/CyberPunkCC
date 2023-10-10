import { useState } from "react";
import SingleStat from "../../Components/NumberChooser";
import useStatStore from "../../Utils/StatStore";
import { useCharaStore } from "../../Utils/CharaStore";
import CustomModal from "../../Components/CustomModal";

export default function StartStats(props: { next: () => void }) {
	const { stats, increase, decrease } = useStatStore();
	const { increaseMoney } = useCharaStore();
	const [points, setPoints] = useState(21);
	const [useModal, setUseModal] = useState(false);
	const [modalContents, setModalContents] = useState(<></>);

	const checkStatChange = (val: number, dir: boolean) => {
		if (dir) {
			if (val > points) {
				setModalContents(<b>Not Enough Points Remaining!</b>);
				setUseModal(true);
				return false;
			}
			if (val > 4) {
				setModalContents(<b>Max Value is 5!</b>);
				setUseModal(true);
				return false;
			}
			setPoints((prev) => prev - (val + 1));
			return true;
		} else {
			if (val < 2) {
				setModalContents(<b>Minimum Value is 1!</b>);
				setUseModal(true);
				return false;
			}
			setPoints((prev) => prev + val);
			return true;
		}
	};

	const handleSubmit = (event: React.SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (points > 2) {
			setModalContents(<b>You gotta spend more points, choom!</b>);
			setUseModal(true);
			return;
		}
		//TODO: Might put together a confirmation dialogue for finalizing, or else have some other way to make finalizing feel better~!
		increaseMoney(100 * points);
		props.next();
	};

	return (
		<section>
			<CustomModal
				active={useModal}
				control={setUseModal}
			>
				{modalContents}
			</CustomModal>
			<h2> Hard Stats</h2>
			<p>Available Primary Stat Points: {points}</p>
			<SingleStat
				name="Physique"
				changeHandler={(dir) => {
					if (dir) {
						checkStatChange(stats.phys, dir) ? increase("phys") : null;
					} else {
						checkStatChange(stats.phys, dir) ? decrease("phys") : null;
					}
				}}
				value={stats.phys}
			/>
			<SingleStat
				name="Reflexes"
				changeHandler={(dir) => {
					if (dir) {
						checkStatChange(stats.reflex, dir) ? increase("reflex") : null;
					} else {
						checkStatChange(stats.reflex, dir) ? decrease("reflex") : null;
					}
				}}
				value={stats.reflex}
			/>
			<SingleStat
				name="Neuro"
				changeHandler={(dir) => {
					if (dir) {
						checkStatChange(stats.neuro, dir) ? increase("neuro") : null;
					} else {
						checkStatChange(stats.neuro, dir) ? decrease("neuro") : null;
					}
				}}
				value={stats.neuro}
			/>
			<button onClick={handleSubmit}>Finalize stats.</button>
		</section>
	);
}
