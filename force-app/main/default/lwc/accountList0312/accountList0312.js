import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
//import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
//import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import getAccounts from '@salesforce/apex/AccountController0312.getAccounts';
const COLUMNS = [
    { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },

];
export default class accountList0312 extends LightningElement {
    columns = COLUMNS;
    @wire(getAccounts)
    accounts;
}