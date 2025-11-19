import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity } from 'react-native';

// Exercise 1
const datasource = [
    // { key: 'a' },
    // { key: 'b' },
    // { key: 'c' },
    // { key: 'd' },
    // { key: 'e' },
    // { key: 'f' },
    // { key: 'g' },
    // { key: 'h' },
    // { key: 'i' },
    // { key: 'j' },
    // { key: 'k' },
    // { key: 'l' },
    // { key: 'm' },
    // { key: 'n' },
    // { key: 'o' },
    // { key: 'p' },
    // { key: 'q' },
    // { key: 'r' },
    // { key: 's' },
    // { key: 't' },
    // { key: 'u' },
    // { key: 'v' },
    // { key: 'w' },
    // { key: 'x' },
    // { key: 'y' },
    // { key: 'z' },
    {
        title: "Vowels",
        color: "skyblue",
        data: [
            { key: "a" },
            { key: "e" },
            { key: "i" },
            { key: "o" },
            { key: "u" },
        ],
    },
    {
        title: "Consonants",
        color: "khaki",
        data: [
            { key: "b" },
            { key: "c" },
            { key: "d" },
            { key: "f" },
            { key: "g" },
            { key: "h" },
            { key: "j" },
            { key: "k" },
            { key: "l" },
            { key: "m" },
            { key: "n" },
            { key: "p" },
            { key: "q" },
            { key: "r" },
            { key: "s" },
            { key: "t" },
            { key: "v" },
            { key: "w" },
            { key: "x" },
            { key: "y" },
            { key: "z" },
        ],
    },
];

export default function App() {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}>
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    // return (
    //     <View style={styles.container}>
    //         {/* STEP 5: Add FlatList */}
    //         <FlatList data={datasource} renderItem={renderItem} />
    //
    //         <StatusBar style="auto" />
    //     </View>
    // );

    return (
        <View style={styles.container}>
            <SectionList
                contentContainerStyle={{padding:10}}
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section }) => (
                    <View
                        style={[
                            styles.headerContainer,
                            { backgroundColor: section.color },
                        ]}
                    >
                        <Text style={styles.headerText}>{section.title}</Text>
                    </View>
                )}
            />
            <StatusBar style="auto" />
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         justifyContent: 'center',
//         paddingTop: 50,
//     },
//
//     // STEP 3: opacityStyle
//     opacityStyle: {
//         borderWidth: 1,
//         margin: 5,
//     },
//
//     // STEP 3: textStyle
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: 'left',
//     },
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 3,
        backgroundColor: 'white',
        paddingTop: 15,
    },

    opacityStyle: {
        borderWidth: 1,
    },

    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },

    headerText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },

    headerContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
});
