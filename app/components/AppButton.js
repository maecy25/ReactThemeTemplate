import {TouchableOpacity, Text, Alert} from 'react-native';

export default function AppButton(props) {
  
    // added property declarations
    const { title, onPress, primary, secondary, tertiary, success, warning, large, height, width, baseColor, textColor, center, right } = props;

    if (!title) return Alert.alert('No title added!');

    // added conditions
    const HEIGHT = large ? 80 : height ? height : 40;
    const WIDTH = width ? width : '100%';
    const BACKGROUND_COLOR = primary ? '#FCBF49' : secondary ? '#003049' : tertiary ? '#F77F00' : success ? '#0FB60B' : warning ? '#E21C1C' : baseColor ? baseColor : '#16B9DD';
    const TEXT_COLOR = primary ? '#003049' : secondary ? '#FCBF49' : baseColor ? baseColor : '#fff';
    const BTN_ALIGN = center ? 'center' : right ? 'flex-end' : 'flex-start';
    const FONT_SIZE = large ? 24 : 16;
 
    return (
        <TouchableOpacity
            // added styling
            style={{
                alignSelf: BTN_ALIGN,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: BACKGROUND_COLOR,
                height: HEIGHT,
                width: WIDTH,
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 10
            }}
            onPress={onPress}>
            <Text style={{color: TEXT_COLOR, fontSize: FONT_SIZE}}>{title}</Text>
        </TouchableOpacity>
    );
};
