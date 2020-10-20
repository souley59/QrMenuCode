import React from 'react';
import { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class MapInput extends Component {
    render() {
        return (
            <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2}
                autoFocus={true}
                returnKeyType={'search'}
                listViewDisplayed={false}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    this.props.notifyChange(details.geometry.location);
                }
                }
                query={{
                    key: 'AIzaSyDWRq1lFBIRUE730aBAqUZ066QrmuIU5YM',
                    language: 'fr'
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={200}
            />
        );
    }
}
export default MapInput;