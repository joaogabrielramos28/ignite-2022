import { StyledContainer } from "./styles";

interface StyledPaperProps {
  children: React.ReactNode;
}

export const StyledPaper: React.FC<StyledPaperProps> = ({
  children,
}: StyledPaperProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
