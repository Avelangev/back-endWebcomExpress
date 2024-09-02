function formatter(text, action) {
  const actions = {
    lowercase: () => text.toLowerCase(),
    uppercase: () => text.toUpperCase(),
  };

  return actions[action] ? actions[action]() : text;
}

module.exports = formatter;
