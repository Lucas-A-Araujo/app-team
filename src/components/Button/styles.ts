import { TouchableOpacity } from "react-native";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }: DefaultTheme) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;
  
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: DefaultTheme) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }: DefaultTheme) => theme.COLORS.WHITE};
  font-family: ${({ theme }: DefaultTheme) => theme.FONT_FAMILY.BOLD};
`;