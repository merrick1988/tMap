import React from 'react';

const WorldMap = React.createClass({
    componentDidMount: function() {
        var map = AmCharts.makeChart( "mapdiv", {
            "type": "map",
            "dataProvider": {
                "map": "worldLow",
                "getAreasFromMap": true
            },
            "areasSettings": {
                "autoZoom": true,
                "color": "#d8d3db",
                "selectedColor": "#d2959b",
                rollOverColor: "#d2959b"
            },
            "smallMap": {}
        } );

    },
    render() {
        return (
            <div id="mapdiv" className="world-map"></div>
        )
    }
});

export default WorldMap;