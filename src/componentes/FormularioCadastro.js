import React, { useEffect, useState } from "react";

const FormularioCadastro = (props) => {

    //Dados
    const informacoes = {
        nomeCompleto: '',
        telefone: '',
        email: '',
        endereco: ''
    }

    let [values, setValues] = useState(informacoes)

    useEffect(() => {
        if (props.idAtual == '') {
            setValues({
                ...informacoes
            })
        } else {
            setValues({
                ...props.infoClientes[props.idAtual]
            })
        }
    }, [props.idAtual, props.infoClientes])

    const handleInputChange = e => {
        let { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addEedit(values)
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="form-group-prepend">
                    <div className="form-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" value={values.nomeCompleto}
                    onChange={handleInputChange} />
            </div>

            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="form-group-prepend">
                        <div className="form-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="99 9999 9999" name="telefone" value={values.telefone}
                        onChange={handleInputChange} />
                </div>

                <div className="form-group input-group col-md-6">
                    <div className="form-group-prepend">
                        <div className="form-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="...@email.com" name="email" value={values.email}
                        onChange={handleInputChange} />
                </div>
            </div>

            <div className="form-group">
                <textarea className="form-control" placeholder="Endereço" name="endereco" value={values.endereco}
                    onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <input type="submit" value={props.idAtual == '' ? 'Salvar' : 'Atualizar'} className="btn btn-primary btn-block" />
            </div>

        </form>
    )
}

export default FormularioCadastro