export default (expenses)=>{
    return expenses
            .map((expense)=> expense.amount)
            .reduce((accumulator, value)=> accumulator + value, 0);
    // if(typeof expenses === 'object' && expenses.constructor=== Object){
    //     return expenses.amount
    // }
};