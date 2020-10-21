import React from "react";
import mapboxgl from "mapbox-gl";
import "./App.css";

mapboxgl.accessToken =
    "pk.eyJ1IjoibXRyZXcyMDE1IiwiYSI6ImNrZnhjNmJoNzAzMXkyc3FxNm9jMW03N3QifQ.C99bUzZlNCwVWx5-gvfyQw";

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -121.8235,
            lat: 37.2562,
            zoom: 16
        };
    }

    
    componentDidMount() {

        mapboxgl.accessToken =
            "pk.eyJ1IjoibXRyZXcyMDE1IiwiYSI6ImNrZnhjNmJoNzAzMXkyc3FxNm9jMW03N3QifQ.C99bUzZlNCwVWx5-gvfyQw";

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        const myHome = new mapboxgl.Marker()
            .setLngLat([-121.8235, 37.2562])
            .setPopup(new mapboxgl.Popup().setHTML("<h1>My Home</h1>"))
            .addTo(map);

        map.on("move", () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

        
    }

    render() {
        return (
            <div>
                <div>
                    <div className="sidebarStyle">
                        Longitude: {this.state.lng} | Latitude: {this.state.lat}{" "}
                        | Zoom: {this.state.zoom}
                    </div>
                </div>
                <div
                    ref={el => (this.mapContainer = el)}
                    className="mapContainer"
                />
            </div>
        );
    }
}

export default Application;
