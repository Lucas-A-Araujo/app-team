import { TextInput } from "react-native";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  color: ${({ theme }: DefaultTheme) => theme.COLORS.WHITE};
  background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }: DefaultTheme) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }: DefaultTheme) => theme.FONT_SIZE.MD}px;
  border-radius: 6px;
  padding: 16px;
`;