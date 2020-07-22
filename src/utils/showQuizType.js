export function showQuizType(type) {
  switch (type) {
    case 'ox':
      return 'OX퀴즈';
    case 'short_answer':
      return '주관식';
    default:
      return 'No Type';
  }
}