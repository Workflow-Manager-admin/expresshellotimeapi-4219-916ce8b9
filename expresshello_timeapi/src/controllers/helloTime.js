//
// Controller for /hello and /time endpoints
//

// PUBLIC_INTERFACE
exports.sayHello = (req, res) => {
  /** Returns a JSON welcome message */
  res.json({ message: 'Welcome to my first API!' });
};

// PUBLIC_INTERFACE
exports.getTime = (req, res) => {
  /** Returns the current server time in ISO format as JSON */
  res.json({ time: new Date().toISOString() });
};
