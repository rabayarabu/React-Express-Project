import React, { useEffect, useState } from 'react'


function Form() {
    const value = { name: "", email: "", password: "" }
    const [formvalues, setFormvalues] = useState(value);
    const [formErrors, setFormErrors] = useState({});
    useEffect(() => {

    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormvalues({ ...formvalues, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formvalues))
        fetch("http://localhost:5000/api", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: "POST", body: { "email": formvalues.email, "password": formvalues.password }
        }).then(
            response => response.json()
        ).then(
            data => {
                setFormvalues(data)
            }
        )
    };
    const validate = (values) => {

    }
    return (
        <div className="container">
           
            {/* <pre>{JSON.stringify(formvalues, undefined, 2)}</pre> */}
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                            name="name"
                            placeholder="name"
                            values={formvalues.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text"
                            name="email"
                            placeholder="email"
                            values={formvalues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="text"
                            name="password"
                            placeholder="password"
                            values={formvalues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="fluid ui button blue">Login</button>
                </div>

            </form>

        </div>
    )
}

export default Form