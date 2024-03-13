import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import THICCCBOIREGULAR from '../fonts/THICCCBOI/THICCCBOI-Regular.ttf';
import THICCCBOIMEDIUM from '../fonts/THICCCBOI/THICCCBOI-Medium.ttf';
import THICCCBOIBOLD from '../fonts/THICCCBOI/THICCCBOI-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
        font-family: ${({ theme }) => theme.font.THICCCBOI.regular};
        src: url(${THICCCBOIREGULAR}),
  }
  @font-face {
        font-family: ${({ theme }) => theme.font.THICCCBOI.medium};
        src: url(${THICCCBOIMEDIUM}),
  }
  @font-face {
        font-family: ${({ theme }) => theme.font.THICCCBOI.bold};
        src: url(${THICCCBOIBOLD}),
  }
  body {
    font-family: ${({ theme }) => theme.font.THICCCBOI.regular};
  }
`;
