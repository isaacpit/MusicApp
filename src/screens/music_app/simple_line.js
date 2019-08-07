import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';

const jsonify = res => res.json();
// This is the remote url to fetch the data.
const dataFetch = fetch(
  'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json'
).then(jsonify);
// This is the remote url to fetch the schema.
const schemaFetch = fetch(
  'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/plotting-multiple-series-on-time-axis-schema.json'
).then(jsonify);

export default class SimpleLine extends Component {
  constructor(props) {
    super(props);
    this.apiCaller = null;
    this.state = {
      type: 'timeseries',
      width: '100%',
      height: '100%',
      dataFormat: 'json',
      chartType: '',
      dataSource: {
        data: null,
        caption: {
          text: 'Cariaco Basin Sampling'
        },
        subcaption: {
          text: 'Analysis of O₂ Concentration and Surface Temperature'
        },
        yAxis: [
          {
            plot: 'O2 concentration',
            min: '3',
            max: '6',
            title: 'O₂ Concentration (mg/L)'
          },
          {
            plot: 'Surface Temperature',
            min: '18',
            max: '30',
            title: 'Surface Temperature (°C)'
          }
        ]
      },
      schemaJson: null,
      dataJson: null,
      events: {
        dataplotclick: (e, a) => {
          Alert.alert(`You clicked on ${e.data.categoryLabel}`);
        }
      }
    };
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: { uri: 'file:///android_asset/fusioncharts.html' },
      ios: require('../../../assets/fusioncharts.html')
    });
  }

  // We are creating the DataTable immidietly after the component is mounted
  componentDidMount() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      this.setState({ dataJson: data, schemaJson: schema });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Plotting two variables (measures)</Text>
        <View style={styles.chartContainer}>
          <FusionCharts
            dataJson={this.state.dataJson}
            schemaJson={this.state.schemaJson}
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
            events={this.state.events}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10
  },
  chartContainer: {
    height: 400,
    borderColor: '#000',
    borderWidth: 1
  }
});