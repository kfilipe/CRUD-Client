import React, { useEffect, useState } from "react";
import FormularioCadastro from "./FormularioCadastro";
import fireDB from "../database/firebase";

const Cadastro = () => {

    let [infoClientes, setInfoCLientes] = useState({})

    let [idAtual, setIdAtual] = useState('')

    useEffect(() => {
        fireDB.child('Clientes').on('value', dbPrint => {
            if (dbPrint.val() != null) {
                setInfoCLientes({
                    ...dbPrint.val()
                })
            } else {
                setInfoCLientes({})
            }
        })
    }, [])

    const addEedit = obj => {

        if (idAtual == '') {

            console.log(obj)
            fireDB.child('Clientes').push(
                obj,
                error => {
                    if (error) {
                        console.log(error)
                    } else {
                        setIdAtual('')
                    }
                }
            )
        } else {
            fireDB.child(`Clientes/${idAtual}`).set(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        }

    }

    const deleteCLiente = key => {
        if (window.confirm('Deseja deletar este cliente?')) {
            fireDB.child(`Clientes/${key}`).remove(
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        }
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Cadastro de Clientes</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <FormularioCadastro {...({ addEedit, idAtual, infoClientes })} />
                </div>
                <div className="col-md-7">
                    <table className="table table-boderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <td>Nome Completo</td>
                                <td>Telefone</td>
                                <td>Email</td>
                                <td>Endereço</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(infoClientes).map(id => {
                                    return <tr key={id}>
                                        <td> {infoClientes[id].nomeCompleto} </td>
                                        <td> {infoClientes[id].telefone} </td>
                                        <td> {infoClientes[id].email} </td>

                                        <td>
                                            <a className="btn btn-primary" onClick={() => { setIdAtual(id) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>

                                            <a className="btn btn-danger" onClick={() => deleteCLiente(id)}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    )
}

export default Cadastro