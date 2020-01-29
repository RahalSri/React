import { createStore, combineReducers } from 'redux';

//Action Creators
const createPolicy = (name, amount) => {
    // return Action
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }
}

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    }
}

const claimPolicy = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
        }
    }
}

//Reducers
const claimHistory = (oldClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldClaims, action.payload];
    }
    return oldClaims;
}

const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
    }
    return listOfPolicies;
}

const ourDeparments = combineReducers({
    accounting: accounting,
    claimHistory: claimHistory,
    policies: policies
});

const store = createStore(ourDeparments);
console.log(store.getState());
store.dispatch(createPolicy('Alex', 20));
console.log(store.getState());
store.dispatch(createPolicy('Jim', 40));
console.log(store.getState());
store.dispatch(claimPolicy('Alex', 10));
console.log(store.getState());
