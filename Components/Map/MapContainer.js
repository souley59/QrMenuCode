import React, { Component }  from 'react';
import { View } from 'react-native';
import MapInput from './MapInput';
import MyMapView from './MyMapView';

export default class MapContainer extends Component{
    state={
        region:{},
    };

    componentDidMount() {
        this.getInitialState();
    }

    getInitialState() {
        getLocation().then(data => {
            this.updateState({
                latitude: data.latitude,
                longitude: data.longitude,
            });
        });
    }

    updateState(location) {
        this.setState({
            region: {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003,
            },
        });
    }
    onMapRegionChange(region) {
        this.setState({ region });
    }


    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={{ flex: 0.4 }}>
                    <MapInput notifyChange={(loc) => this.getCoordsFromName(loc)} />
                </View>
                {
                    this.state.region['latitude'] ?
                    <View style={{ flex: 1 }} >
                        <MyMapView
                            region={this.state.region}
                            onRegionChange={(reg) => this.onMapRegionChange(reg)} />
                </View> : null
                                    }
            </View>
        )
    }
}    
export const getLocation = () => {
        return new Promise(
            (resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (data) => resolve(data.coords),
                    (err) => reject(err)
                );
            } 
        );
    }

    