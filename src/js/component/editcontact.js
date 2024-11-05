import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";


const EditContact = () => {

    const [contact, setContact] = useState({
        name: contact ? contact.name : "",
        email: contact ? contact.email : "",
        phone: contact ? contact.phone : "",
        address: contact ? contact.address : "",

    });

    const { store, actions } = useContext(Context)


    useEffect(() => {
        setContact(store.contacts.find((item) => item.id == params.theid))
    }, []);

    const onSave = async () => {
        try {
            let response = await actions.editContact(contact)
            if (response == false) {
                alert("can't edit contact")
            } else {
                navigate("/")
            }
        } catch (error) { console.log(error) }
    }

    return (
        <div className="container-fluid min-vh-100 align-items-center bg-dark py-5 ">
            <div className="container d-flex flex-column bg-light my-5 pb-5 px-5  ">
                <h1 className="text-center mt-5">Edit Contact </h1>
                <div>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            value={contact.name}
                            onChange={(e) =>
                                setContact({ ...contact, name: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={contact.email}
                            onChange={(e) => setContact({ ...contact, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="phone"
                            className="form-control"
                            placeholder="Enter phone"
                            value={contact.phone}
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    phone: e.target.value
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter address"
                            value={contact.address}
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    address: e.target.value
                                })
                            }
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => { onSave() }}
                        className="btn btn-primary form-control">
                        save
                    </button>
                </div>
            </div>
        </div>
    );
}
export default EditContact