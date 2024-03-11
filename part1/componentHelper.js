const Hello = (props) => {
    const bornYear = () => {
        const yearNow = new Date().getFullYear();
        return yearNow - PaymentResponse.age;
    }
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    )
}



const HelloDesctructured = ({ name, age }) => {

    const bornYear = () => new Date().getFullYear() - age;

    return (
        <div>
            <p>
                Hello {name}, you were born in {bornYear()} 
            </p>
        </div>
    )
}


const App = (props) => {
    const { counter } = props;
    return (
        <div>
            {counter}
        </div>
    )
}

let counter = 1;

const refresh = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <App couter={counter} />
    )
}

refresh();
counter += 1;
refresh();
counter += 1;
refresh();

setInterval(() => {
    refresh();
    counter += 1;
}, 1000);