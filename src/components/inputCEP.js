import React, { Component } from 'react';
import { FetchCepData } from '../actions/fetchCepData';
import { connect } from 'react-redux';

class InputCEP extends Component {
    constructor(props){
        super(props);
        this.state = {
            cep: '',
        }
    }

    render(){
        console.log(this.props.cepData);
        return(
            <div>
                <input onChange={(event) => this.setState({cep: event.target.value})}></input>
                <button onClick={() => this.props.FetchCepData(this.state.cep)}>Buscar CEP!</button>
                <h4>{this.props.cepData.bairro}</h4>
            </div>
            );
    }
}

function mapStateToProps(state){
    return{
        cepData: state.cepData,
    };
}

export default connect(mapStateToProps, { FetchCepData })(InputCEP);