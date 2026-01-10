const hasNavigator = typeof navigator !== 'undefined';
const userAgent = hasNavigator ? navigator.userAgent : '';
const platform = hasNavigator ? navigator.platform : '';
const maxTouchPoints = hasNavigator ? navigator.maxTouchPoints : 0;

export const isIOS =
  typeof window !== 'undefined' && (
    /iPad|iPhone|iPod/.test(userAgent) ||
    (platform === 'MacIntel' && maxTouchPoints > 1)
  );
