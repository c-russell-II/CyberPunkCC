import { useState } from "react";
import Accordian from "../../Components/Accordian/Accordian";
import CompletableTextArea from "../../Components/CompletableTextArea";
import { useCharaStore } from "../../Utils/CharaStore";

export default function CharaDefiner(props: { next: () => void }) {
	const [name, setName] = useState("");
	const charaStore = useCharaStore();
	const initBackground: { [key: string]: string } = {
		arrival: "",
		secrets: "",
		goals: "",
		lines: "",
	};
	const [currBackground, setCurrBackground] = useState<{
		[key: string]: string;
	}>(initBackground);
	const [completedBackground, setCompletedBackground] = useState<{
		[key: string]: boolean;
	}>({
		arrival: false,
		secrets: false,
		goals: false,
		lines: false,
		name: false,
	});

	const handleFinish = () => {
		charaStore.setName(name);
		charaStore.setBackground(currBackground);
		props.next();
	};

	return (
		<section>
			{!completedBackground.name && (
				<>
					<h2>What's your Name?</h2>
					<input
						type="text"
						placeholder="Character Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>{" "}
					<button
						onClick={() =>
							setCompletedBackground((prev) => {
								return { ...prev, name: true };
							})
						}
					>
						Confirm
					</button>
				</>
			)}
			<Accordian
				title="Optional Details"
				tier={2}
			>
				<p>
					These are all optional - just questions I think might help. Some of
					them we answered already, of course, but it'd be nice to have them
					recorded here as well. To skip any questions, just hit confirm without
					adding text, or simply leave them blank.
				</p>
				{!completedBackground.arrival && (
					<CompletableTextArea
						label="Quick summary of how you came to the Western Corporate States"
						handler={(arg0: string) => {
							setCurrBackground({ ...currBackground, arrival: arg0 });
							setCompletedBackground({ ...completedBackground, arrival: true });
						}}
						stopProp={true}
					/>
				)}
				{!completedBackground.secrets && (
					<CompletableTextArea
						label="Any major Secrets?"
						handler={(arg0: string) => {
							setCurrBackground({ ...currBackground, secrets: arg0 });
							setCompletedBackground({ ...completedBackground, secrets: true });
						}}
						stopProp={true}
					/>
				)}
				{!completedBackground.goals && (
					<CompletableTextArea
						label="Any big goals?"
						handler={(arg0: string) => {
							setCurrBackground({ ...currBackground, goals: arg0 });
							setCompletedBackground({ ...completedBackground, goals: true });
						}}
						stopProp={true}
					/>
				)}
				{!completedBackground.lines && (
					<CompletableTextArea
						label="Any lines, personal or professional, you refuse to cross?"
						handler={(arg0: string) => {
							setCurrBackground({ ...currBackground, lines: arg0 });
							setCompletedBackground({ ...completedBackground, lines: true });
						}}
						stopProp={true}
					/>
				)}
			</Accordian>
			{Object.values(completedBackground).every((e) => e) ? (
				<button onClick={() => handleFinish()}>Finalize Background</button>
			) : Object.values(completedBackground).some((e) => e) ? (
				<button
					onClick={() => {
						handleFinish();
					}}
				>
					{" "}
					Finish Background
				</button>
			) : (
				<button
					onClick={() => {
						handleFinish();
					}}
				>
					Skip Background
				</button>
			)}
		</section>
	);
}
//TODO: If this becomes anything other than a utility for this one campaign, I'd like to create a way to either add new questions as a user, or to get questions from a database or something.
