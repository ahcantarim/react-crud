import React from 'react';
import { Link } from 'react-router-dom';

export const Form = ({ client, handleSubmit, handleChange }) => {

    return (

        <div className="container">
            <div className="card">
                <h5 className="card-header">{client.id === undefined ? 'Add ' : 'Update '} record</h5>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="cpf">CPF</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Fill CPF"
                                id="cpf"
                                value={client.cpf}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="nome">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Fill Nome"
                                id="nome"
                                value={client.nome}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="sexo">Gender</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Fill Gender"
                                id="sexo"
                                value={client.sexo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dat_nasc">Date</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Fill Date"
                                id="dat_nasc"
                                value={client.dat_nasc}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Fill Email"
                                id="email"
                                value={client.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Fill Phone"
                                id="phone"
                                value={client.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-sm btn-primary btn-block">Save</button>
                        </div>
                        <div className="form-group">
                            <Link to="/">
                                <div className="btn btn-sm btn-secondary  btn-block">Go back</div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}