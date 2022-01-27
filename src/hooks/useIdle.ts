import {useState} from 'react';
import {PanResponder} from 'react-native';

export interface UserInactivityProps {
  timeout: number;
}

const useIdle = ({timeout}: UserInactivityProps) => {
  const [isIdle, setIsIdle] = useState(false);

  /* panResponder should be used at the first node */
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponderCapture: () => {
      setIsIdle(false);

      setTimeout(() => {
        setIsIdle(true);
      }, timeout);

      return false;
    },
  });

  return {isIdle, panResponder};
};

export default useIdle;
