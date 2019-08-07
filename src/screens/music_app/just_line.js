import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";

export default class JustLine extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeseriesDs: {
                type: 'timeseries',
                renderAt: 'container',
                width: '600',
                height: '400',
                dataSource: {
                    caption: { text: 'Online Sales of a SuperStore in the US' },
                    data: null,
                    yAxis: [{
                        plot: [{
                            value: 'Sales ($)'
                        }]
                    }]
                }
            }
        };
        this.libraryPath = Platform.select({
            // Specify fusioncharts.html file location
            android: {
                uri: "file:///android_asset/fusioncharts.html"
            },
            ios: require("../../../assets/fusioncharts.html")
        });
    }

    componentDidMount() {
        this.fetchDataAndSchema();
    }

    fetchDataAndSchema() {
        const jsonify = res => res.json();
        const dFetch = fetch(
        'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-react-native/data.json'
        ).then(jsonify);
        // This is the remote url to fetch the schema.
        const sFetch = fetch(  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-react-native/schema.json'
        ).then(jsonify);
        Promise.all([dFetch, sFetch]).then(res => {
            const data = res[0];
            const schema = res[1];
            console.log(data);
            console.log(schema);
            this.setState({ dataJson: data, schemaJson: schema });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>FusionCharts Integration with React Native</Text>
                <View style={styles.chartContainer}>
                <FusionCharts
                type={this.state.type}
                width={this.state.width}
                height={this.state.height}
                dataFormat={this.state.dataFormat}
                dataSource={this.state.dataSource}
                libraryPath={this.libraryPath} // set the libraryPath property
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
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        paddingBottom: 10
    },
    chartContainer: {
        height: 400,
        borderColor: "#000",
        borderWidth: 1
    }
});