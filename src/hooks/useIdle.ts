import { useCallback, useEffect, useRef, useState 
} from 'react';
import { PanResponder } from 'react-native';

export interface UserInactivityProps {
  timeout: number;
}

type Timeout = ReturnType<typeof setTimeout>;

const useIdle = ({ timeout }: UserInactivityProps) => {
  const [isIdle, setIsIdle] = useState(false);

  const timer = useRef<Timeout>();

  const resetInactivityTimeout = useCallback(() => {
    clearTimeout(timer.current as Timeout);
    timer.current = setTimeout(() => {
      /* --------- User is idle --------- */
      setIsIdle(true);
    }, timeout);
  }, []);

  useEffect(() => {
    resetInactivityTimeout();
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        /* --------- User is not idle --------- */
        setIsIdle(false);

        resetInactivityTimeout();

        return false;
      },
    }),
  ).current;

  return { panResponder, isIdle };
};

export default useIdle;
