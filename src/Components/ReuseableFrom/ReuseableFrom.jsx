const ReuseableFrom = ({fromTitle,submitbtn,handleSubmit,children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }

        handleSubmit(data)
    }

    return (
        <div>
            <form onSubmit={handleLocalSubmit}>
                {children}
                <input type="text" name="name" placeholder="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitbtn} />
            </form>

        </div>
    );
};

export default ReuseableFrom;