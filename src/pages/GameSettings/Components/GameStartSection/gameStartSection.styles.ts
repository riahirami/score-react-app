import { styled } from '@mui/material/styles';

export const ImageContainer = styled('div')(({ theme }) => ({
  // position: 'absolute',
  // bottom: 0,
  // right: 0,
}));

export const StyledImage = styled('img')`
  @media (max-width: 1024px) {
    width: 230;
    height: 350;
  }

  @media (max-width: 768px) {
    width: 200;
    height: 240;
  }
  @media (max-width: 576px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
