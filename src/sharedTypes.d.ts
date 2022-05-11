import {NativeSyntheticEvent} from 'react-native';

export type Modify<T, R> = Omit<T, keyof R> & R;

export type Provider = 'google' | undefined;

export type LatLng = {
  latitude: number;
  longitude: number;
};

export type Point = {
  x: number;
  y: number;
};

export type Frame = Point & {height: number; width: number};

export type CalloutPressEvent = NativeSyntheticEvent<{
  action: 'callout-press';

  /**
   * @platform iOS
   */
  frame?: Frame;

  /**
   * @platform iOS
   */
  id?: string;

  /**
   * @platform iOS
   */
  point?: Point;

  /**
   * @platform Android
   */
  coordinate?: LatLng;

  /**
   * @platform Android
   */
  position?: Point;
}>;
