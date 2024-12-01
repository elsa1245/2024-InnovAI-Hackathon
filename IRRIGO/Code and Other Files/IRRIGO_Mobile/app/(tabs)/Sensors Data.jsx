import { Alert, Image, ScrollView, Text, TouchableOpacity, View, StyleSheet,Dimensions } from 'react-native'
import React, { useState }  from 'react'
import tw from 'twrnc';;
import {  } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { Link } from 'expo-router';
import   MapView,{ Marker} from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';


import { Video, ResizeMode } from 'expo-av';
import { icons } from '../../constants';

import { SafeAreaView } from 'react-native-safe-area-context';

const SensorsData = () => {
  const [selectedMarkerId, setSelectedMarkerId] = useState(1);

  const sensorData = {
      1: {
          datasets: [
              {
                  data: [30, 60, 30, 90, 100, 30],
                  color: (opacity = 1) => `rgba(0, 173, 66, ${opacity})`, // optional
                  strokeWidth: 2 // optional
              },
              {
                  data: [40, 70, 40, 100, 120, 40],
                  color: (opacity = 1) => `rgba(0, 87, 173, ${opacity})`, // optional
                  strokeWidth: 2 // optional
              },
              {
                  data: [20, 45, 28, 80, 99, 43],
                  color: (opacity = 1) => `rgba(235, 176, 0, ${opacity})`,
                  strokeWidth: 2
              },
              {
                  data: [10, 20, 10, 30, 50, 10],
                  color: (opacity = 1) => `rgba(255, 83, 36, ${opacity})`,
                  strokeWidth: 2
              },
              
          ]
      },
      2: {
          datasets: [
              {
                  data: [20, 45, 28, 80, 99, 43],
                  color: (opacity = 1) => `rgba(0, 173, 66, ${opacity})`,
                  strokeWidth: 2
              },
              {
                  data: [10, 20, 10, 30, 50, 10],
                  color: (opacity = 1) => `rgba(0, 87, 173, ${opacity})`,
                  strokeWidth: 2
              },
              {
                  data: [30, 60, 30, 90, 100, 30],
                  color: (opacity = 1) => `rgba(235, 176, 0, ${opacity})`,
                  strokeWidth: 2
              },
              {
                  data: [40, 70, 40, 100, 120, 40],
                  color: (opacity = 1) => `rgba(255, 83, 36, ${opacity})`,
                  strokeWidth: 2
              }
          ]
      },
      3: {
          datasets: [
              {
                  data: [30, 60, 30, 90, 100, 30],
                  color: (opacity = 1) => `rgba(0, 173, 66, ${opacity})`,
                  strokeWidth: 2
              },
              {
                  data: [40, 70, 40, 100, 120, 40],
                  color: (opacity = 1) => `rgba(0, 87, 173, ${opacity})`,
                  strokeWidth: 2
              },
              {
                  data: [20, 45, 28, 80, 99, 43],
                  color: (opacity = 1) => `rgba(235, 176, 0, ${opacity})`,
                  strokeWidth: 2
              },
              {
                  data: [10, 20, 10, 30, 50, 10],
                  color: (opacity = 1) => `rgba(255, 83, 36, ${opacity})`,
                  strokeWidth: 2
              }
          ]
      },
  };


  const markers = [
      {
          id: 1,
          coordinate: {
              latitude: 33.705988,
              longitude: -7.379480,
          },
          title: "Sensor 1",
          image: require('@/assets/images/sensor.png')
      },
      {
          id: 2,
          coordinate: {
              latitude: 33.706100,
              longitude: -7.379600,
          },
          title: "Sensor 2",
          image: require('@/assets/images/sensor.png')
      },
      {
          id: 3,
          coordinate: {
              latitude: 33.706200,
              longitude: -7.379700,
          },
          title: "Sensor 3",
          image: require('@/assets/images/sensor.png')
      },
  ];

  const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
          {
              data: [20, 45, 28, 80, 99, 43],
              color: (opacity = 1) => `rgba(0, 173, 66, ${opacity})`, // optional
              strokeWidth: 2 // optional
          },
          {
              data: [10, 20, 10, 30, 50, 10],
              color: (opacity = 1) => `rgba(0, 87, 173, ${opacity})`, // optional
              strokeWidth: 2 // optional
          },
          {
              data: [30, 60, 30, 90, 100, 30],
              color: (opacity = 1) => `rgba(235, 176, 0, ${opacity})`, // optional
              strokeWidth: 2 // optional
          },
          {
              data: [40, 70, 40, 100, 120, 40],
              color: (opacity = 1) => `rgba(255, 83, 36, ${opacity})`, // optional
              strokeWidth: 2 // optional
          }
      ],
      legend: ["Soil Humdidity","Air Humidity","Luminance","Temperature"] // optional
    };

  const chartConfig = {
      backgroundGradientFrom: "#E3EFEC",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#E3EFEC",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
  };

  return (
    <View style={tw`flex-1 bg-[#E3EFEC]`}>
            <View style={tw`flex-1`}>
                <MapView
                    minZoomLevel={15}
                    mapType="satellite" 
                    style={tw`flex-1`}
                    initialRegion={{
                        latitude: 33.705988,
                        longitude: -7.379480,
                        latitudeDelta: 0.00230,
                        longitudeDelta: 0.00105,
                    }}
                    
                    
                >
                    {
                        markers.map((marker) => (
                            <Marker
                                key={marker.id}
                                coordinate={marker.coordinate}
                                title={marker.title}
                                onPress={() => setSelectedMarkerId(marker.id)}
                            >
                                <Image 
                                    source={marker.image}
                                    style={[
                                        { width: 35, height: 35 },
                                        selectedMarkerId === marker.id && 
                                        { tintColor: 'blue' } // Change color when selected
                                    ]}
                                />
                            </Marker>
                        ))
                    }
                </MapView>

            </View>
            <Text style={tw`text-3xl p-4 text-center `}>Sensor {selectedMarkerId} Data :</Text>
            <ScrollView 
                style={tw`flex-1 `} 
                contentContainerStyle={tw`items-center justify-center pb-10`}
            >
                <View style={tw`flex-row justify-center items-center gap-10 mt-8 h-[50] `}>
                <LineChart
                     data={{
                        labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm'],
                        datasets: sensorData[selectedMarkerId].datasets,
                        legend: ["Soil Humdidity","Air Humidity","Luminance","Temperature"]
                    }}
                    width={Dimensions.get("window").width - 40}
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    withShadow={false}
                />
                </View>
                <View style={tw`flex-row justify-center items-center gap-10 mt-8 `}>
                    <MaterialIcons name="help" size={30} color="black" />
                    <Text style={tw`text-xl p-4 w-100`}>  the irrigation is recommended</Text>
                </View>
                
            </ScrollView>
            <View style={tw`flex-row justify-center items-center gap-2 m-2 mb-6 `}>
                <View style={tw`flex-1 w-full items-center bg-[#A7CFC6] py-2 rounded-2`}>
                    <Link href="/manage-end-devices" style={tw`text-white w-full`}>
                        <View style={tw`flex-col flex justify-center items-center w-full`}>
                            <Text style={tw`text-white text-lg`}>Manage</Text>
                            <Text style={tw`text-white text-lg`}>End devices</Text>
                        </View>
                    </Link>
                </View>
                <View style={tw`flex-1 w-full justify-center items-center bg-[#A7CFC6] py-2 rounded-2`}>
                    <Link href="/manage-zones" style={tw`text-white`}>
                        <View style={tw`flex-col flex justify-center items-center`}>
                            <Text style={tw`text-white text-lg`}>Manage</Text>
                            <Text style={tw`text-white text-lg`}>Zones</Text>
                        </View>
                    </Link>
                </View>
            </View>
        </View>
  )
}

export default SensorsData