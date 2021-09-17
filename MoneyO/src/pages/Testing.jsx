import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext/TransactionContext";

function Test(){
    const {details:details} = useContext(TransactionContext)
    return(
        <div>
            {details}
        </div>
    )
}

export default Test;