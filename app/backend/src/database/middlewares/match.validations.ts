import { RequestHandler } from 'express';

const validateNewMatchBody: RequestHandler = (req, res, next) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }

  next();
};

export default validateNewMatchBody;
