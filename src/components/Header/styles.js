import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Colors from '~/constants/Colors';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 40px 0;
  padding: ${getStatusBarHeight(true)}px 20px 0 20px;
`;

export const HeaderButton = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const HeaderIcon = styled(Icon).attrs({
  color: Colors.tintColor,
  size: 24,
})``;

export const HeaderTitle = styled.Text`
  color: #222;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;
