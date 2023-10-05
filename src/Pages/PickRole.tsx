import { useState } from "react";
import roleInfo from "../Info/Roles";
import {
	ExampleAbility,
	ExampleCharacter,
	SingleRole,
} from "../Info/Roles/RoleTypes";
import Accordian from "../Components/Accordian";
import { useRoleStore } from "../Utils/RoleStore";

export default function PickRole(props: {next: () => void}) {
	const [currentRole, setCurrentRole] = useState("");
	const setRole = useRoleStore((state) => state.setRole);
	//TODO: Handle selection of roles, and classes/CSS for role info &c
	const handleSelect = (event: React.SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setCurrentRole(event.currentTarget.value);
	};
	const handleConfirm = (event: React.SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setRole(currentRole);
		props.next();
	};
	return (
		<section>
			<h2>Select your Role</h2>
			{Object.values(roleInfo).map((e: SingleRole, i: number) => {
				return (
					<Accordian
						title={e.name}
						tier={3}
						key={`role accordian for ${e.name} at index ${i}`}
						closedClass="roleCard"
					>
						<button
							onClick={handleSelect}
							value={e.name}
						>
							Select {e.name}
						</button>
						<Accordian
							title="Description"
							tier={4}
						>
							{e.description}
						</Accordian>
						<Accordian
							title={`Famous ${e.name}s`}
							tier={4}
						>
							{e.exampleCharacters.map((e: ExampleCharacter) => (
								<Accordian
									title={e.name}
									tier={5}
									key={`example character ${e.name}`}
								>
									{e.description}
								</Accordian>
							))}
						</Accordian>
						<Accordian
							title={`Example ${e.name} abilities`}
							tier={4}
						>
							{e.exampleAbilities.map((e: ExampleAbility) => (
								<Accordian
									title={e.name}
									tier={5}
									key={`example ability ${e.name}`}
								>
									{e.description}
								</Accordian>
							))}
						</Accordian>
					</Accordian>
				);
			})}
			{currentRole && (
				<div>
					<button onClick={handleConfirm}>Select {currentRole}</button>
				</div>
			)}
		</section>
	);
}