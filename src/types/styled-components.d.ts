import 'styled-components';
import { ITheme } from '@/assets/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
