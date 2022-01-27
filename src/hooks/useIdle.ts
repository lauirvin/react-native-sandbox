import {useEffect, useState} from 'react';
import {PanResponder} from 'react-native';

export interface UserInactivityProps {
  timeout: number;
}

const useIdle = ({timeout}: UserInactivityProps) => {
  const [isIdle, setIsIdle] = useState(false);

  /* On screen load non-touch interaction idle timeout */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIdle(true);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout]);

  /* Pass {...panResponder.panHandlers} into the view container */
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
