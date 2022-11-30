import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import Teams from '../database/models/Teams'

import {
  teamsMockResponse,
  oneTeamMockResponse,
} from './util/mocks/allmocks'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Teste de integração rota Teams - Getall', () => {
  
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Teams, "findAll")
      .resolves(teamsMockResponse as any);
  });

  afterEach(() => {
    (Teams.findAll as sinon.SinonStub).restore();
  })

  it('Testando getAll', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/teams').send()

    expect(chaiHttpResponse.status).to.be.equal(200)
  })

});

describe('Teste de integração rota Teams - GetByPk', () => {
  
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Teams, "findByPk")
      .resolves(oneTeamMockResponse as any);
  });

  afterEach(() => {
    (Teams.findByPk as sinon.SinonStub).restore();
  })

  it('Testando GetByPk', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/teams/1').send()

    expect(chaiHttpResponse.status).to.be.equal(200)
  })

});