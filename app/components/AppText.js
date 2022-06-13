import {Text, Alert} from 'react-native';

export default function AppText(props) {
  
    // added property declarations
    const { textValue, onPress, primary, secondary, tertiary, success, warning, lblue, bold, medium, thin, italic, center, right, xl, lg, md, sm, mrgH1, mrgH2 } = props;

    if (!textValue) return Alert.alert('No title added!');

    // added conditions
    const TEXT_SIZE =  xl ? 40 : lg ? 30 : md ? 24 : sm ? 16 : 18; 
    const TEXT_WEIGHT = bold ? 'bold' : medium ? '600' : thin ? '200' : 'normal';
    const TEXT_STYLE = italic ? 'italic' : 'normal';
    const TEXT_COLOR = primary ? '#FCBF49' : secondary ? '#003049' : tertiary ? '#F77F00' : success ? '#0FB60B' : warning ? '#E21C1C' : lblue ? '#16B9DD' : '#000';
    const TEXT_ALIGN = center ? 'center' : right ? 'right' : 'left';
    const TEXT_MARGIN_HORIZONTAL = mrgH1 ? 5 : mrgH2 ? 10 : 0;

    return (
        <Text style={{
            color: TEXT_COLOR,
            textAlign: TEXT_ALIGN,
            fontSize: TEXT_SIZE,
            fontWeight: TEXT_WEIGHT,
            fontStyle: TEXT_STYLE,
            marginHorizontal: TEXT_MARGIN_HORIZONTAL
        }} 
        onPress={onPress}>{textValue}</Text>
    );
};
