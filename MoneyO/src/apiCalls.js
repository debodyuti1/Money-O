export const detailCalls = async(details, dispatch) => {
    dispatch({type: "TRANSACTION_STORE"});
    try{
        dispatch({type: "STORE_SUCCESS", payload: details})
    }catch(err){
        console.log(err);
    }
}