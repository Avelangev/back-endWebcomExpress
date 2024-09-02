function calculator(values, action) {
  const actions = {
    minimum: () => Math.min(...values),
    maximum: () => Math.max(...values),
  };

  return actions[action] ? actions[action]() : null;
}

module.exports = calculator;
