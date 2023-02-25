import styled from "styled-components/native";

import MaskInput from "react-native-mask-input";

export const Container = styled(MaskInput)`
  width: 100%;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors["gray-5"]};
  color: ${({ theme }) => theme.colors["gray-1"]};

  padding: 14px;
  margin-top: 4px;
`;
