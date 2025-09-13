import { jwtService } from '../services/jwt.service.js';

export const isNotAuth = (req, res, next) => {
  const h = req.headers.authorization;

  if (!h) {
    return next(); // токену нема — окей, можна далі
  }

  const [, token] = h.split(' ');
  const userData = token ? jwtService.verify(token) : null;

  if (userData) {
    return res.status(403).json({ message: 'Already authenticated' });
  }

  next();
};
