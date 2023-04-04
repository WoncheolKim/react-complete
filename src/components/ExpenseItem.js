import './ExpenseItem.css';

function ExpenseItem() {
    // 2. 그래서 자바스크립트 코드를 제공한다.
    const expenseDate = new Date(2023, 4, 3);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;


    // 1. 리액트에서 아래와 같이 html로 데이터를 고정으로 입력할 수 있으나 그렇게 하지 않는다.
    // 3. JSX코드를 사용해 자바스크립트 코드를 실행하도록 한다.
    return (
    <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;