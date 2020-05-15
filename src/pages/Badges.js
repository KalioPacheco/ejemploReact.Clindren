import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {

    // Siempre es bueno inicializar estado en el constructor
    constructor(props) {
        console.log('constructor()')
        super(props);
        this.state = {
            data: []
        };
    }

    // Simulacion de peticion a API
    componentDidMount() {
        console.log('ComponentDidMount()');

        //Para poder solucionar el problema  tenemos que asignar un id para podder limpiar el timeout
        this.timeoutId = setTimeout(() => {
            this.setState({
                data: [
                    {
                        id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                        firstName: 'Freda',
                        lastName: 'Grady',
                        email: 'Leann_Berge@gmail.com',
                        jobTitle: 'Legacy Brand Director',
                        twitter: 'FredaGrady22221-7573',
                        avatarUrl:
                            'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
                    },
                    {
                        id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                        firstName: 'Major',
                        lastName: 'Rodriguez',
                        email: 'Ilene66@hotmail.com',
                        jobTitle: 'Human Research Architect',
                        twitter: 'MajorRodriguez61545',
                        avatarUrl:
                            'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
                    },
                    {
                        id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                        firstName: 'Daphney',
                        lastName: 'Torphy',
                        email: 'Ron61@hotmail.com',
                        jobTitle: 'National Markets Officer',
                        twitter: 'DaphneyTorphy96105',
                        avatarUrl:
                            'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
                    },
                ]
            })
        }, 200);


    }

    componentDidUpdate(prevProps, prevState) {
        console.log('5 componentDidUpdate()')
        console.log({
            prevProps: prevProps, prevState: prevState
        })
        console.log({
            props: this.props, state: this.state
        })
    }

    render() {
        console.log('render()');
        return (
            <React.Fragment>

                <div className="Badges">
                    <div className="BadgeNew">
                        <div className="BadgeNew__containerf">
                            <img
                                src={confLogo}
                                alt="Conf Logo"
                            />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <BadgesList badges={this.state.data}/>
                </div>
                <div className="BadgeNew__ejemplo">
                    <div>
                        <p>Soy caja uno</p>
                    </div>
                    <div>
                        <p>
                            soy caja dos
                        </p>
                    </div>
                    <div>
                        <p>Soy caja tres</p>
                    </div>
                    <div>
                        <p>
                            soy caja cuatro
                        </p>
                    </div>
                    <div>
                        <p>Soy caja cuatro</p>
                    </div>
                    <div>
                        <p>
                            soy caja cinco
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    componentWillUnmount() {
        // Esto puede traer algunos problemas debido a que como esta cargando y navegamos en otra pagina
        // nos salen advertencias, tenemos que solucionar esto

        console.log('WillUnMount');

        clearTimeout(this.timeoutId)
        //Le pasamos le id para que lo limpie y de esta forma
        //optimizar el proyecto
    }
}

export default Badges;

