import React from 'react';
import weatherApi from './weatherApi';

class FakeWeather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: null
    };
  }

  listOfCities = ['Istanbul', 'Tokyo', 'London', 'New York'];

  citySelectionHandler = (city) => {
    this.setState({ selectedCity: city });
  }

  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'horizontal', justifyContent: 'space-between', fontSize: 20 }}>
          {this.listOfCities.map(city =>
            <div key={city}
              onClick={() => this.citySelectionHandler(city)}
              value={city}
              style={{ padding: 50, background: this.state.selectedCity === city ? 'lightblue' : 'white' }}
            >
              {city}
            </div>)}
        </div>
        <div style={{ height: 300, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'center', fontSize: 30, textTransform: 'capitalize' }}>
            {weatherApi(this.state.selectedCity)}
          </div>
        </div>
      </div >
    );
  }
}

export default FakeWeather;