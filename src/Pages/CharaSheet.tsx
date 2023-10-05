import { Cyberware } from "../Info/Cyberware";
import { AnyFirearm } from "../Info/Gear";
import { useCharaStore } from "../Utils/CharaStore";
import { useRoleStore } from "../Utils/RoleStore";
import useStatStore from "../Utils/StatStore";

export default function CharaSheet() {
	const { name, roleQuestions, background, installedCyberware, money, gear } =
		useCharaStore();
	const { role } = useRoleStore();
	const { stats } = useStatStore();
	const { path, connections, rep, phys, neuro, reflex } = stats;

	const hasBackground = () => {
		return (
			roleQuestions.some((e: [string, string]) => e[1] !== "") ||
			Object.values(background).some((e: string) => e !== "")
		);
	};
	return (
		<div>
			<h2>
				{name}, {role}
			</h2>
            <h3>Role</h3>
            <div className="smallDivider"/>
            <p>{role}</p>
            <h3>Stats</h3>
            <div className="smallDivider"/>
            <p>Physique: {phys}</p>
            <p>NeuroAbility: {neuro}</p>
            <p>Reflexes: {reflex}</p>
            <p>{role} Ability: {path}</p>
            <p>Connections: {connections}</p>
            <p>Rep: {rep}</p>

			{hasBackground() && (
				<div>
					<h3>Background</h3>
					{background.arrival !== "" && (
						<p>How you got here: {background.arrival}</p>
					)}
					{background.secrets !== "" && (
						<p>Secrets you keep: {background.secrets}</p>
					)}
					{background.goals !== "" && <p>Goals you have: {background.goals}</p>}
					{background.lines !== "" && (
						<p>Lines you won't cross: {background.lines}</p>
					)}
					{roleQuestions.map((e: [string, string]) => {
						if (e[1] !== "") {
							return (
								<p>
									{e[0]}: {e[1]}
								</p>
							);
						}
						return <></>;
					})}
				</div>
			)}
			<div>
				<h3>Inventory</h3>
				<p>Eddies: {money}</p>
				<h4>Weapons</h4>
				<div className="smallDivider" />
				{/* When I add gear other than firearms, I need to update this. */}
				{Object.values(gear).map((firearm: AnyFirearm) => {
					return (
						<>
							<p>Name: {firearm.name}</p>
							<p>Description: {firearm.description}</p>
							<p>Range tier: {firearm.range}</p>
							<p>Damage: {firearm.damage}</p>
							<p>Rate of Fire (Per attack): {firearm.rof}</p>
						</>
					);
				})}
				<h4>Cyberware</h4>
				<div className="smallDivider" />
				{Object.values(installedCyberware).map((cyberware: Cyberware) => {
					return (
						<>
							<p>Name: {cyberware.name}</p>
							<p> {cyberware.description} </p>
							<p>tier: {cyberware.tier}</p>
							<p>Capacity Used: {cyberware.capCost}</p>
						</>
					);
				})}
			</div>
		</div>
	);
}
