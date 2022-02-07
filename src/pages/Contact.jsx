import React from "react";

function Contact() {

    const [data, SetData] = React.useState({
        firstName:"",
        lastName:"",
        mobileNumber:"",
        emailAddress:"",
        message:""
    })

    function InputEvent(event){
        const {name,value} = event.target;
        SetData((preVal) => {
            return{
                ...preVal,
                [name]: value,
            }
        })
    }

    function formSubmit(e){
        e.preventDefault();
        alert(`My name is ${data.firstName} ${data.lastName}. My mobile number and email address are ${data.mobileNumber}, ${data.emailAddress}. Here is my Message ${data.message}. Your Form was Submitted. Best of luck.`)
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                <input type="text" class="form-control" required id="exampleFormControlInput1" name="firstName" value={data.firstName} onChange={InputEvent} placeholder="Satish kumar" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput2" class="form-label">Last name</label>
                                <input type="text" class="form-control" required id="exampleFormControlInput2" name="lastName" value={data.lastName} onChange={InputEvent} placeholder="Vishwakarma" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput3" class="form-label">Mobile number</label>
                                <input type="number" class="form-control" required id="exampleFormControlInput3" name="mobileNumber" value={data.mobileNumber} onChange={InputEvent} placeholder="1234567890" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput5" class="form-label">Email address</label>
                                <input type="email" class="form-control" required id="exampleFormControlInput5" name="emailAddress" value={data.emailAddress} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" required class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;