import { useState } from "react";
import { useRoleStore } from "../Utils/RoleStore";
import roleInfo from "../Info/Roles";
import CompletableTextArea from "../Components/CompletableTextArea";
import { useCharaStore } from "../Utils/CharaStore";

export default function RoleQuestions(props: {next: () => void}) {
	//This is where the role-specific questions will go.
	const role = useRoleStore((state) => state.role);
	const setRoleQuestions = useCharaStore((state) => state.setRoleQuestions);
	const roleQuestions = roleInfo[role]?.questions;
	const [answers, setAnswers] = useState<[string, string][]>([]);
	const [numFinished, setNumFinished] = useState([false, false, false]);

	const handleSubmit = () => {
		setRoleQuestions(answers);
		props.next();
	};
	return (
		<section>
			<h2>Role Background</h2>
			<p>Another couple optional questions, specific to your role.</p>
			{roleQuestions.map((question: string, index: number) => {
				return (
					<div key={`Role question for ${role} #${index}`}>
						{!numFinished[index] &&
							<CompletableTextArea
								label={question}
								handler={(answer: string) => {
									setAnswers([...answers, [question, answer]]);
									setNumFinished((prev) => {prev[index] = true; return prev;});
								}}
							/>
						}
					</div>
				);
			})}
			{numFinished.every((e: boolean) => e) ? (
				<button onClick={() => handleSubmit()}>Submit Answers</button>
			) : numFinished.some((e: boolean) => e) ? (
				<button onClick={() => handleSubmit()}>Finished</button>
			) : (
				<button onClick={() => handleSubmit()}>Skip</button>
			)}
		</section>
	);
}
