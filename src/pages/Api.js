import React from 'react';
import './styles/Api.css'
import Loader from '../components/Loader';
import Temp from './temporales';
import {Route, Link} from 'react-router-dom';
import axios from 'axios'


class Api extends React.Component {

    state = {
        nextPage: 1, //Para poder mostrar las demas paginas con personajes
        loading: true, //Para poder ver el loading
        error: null,
        data: {
            results: [],
        },
        text: 'Hola'
    } //Inicializamos estado con  data y un obejto vacio

    componentDidMount() {
        this.fetchCharacters()
    }

    //Una llamada a Api es una funcion asincrona, ya que no sabemos
    // cuando va a terminar

    //fetch es una funcion que trae el lenguaje, que traen los navegadores
    // puedes pasarle una Url y hara una peticion get

    fetchCharacters = async () => {
        const temp = await axios.get(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`)
        console.log(temp.data)
        this.setState({loading: true, error: null})
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`); //Para poder mostrar los demas personajes, tenemos que pasarle la page
            const data = await response.json();  //Sirve para poder sacar los valores
            //Como queremos guardar los resultados los guardamos en state
            this.setState({
                loading: false, //Para poder ocultar el loading
                data: {
                    info: data.info,
                    results: [].concat(
                        this.state.data.results, data.results
                    ) //Todo esto nos sirve para concatenar y que se vayan mostrando mas personajes sin necesidad de quitar a los demas
                },
                nextPage: this.state.nextPage + 1 //Aumentamos el valor para que pueda mostrar los demas personajes
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    onChangeText = () => {
        this.setState({text: 'Gold'})
    }

    render() {
        if (this.state.error) {
            return `Error: ${this.state.error.message}`;
        }
        return (
            <React.Fragment>
                <div className="col-lg-12">
                    <div className="container">
                        <div className="row">
                            {this.state.data.results.map(character => (
                                <div className="card 1" key={character.id}>
                                    <div className="card_image">
                                        <img src={character.image} alt="Otra"/>
                                    </div>
                                    <p className="title">{character.name}</p>
                                </div>

                            ))}
                            {this.state.loading && (  //Esto quiere decir que si loading es verdadero, se mostrara lo siguiente
                                <div className="loader">
                                    <Loader/>

                                </div>
                            )}
                            {!this.state.loading && ( //Para mostrar el boton cuando no este el loading
                                //Este boton servira para poder mostrar los demas resultados

                                <button className="btn btn-primary" onClick={() => this.fetchCharacters()}>Load
                                    More</button>

                            )}


                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }

}

export default Api;