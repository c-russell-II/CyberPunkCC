import { CharaStore, useCharaStore } from "../Utils/CharaStore";
import useStatStore, { StatStore } from "../Utils/StatStore";
import {
	AnyReq,
	Cyberware,
	cyberwareBySlot,
	requirementCheck,
} from "../Info/Cyberware";
import Accordian from "../Components/Accordian/Accordian";
import SingleRequirementRender from "../Components/SingleRequirementRender";
import { useState } from "react";
import CustomModal from "../Components/CustomModal";

export default function CyberwareStore(props: {next: () => void}) {
	const chara = useCharaStore((state: CharaStore) => state);
	const { neuro, phys, reflex } = useStatStore(
		(state: StatStore) => state.stats
	);
	const [useModal, setUseModal] = useState(false);
	const [modalContents, setModalContents] = useState(<></>)

	const handlePurchase = (cyberware: Cyberware) => {
		if (chara.money < cyberware.price || cyberware.capCost > chara.cyberwareCapacity) {
			setModalContents(<b>Not enough money or cyberware capacity!</b>)
			return;
		} else {
			chara.decreaseMoney(cyberware.price);
			chara.installCyberware(cyberware);
			setModalContents(<b>{cyberware.name} purchased!</b>)
			setUseModal(true);
		}
	};
	return (
		<section>
			<h2>Purchase Miscellaneous Cyberware</h2>
			<CustomModal active={useModal} control={setUseModal}>{modalContents}</CustomModal>
			<p>
				This is where you can buy from the current list of available cyberware.
			</p>
			<div className="divider" />
			<p>
				Cash Available: {chara.money} Cyberware Capacity: {chara.cyberwareCapacity}
			</p>
			<div className="divider" />
			{Object.keys(cyberwareBySlot).map((key: string, i: number) => {
				if (key === "OS") return;
				const current = cyberwareBySlot[key];
				return (
					<div key={`Container for cyberware type at index ${i}`}>
						<Accordian
							title={key}
							tier={3}
						>
							{current.map((current: Cyberware, index: number) => {
								return (
									<div key={`Cyberware ${current.name} at index ${index}`}>
										<div className="smallDivider" />
										<Accordian
											title={current.name}
											tier={4}
										>
											<p> {current.description} </p>
											<p>price: €${current.price}</p>
											<p>tier: {current.tier}</p>
											<p>Capacity Used: {current.capCost}</p>
											{current.hasRequirements &&
												current.requirements.map((e: AnyReq, i: number) => {
													return (
														<SingleRequirementRender
															req={e}
															key={`Requirement ${i} for ${current.name}`}
														/>
													);
												})}
											{!current.hasRequirements ||
											requirementCheck(
												current,
												{ neuro, phys, reflex },
												{...chara.installedCyberware, }
											) ? (
												<button onClick={() => handlePurchase(current)}>
													Purchase {current.name}
												</button>
											) : (
												<p>You don't meet the requirements.</p>
											)}
										</Accordian>
									</div>
								);
							})}
						</Accordian>
						<div className="divider"></div>
					</div>
				);
			})}
			<button onClick={() => props.next()}>Finished!</button>
		</section>
	);
}
