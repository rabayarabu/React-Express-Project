import React, { useEffect, useState } from 'react'

function Form() {
    const Values = { name: "", email: "", password: "" }
    const [formValue, setFormValue] = useState(Values);
    const [formErrors, setFormErrors] = useState({});
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue,[name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
    };
    const validate = (values) => {

    }
    return (
        <div className="container">
            <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                            name="name"
                            placeholder="name"
                            value={formValue.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text"
                            name="email"
                            placeholder="email"
                            value={formValue.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="text"
                            name="password"
                            placeholder="password"
                            value={formValue.password}
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