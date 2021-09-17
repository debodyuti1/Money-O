const TransactionReducer = (state, action) => {
    switch(action.type){
        case "TRANSACTION_STORE":
            return{
                details: null,
                error: false
            }
        case "STORE_SUCCESS":
            return{
                details: action.payload,
                error:false
            }
        default:
            return state;
    }
}


export default TransactionReducer;