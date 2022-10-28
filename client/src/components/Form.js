import React, { useEffect, useState } from 'react'



function Form() {
    const value = { 
        name: "", 
        email: "",
        password: "",redirect: false,
        setHeaders: function (res, path, stat) {
          res.set('x-timestamp', Date.now())
        } 
    }
    const [formvalues, setFormvalues] = useState(value);
    useEffect(() => {
        fetch("http://localhost:8000/login", {
            headers: {
                'Accept': 'text/json',
                'Content-Type': 'text/json'
            }, method: "POST", body: { "email": formvalues.email, "password": formvalues.password }
        }).then(
            response => response.json()
        ).then(
            data => {
                setFormvalues(data)
            }
        ).catch(error => {
            console.log('error occured');
        })

    }, [])
    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormvalues({ ...formvalues, [name]: value });
        
    };
    const handleSubmit = (e) => {
       
        console.log(e.target.value);
        console.log('form is submitted');
        console.log(formvalues.name, formvalues.email, formvalues.password);
        e.preventDefault();
        const { name, value } = e.target;
        setFormvalues({ ...formvalues, [name]: value });
        
    };
    
    
    return (
        <body>
            
            <div className="container">
           
           {/* <pre>{JSON.stringify(formvalues, undefined, 2)}</pre> */}
           <form onSubmit={handleSubmit}>
               <h1 class="title">Login Form</h1>
               <div className="ui divider"></div>
               <div className="ui form">
                   <div className="field">
                       <label>Name   </label>
                       <input type="text"
                           name="name"
                           placeholder="name"
                           values={formvalues.name}
                           onChange={handleChange}
                       />
                   </div>
                   <div className="field">
                       <label>Email </label>
                       <input type="text"
                           name="email"
                           placeholder="email"
                           values={formvalues.email}
                           onChange={handleChange}
                       />
                   </div>
                   <div className="field">
                       <label>Password </label>
                       <input type="text"
                           name="password"
                           placeholder="password"
                           values={formvalues.password}
                           onChange={handleChange}
                       />
                   </div>
                   <div className='d-grid'>
                   <button  type="button" className="btn btn-primary btn-block btn-login" onSubmit={handleSubmit}>Login</button>
                   </div>
               </div>

           </form>
           <div>{}</div>

       </div>
        </body>
        
        
    )
}

export default Form