import Team from '../models/Teams';

const ServiceGetAll = async (): Promise<{ teams: { id: number, teamName: string }[] }> => {
  const teams = await Team.findAll();

  return { teams };
};

export default ServiceGetAll;
