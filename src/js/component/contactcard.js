import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { DeleteConfirmation } from "./DeleteConfirmation";




const ContactCard = ({ contact }) => {



    const { store, actions } = useContext(Context)

    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                        alt=""
                        className="rounded-circle mx-auto d-block img-fluid"
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <div className="d-flex justify-content-between" >
                        <label className="name lead">

                            <h3>{contact.name}</h3>

                        </label>
                        <div>
                            <Link className="btn btn-success" to={"/edit-contact/" + contact.id} >
                                <i className="fas fa-pencil-alt mr-3"></i>
                            </Link>
                            <button
                                type="button"
                                className="btn "
                                data-bs-toggle="modal"
                                data-bs-target={"#deleteModal" + contact.id}
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>

                            <DeleteConfirmation contact={contact} actions={actions} />
                        </div>
                    </div>
                    <br />
                    <div className="d-flex flex-column align-items-start">
                        <div className="py-1" >
                            <i className="fas fa-map-marker-alt text-muted mr-3"></i>
                            <span className="text-muted">
                                {contact.address}
                            </span>
                        </div>

                        <div className="py-1" >
                            <span
                                className="fa fa-phone fa-fw text-muted mr-3"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="(870) 288-4149">

                            </span>
                            <span className="text-muted small">{contact.phone}
                            </span>
                        </div>

                        <div className="py-1" >
                            <span
                                className="fa fa-envelope fa-fw text-muted mr-3"
                                data-toggle="tooltip"
                                data-original-title=""
                                title="">

                            </span>
                            <span className="text-muted small text-truncate">
                                {contact.email}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default ContactCard