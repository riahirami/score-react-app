import { Grid, Typography, styled } from '@mui/material';
import { colors } from 'utils/colors';

interface StyledRoundContainerProps {
  index: number;
}
export const StyledRoundContainer = styled(Grid)<StyledRoundContainerProps>(({ index }) => ({
  padding: 10,
  backgroundColor: index % 2 === 0 ? colors.WHITE_GREY : colors.SECONDARY_WHITE_GREY,
}));

export const StyledGameRoundContainer = styled(Grid)(() => ({
  alignItems: 'center',
}));

export const StyledNoDataText = styled(Typography)(() => ({
  textAlign: 'center',
  marginTop: 50,
}));

export const StyledGameRoundsGlobalContainer = styled(Grid)(() => ({
  alignSelf: 'center',
  marginTop: 12,
}));
