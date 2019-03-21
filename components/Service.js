import Component from 'react';


class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {services: [
            {
                name: "Servicio1",
                description: "Descripción1",
                url_image: "URLIMAGE"
            },
            {
                name: "Servicio2",
                description: "Descripción2",
                url_image: "URLIMAGE2"
            }
        ]};
    }

    render() {
        let servicesUI = this.state.services.map(service => {
            return (
                <div className="card">
                <img className="card-img-top" src={service.url_image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description}</p>
                    <a href="#" className="btn btn-primary">Reservar</a>
                </div>
            </div>
            )
        });

        return (
            <div>
                {servicesUI}
            </div>
        );
    }
}

export default Service;