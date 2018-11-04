export const addOrRemove = (userAnswers, value) => {
  const index = userAnswers.indexOf(value); 
  if (index === -1) {
    userAnswers.push(value);
  } else {
    userAnswers.splice(index, 1);
  }
  return userAnswers;
};

export const getUserAnswers = ({value, type, userAnswers}) => {
  switch (type) {
    case 'multiple': return addOrRemove(userAnswers, value);
    default: return value;
  }
};