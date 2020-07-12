import React from 'react';
import { Link } from 'react-router-dom';

export const Table = ({ clients, setClient, editClient, deleteClient }) => {
    return (
        <div className="container">
            <div className="card">
                <h5 className="card-header">Records</h5>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="pl-5"></th>
                                    <th className="pl-5"></th>
                                    <th className="pl-5">ID</th>
                                    <th className="pl-5">CPF</th>
                                    <th className="pl-5">Name</th>
                                    <th className="pl-5">Gender</th>
                                    <th className="pl-5">Date</th>
                                    <th className="pl-5">Email</th>
                                    <th className="pl-5">Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map((client, index) => (
                                    <tr key={index}>
                                        <td>
                                            <Link to="/edit">
                                                <button
                                                    onClick={() => editClient(client)}
                                                    className="btn btn-sm btn-success">Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => deleteClient(client.id)}
                                                className="btn btn-sm btn-danger">Delete</button>
                                        </td>
                                        <td>{client.id}</td>
                                        <td>{client.cpf}</td>
                                        <td>{client.nome}</td>
                                        <td>{client.sexo}</td>
                                        <td>{client.dat_nasc}</td>
                                        <td>{client.email}</td>
                                        <td>{client.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <br />
            <Link to="/create">
                <button
                    onClick={() => setClient({
                        cpf: "",
                        nome: "",
                        sexo: "",
                        dat_nasc: "",
                        email: "",
                        phone: ""
                    })}
                    className="btn btn-sm btn-secondary btn-block">Create</button>
            </Link>
        </div>
    );
}