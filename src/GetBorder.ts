enum Border {
  flat = '0',
  round = '2rem',
  rightCurve = '0 2rem 2rem 0',
  leftCurve = '2rem 0 0 2rem',
}
const getBorderRadius: GetBorderRadius = (border) => {
  let value = '';
  switch (border) {
    case 'flat':
      value = Border.flat;
      break;
    case 'leftCurve':
      value = Border.leftCurve;
      break;
    case 'rightCurve':
      value = Border.rightCurve;
      break;
    default:
      value = Border.round;
      break;
  }
  return value;
};
export default getBorderRadius;
