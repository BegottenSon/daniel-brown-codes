import { writable, derived } from 'svelte/store';

//PROPERTY INFO
export const address = writable('');
export const city = writable('');
export const state = writable('');
export const zipcode = writable('');

//PURCHASE INFO
export const price = writable(40);
export const closingCost = writable(0); 
export const ARV = writable(0); 
export const repairCost = writable(0);
export const appreciation = writable(0);

//LOAN INFO
export const downPayment = writable(0);
export const interest = writable(0);
export const points = writable(0);
export const loanTerm = writable(0);

//INCOME INFO
export const monthlyIncome = writable(0);
export const laundry = writable(0);
export const custom = writable(0);

// EXPENSES INFO
export const propertyTax = writable(0);
export const insurance = writable(0);
export const repairs = writable(0);
export const vacancy = writable(5);
export const management = writable(0);
export const capEx = writable(0);
export const electricity = writable(0);
export const gas = writable(0);
export const water = writable(0);
export const hoa = writable(0);
export const garbage = writable(0);
export const other = writable(0);

//FUNCTIONS 
const prV = derived([price, vacancy], ([$price, $vacancy]) => $price * $vacancy);
export const analysis = {
    calcVac: prV
}