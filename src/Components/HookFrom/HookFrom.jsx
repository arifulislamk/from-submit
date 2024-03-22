import useInputState from "../../Hooks/useInputState";

const HookFrom = () => {
    // const [name, handlenamechange] = useInputState('rojoni klanto')
    // const emailState = useInputState('rojoni@gmail.com')

    const emailState = useInputState('ariful@gmail.com')
    const handleSubmit = e => {
        e.preventDefault();
        console.log('from data', emailState.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                {/* <input type="text" name="name"
                    value={name} 
                    onChange={handlenamechange} /> */}

                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookFrom;