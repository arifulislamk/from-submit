const SimpleFrom = () => {

    const handleSubmit = e => {
        e.preventDefault() ;
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log('click submit from')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="number" name="phone" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;