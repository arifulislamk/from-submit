import { useState } from "react";

const StareFullFrom = () => {

    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null)
    const [error, seterror] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            seterror('password must be 6 charecter')
        }
        else {
            seterror('')
            console.log(email,password)
        }
    }

    const handleemailChange = e => {
        setemail(e.target.value)
    }
    const handlepasswordchange = e => {
        setpassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" />
                <br />
                <input
                    onChange={handleemailChange} type="email" name="email" />
                <br />
                <input type="number" name="phone" />
                <br />
                <input
                onChange={handlepasswordchange} type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>

            <p>{error}</p>
        </div>
    );
};

export default StareFullFrom;