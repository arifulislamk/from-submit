import { useEffect, useRef } from "react";

const RefFrom = () => {

    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const passworRef = useRef(null);

    useEffect(()=> {
        nameRef.current.focus()
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passworRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={'ariful'} ref={nameRef} type="text" name="name" placeholder="name" />
                <br />
                <input ref={emailRef}  type="email" name="email"  />
                <br />
                <input ref={passworRef} type="password" name="password" required />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefFrom;