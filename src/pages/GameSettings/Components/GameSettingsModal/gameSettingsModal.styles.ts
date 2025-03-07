/* eslint-disable sonarjs/no-duplicate-string */
import { styled } from '@mui/material/styles';

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
}));

export const StyledFormInnerContainer = styled('form')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',

  '@media (max-width: 576px)': {
    flexDirection: 'column',
  },
  '@media (max-width: 320px)': {
    flexDirection: 'column',
  },
}));
