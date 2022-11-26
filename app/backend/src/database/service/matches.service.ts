import Matches from '../models/Matches';

import Teams from '../models/Teams';

const matchServiceGetAll = async (): Promise<{ matches: Matches[] }> => {
  const matches = await Matches.findAll({
    include: [
      { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });
  return { matches };
};

export default matchServiceGetAll;
