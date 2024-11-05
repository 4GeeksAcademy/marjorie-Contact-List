import React, { useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Context } from "../store/appContext";

const AddContact = () => {
    const [contact, setContact] = useState({
        name: contact ? contact.name : "",
        email: contact ? contact.email : "",
        phone: contact ? contact.phone : "",
        address: contact ? contact.address : ""

    });
    const { store, actions } = useContext(Context)
    let navigate = useNavigate()



    const onSave = async () => {
        try {
            let response = await actions.addContact(contact)
            if (response == false) {
                alert("an error occured while adding contact")
            } else {
                navigate("/")
            }
        } catch (error) { console.log(error) }

    }
    return (
        <div className="container-fluid min-vh-100 align-items-center bg-dark py-5 ">
            <div className="container d-flex flex-column bg-light my-5 pb-5 px-5  ">
                <h1 className="text-center mt-5">Add a new contact</h1>
                <div>
                    <h1 className="text-center"> New Contract </h1>
                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                onChange={(e) => setContact({ ...contact, name: e.target.value })
                                }
                                value={contact.fullName}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                onChange={{/* some function*/ }}
                                value={contact.email}
                            />
                        </div>
                        <div className="form-control">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone"
                                onChange={{/* some function*/ }}
                                value={contact.phoneNumber}
                            />
                        </div>
                        <div className="form-control">
                            <label>Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Address "
                                onChange={{/* some function*/ }}
                                value={contact.address}
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => { onSave() }}
                            className="btn pt-1 mt-4 btn-primary form-control">
                            save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddContact