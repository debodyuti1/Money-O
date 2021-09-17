export const TransactionStart = (details) => ({
    type:"TRANSACTION_STORE",
})

export const SuccessfulStore = (details) => ({
    type:"STORE_SUCCESS",
    payload: details
})