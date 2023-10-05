import { AnyReq } from "../Info/Cyberware";

export default function SingleRequirementRender (props: {req: AnyReq}) {

    switch (props.req.type) {
        case 'stat':
            return <p>Requires {props.req.stat} at {props.req.value} or higher</p>
        case 'OS':
            return <p>Must have some type of {props.req.OS}ware installed</p>
        case 'cyberware':
            return <p>Prerequisite Cyberware: {props.req.cyberware} at tier {props.req.tier} or higher</p>
        case 'slot':
            return <p>Requires Foundational Cyberware: {props.req.slot} at tier {props.req.tier} or higher.</p>
        default:
            return <>How did you get here?</>
    }
}