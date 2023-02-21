import { Animated } from "react-native";
import {Component} from "react";

class Fade extends Component<any, any> {
  private _visibility: Animated.Value | any;
  constructor(props: any) {
    super(props);
    this.state = {
      visible: props.visible,
    };
  };

  componentWillMount() {
    this._visibility = new Animated.Value(this.props.visible ? 1 : 0);
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.visible) {
      this.setState({ visible: true });
    }
    this._visibility && Animated.timing(this._visibility, {
      useNativeDriver: true,
      toValue: nextProps.visible ? 1 : 0,
      duration: 300,
    }).start(() => {
      this.setState({ visible: nextProps.visible });
    });
  }

  render() {
    const { visible, style, children, ...rest } = this.props;

    const containerStyle = {
      opacity: this._visibility && this._visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
      transform: [
        {
          scale: this._visibility && this._visibility.interpolate({
            inputRange: [0, 1],
            outputRange: [1.1, 1],
          }),
        },
      ],
    };

    const combinedStyle = [containerStyle, style];
    return (
      <Animated.View style={combinedStyle} {...rest}>
        {children}
      </Animated.View>
    );
  }
}

export default Fade