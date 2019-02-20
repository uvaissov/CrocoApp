import { Dimensions } from 'react-native'

export const COLOR_5 = '#003326'
export const COLOR_4 = '#004030'
export const COLOR_3 = '#004C39'
export const COLOR_2 = '#008C68'
export const COLOR_1 = '#00CC98'
export const WHITE = '#fff'
export const BLACK = '#000'

export const COMMANDS_STORE = '@ComandsStore:commands'

export const win = Dimensions.get('window')
export const w = win.width
export const h = win.height
export const responsive = {
  mobile5: w > 315 && w < 341,
  mobile8: w > 342 && w < 375,
  mobile8plus: w > 375 && w < 415,
  tablet: w < 990 && w > 415
}
