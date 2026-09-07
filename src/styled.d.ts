import 'styled-components';
import { theme } from './app/colours';

type AppTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
