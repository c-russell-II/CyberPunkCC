import { useState, useEffect } from "react";
import "./App.css";
import StartStats from "./Pages/StartStats";
import PickOS from "./Pages/PickOS";
import SecondaryStats from "./Pages/SecondaryStats";
import PickRole from "./Pages/PickRole";
import { useRoleStore } from "./Utils/RoleStore";
import CharaDefiner from "./Pages/CharaDefiner";
import RoleQuestions from "./Pages/RoleQuestions";
import GearStore from "./Pages/GearStore";
import CyberwareStore from "./Pages/CyberwareStore";
import CharaSheet from "./Pages/CharaSheet";
function App() {
	const [step, setStep] = useState("start");
	const [body, setBody] = useState(<></>);
	const role = useRoleStore((state) => state.role);
	//TODO: add a version number!
	//TODO: Fix tab icon!
	useEffect(() => {
		switch (step) {
			case "start":
				setBody(<CharaDefiner next={() => setStep("hardStats")} />);
				break;
			case "hardStats":
				setBody(<StartStats next={() => setStep("role")} />);
				break;
			case "role":
				setBody(<PickRole next={() => setStep("roleQuestions")} />);
				break;
			case "roleQuestions":
				setBody(<RoleQuestions next={() => setStep("secondaryStats")} />);
				break;
			case "secondaryStats":
				setBody(<SecondaryStats next={() => setStep("os")} />);
				break;
			case "os":
				setBody(<PickOS next={() => setStep("cyberware")} />);
				break;
			case "cyberware":
				setBody(<CyberwareStore next={() => setStep("gear")} />);
				break;
			case "gear":
				setBody(<GearStore next={() => setStep("")} />);
				break;
			default:
				setBody(<CharaSheet />);
		}
	}, [step]);

	return (
		<>
			<h1 className="titleCard">
				Unidentified {role ? role : "Edgerunner"} Creation
			</h1>
			{body}
		</>
	);
}

export default App;
