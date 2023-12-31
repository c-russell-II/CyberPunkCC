import { useState } from "react";
import Accordian from "../Components/Accordian/Accordian";
import SingleRequirementRender from "../Components/SingleRequirementRender";
import { AnyReq, StatReq } from "../Info/Cyberware";
import { AnyFirearm, firearms } from "../Info/Gear";
import { useCharaStore } from "../Utils/CharaStore";
import useStatStore from "../Utils/StatStore";
import CustomModal from "../Components/CustomModal";

export default function GearStore(props: { next: () => void }) {
	const money = useCharaStore((state) => state.money);
	const decreaseMoney = useCharaStore((state) => state.decreaseMoney);
	const addGear = useCharaStore((state) => state.addGear);
	const { stats } = useStatStore();
	const [useModal, setUseModal] = useState(false);
	const [modalContents, setModalContents] = useState(<></>);
	console.log(stats);
	const checkStatRequirements = (reqs: StatReq[]) => {
		for (const req of reqs) {
			if (stats[req.stat] < req.value) return false;
		}
		return true;
	};
	const handlePurchase = (firearm: string, type: string) => {
		const price = firearms[type][firearm].price;
		if (money < price) {
			setModalContents(<b>You can't afford that, choom!</b>);
			setUseModal(true);
		} else {
			decreaseMoney(price);
			addGear(firearm, firearms[type][firearm]);
		}
	};
	return (
		<section>
			<h2>Select Gear to Purchase</h2>
			<CustomModal
				active={useModal}
				control={setUseModal}
			>
				{modalContents}
			</CustomModal>
			<p>
				This list is, for now, just firearms. If you wish to purchase other
				weapons or miscellaneous gear - or just fashion, vehicles, etc. save
				your remaining eurodollars and speak to me directly.
			</p>
			<p>Money Available: {money}</p>
			{Object.keys(firearms).map((key: string, i: number) => {
				return (
					<Accordian
						title={key}
						tier={2}
						key={`Container for firearm type at index ${i}`}
					>
						{Object.values(firearms[key]).map(
							(firearm: AnyFirearm, index: number) => {
								return (
									<Accordian
										title={firearm.name}
										tier={3}
										key={`Firearm ${firearm.name} at index ${index}`}
									>
										<p>Description: {firearm.description}</p>
										<p>Price: €${firearm.price}</p>
										<p>Range tier: {firearm.range}</p>
										<p>Damage: {firearm.damage}</p>
										<p>Rate of Fire (Per attack): {firearm.rof}</p>
										{firearm.hasRequirements &&
											firearm.requirements.map((e: AnyReq, i: number) => {
												return (
													<SingleRequirementRender
														req={e}
														key={`requirement for ${firearm.name} at index ${i}`}
													/>
												);
											})}
										{!firearm.hasRequirements ||
										checkStatRequirements(firearm.requirements) ? (
											<button
												onClick={(event) => {
													event.stopPropagation();
													handlePurchase(firearm.id, firearm.firearmType);
												}}
											>
												Purchase
											</button>
										) : (
											<p>Requirements not met!</p>
										)}
									</Accordian>
								);
							}
						)}
					</Accordian>
				);
			})}
			<button onClick={() => props.next()}>Finished!</button>
		</section>
	);
}
