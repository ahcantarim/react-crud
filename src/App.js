import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Table } from './components/table';
import { Form } from './components/form';

import './App.css';

const App = () => {

  const url = "http://localhost:3001/clientes";

  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({
    cpf: "",
    nome: "",
    sexo: "",
    dat_nasc: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    fetchClients();
  }, [client]);

  const fetchClients = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setClients(data))
  }

  const deleteClient = (id) => {
    return fetch(`${url}/${id}`, {
      method: 'delete'
    })
      .then(response => response.json())
      .then(fetchClients());
  }

  const editClient = (client) => {
    setClient(client);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (client.id !== undefined) {

      return fetch(`${url}/${client.id}`, {
        method: 'put',
        body: JSON.stringify(client),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(fetchClients())
        .then(setClient({
          cpf: "",
          nome: "",
          sexo: "",
          dat_nasc: "",
          email: "",
          phone: ""
        }));

    } else {

      return fetch(url, {
        method: 'post',
        body: JSON.stringify(client),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(fetchClients())
        .then(setClient({
          cpf: "",
          nome: "",
          sexo: "",
          dat_nasc: "",
          email: "",
          phone: ""
        }));

    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setClient({ ...client, [id]: value });
  }

  return (

    <BrowserRouter>
      <Switch>

        <Route
          path="/"
          exact
          render={() => (
            <Table
              clients={clients}
              setClient={setClient}
              editClient={editClient}
              deleteClient={deleteClient} />
          )} />

        <Route
          path="/edit"
          exact
          render={() => (
            <Form
              client={client}
              handleSubmit={handleSubmit}
              handleChange={handleChange} />
          )} />

        <Route
          path="/create"
          exact
          render={() => (
            <Form
              client={client}
              handleSubmit={handleSubmit}
              handleChange={handleChange} />
          )} />

      </Switch>
    </BrowserRouter>

  );
}

export default App;
