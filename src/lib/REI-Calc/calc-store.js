import { writable, derived } from 'svelte/store';

//PROPERTY INFO
export const address = writable('');
export const city = writable('');
export const state = writable('');
export const zipcode = writable('');

//PURCHASE INFO
export const price = writable(100000);
export const closingCost = writable(0); 
export const ARV = writable(0); 
export const repairCost = writable(0);
export const appreciation = writable(0);

//LOAN INFO
export const downPayment = writable(0);
export const interest = writable(6);
export const points = writable(0);
export const loanTerm = writable(30);

//INCOME INFO
export const monthlyIncome = writable(4000);
export const laundry = writable(200);
export const custom = writable(0);

// EXPENSES INFO
export const propertyTax = writable(0);
export const insurance = writable(0);
export const repairs = writable(10);
export const vacancy = writable(0);
export const management = writable(10);
export const capEx = writable(8);
export const electricity = writable(0);
export const gas = writable(0);
export const water = writable(0);
export const hoa = writable(0);
export const garbage = writable(0);
export const other = writable(0);

//DERIVITIVES 
const incomeDerived = derived([monthlyIncome, laundry, custom], ([$monthlyIncome, $laundry, $custom]) => 
    $monthlyIncome + $laundry  + $custom);

//PERCENTAGE COVERSION FUNCTION
export function getPercent(n) {
    let number
    const numberDerived = derived([n, incomeDerived],([$n, $incomeDerived]) =>
    $incomeDerived * ($n / 100) );
    number = unsubscribeStore(numberDerived)
    return number
};

//UNSUBSCRIBE FUNCTIONS
export function unsubscribeStore(store) {
    let number;
    const unsubscribe_number = store.subscribe(n => number = n);
    return number
}

function addStores(keys) {
    let firstArray = Object.values(keys);
    let sumValue = firstArray.reduce((amount, store) => {
        return amount + unsubscribeStore(store)
    },0);
    return sumValue;
}

function percentageStores(keys) {
    let createdArray = Object.values(keys);
    let mutatedArray = createdArray.map(n => getPercent(n))
    let summingValue;
    mutatedArray.reduce((acc, store) => {
        summingValue = acc + store
        return summingValue
    });
    return summingValue
}

//STORE CHECKOUTS
export const Checkout = {
    store: unsubscribeStore,
    add: addStores,
    percent: getPercent,
    percentageSum: percentageStores,
}

//ANALYSIS OBJECT
export const Analysis = {
    fixed_expenses: {
        electricity: electricity,
        gas: gas,
        water: water,
        hoa: hoa,
        garbage: garbage,
        insurance: insurance,
        tax: propertyTax,
        other: other,
    },
    income: {
        monthlyIncome: monthlyIncome,
        laundry: laundry,
        custom: custom,
    },
    loan_info: {
        downPayment: downPayment,
        interest: interest,
        points: points,
        loanTerm: loanTerm,
    },
    property: {
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
    },
    purchase_info: {
        price: price,
        closingCost: closingCost,
        ARV: ARV,
        repairCost: repairCost,
        appreciation: appreciation,
    },
    varible_expenses: {
        repairs: repairs,
        vacancy: vacancy,
        management: management,
        capEx: capEx,
    }
}