import {BackHandler} from "react-native";

const backOff = () => {
  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    () => {
      return true;
    },
  );

  return () => {
    backHandler.remove();
  };
}

const backTo = (navigation: any, page: string) => {
  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    () => {
      navigation.navigate(page)
      return true;
    },
  );
  return () => {
    backHandler.remove();
  };
}

export const HandlerUtils = {
  disabled: {
    backOff, backTo
  }
}