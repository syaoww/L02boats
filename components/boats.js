import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    margin: {
        margin: 20,
    },
    boatElements: {
        flexDirection: "row",
        marginLeft: 5,
        marginTop: 5,
        justifyContent: "center",
    },
    boat: {
        backgroundColor: 'darkseagreen',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        margin: 10
    },
    parent: {
        backgroundColor: 'whitesmoke',
        flex: 1
    }
});

const Boat = ({name, description, icon_name, picture})=> {
    return (
        <View style={styles.boat}>
            <View style={[styles.boatElements, {backgroundColor: 'darkslategray'}]}>
                <Icon name={icon_name} size={25} color={"white"} />
                <Text style={[styles.titleText, {color:"white"}]}>
                    {name}
                </Text>
            </View>
            <View style={[styles.boatElements, {borderWidth: 1, borderColor: 'black', backgroundColor: 'whitesmoke', padding: 5}]}>
                <Text>
                    {description}
                </Text>
            </View>
            <Image source={picture} style={{width:380, height:500, alignSelf: 'center', marginTop: 5, marginBottom:10, borderWidth: 1, borderColor: 'whitesmoke'}}/>
        </View>
    );
};

class AllBoats extends React.Component {
    render() {
        return (
            <ScrollView style={styles.parent}>
                <Text style={[styles.titleText, {marginTop: 30}]}>
                    GetABoat - For Sale
                </Text>
                <Boat icon_name={"sailboat"}
                      name={"Sea Ray 500 Sundancer"}
                      description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                      picture={require('../img/sea_ray.jpg')}/>
                <Boat icon_name={"sailboat"}
                      name={"Four Winns Horizon 180"}
                      description={"A sporty look and refined details truly set the Horizon 180 above all others."}
                      picture={require('../img/four_winns.jpg')}/>
                <Boat icon_name={"sailboat"}
                      name={"Flipper 640 ST"}
                      description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                      picture={require('../img/flipper.jpg')}/>
                <Boat icon_name={"sailboat"}
                      name={"Princess V48"}
                      description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                      picture={require('../img/princess.jpg')}/>
                <Boat icon_name={"sailboat"}
                      name={"Bayliner 175 Bowrider"}
                      description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                      picture={require('../img/bayliner.jpg')}/>
                <Boat icon_name={"sailboat"}
                      name={"Fairline Targa 47"}
                      description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                      picture={require('../img/fairline.jpg')}/>
            </ScrollView>
        );
    }
}

export default AllBoats;