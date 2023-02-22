import dynamic from 'next/dynamic';
import { useContext } from "react";
import CustomerContext from "../../../../contexts/customerContext";


export default function Sections() {
    
    const {state} = useContext(CustomerContext);
    const DynamicComponent = dynamic(() => import(`./${state.page}/${state.page}`));

    return (
        <div>
           <DynamicComponent />
        </div>
    )
}
