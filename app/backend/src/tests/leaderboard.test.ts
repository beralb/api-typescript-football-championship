import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import Matches from '../database/models/Matches'

import {
  leaderboardMock,
} from './util/mocks/allmocks'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testes de integração rota leaderboard - FindAll', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Matches, "findAll")
      .resolves(leaderboardMock as any);
  });

  after(() => {
    (Matches.findAll as sinon.SinonStub).restore();
  })

  it('Testando findAll', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/leaderboard').send()

    expect(chaiHttpResponse.status).to.be.equal(200)
  })

});
