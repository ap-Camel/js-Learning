import React from 'react';
import ReactDOM from 'react-dom/client';

function InfoForm() {

    const [formData, setFormData] = React.useState({
        firstName: "",
        email: "",
        comment: "",
        alive: true,
        gender: ""
    });

    function handleForm(event) {

        const {name, value, type, checked} = event.target;

        setFormData( prevFromData => {
            return {
                ...prevFromData,
                [name] : type === "checkbox" ? checked : value
            };
        })
    }

    function submitForm(event) {
        event.preventDefault();
        console.log(formData);
    }

    return(
        <form className="infoForm" onSubmit={submitForm}>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleForm}
                placeholder="firstName"
            />
            <input 
                type="text"
                name="email"
                value={formData.email}
                onChange={handleForm}
                placeholder="email"
            />
            <textarea 
                name="comment"
                value={formData.comment}
                onChange={handleForm}
                placeholder="comment"
            />
            <label >are you alive 
                <input 
                type="checkbox"
                name="alive"
                value={formData.alive}
                onChange={handleForm}
            /></label>
            <select
                name="gender"
                onChange={handleForm}
                value={formData.gender}
                >
                <option value="">-- choose --</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
            </select>
            <button>submit form</button>
        </form>
    );
}

export default InfoForm;