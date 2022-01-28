import React, { memo, FC } from 'react';
import { View, Text } from 'react-native';

interface Props {
  foo?: string;
}

export const SampleComponent: FC<Props> = memo(({ foo }) => (
  <View>
    <Text>
      SampleComponent
      {foo}
    </Text>
  </View>
));

SampleComponent.displayName = 'SampleComponent';

export default SampleComponent;
