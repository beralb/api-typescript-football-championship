import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import * as jwt from 'jsonwebtoken';

import App from '../app';

import Matches from '../database/models/Matches'

import {
  matchesMockResponse,
  matchesInProgressMock,
  insertMatchesMock,
  insertMatchesMockResponse,
  dedodedToken,
} from './util/mocks/allmocks'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testes de integração rota Matches - FindAll', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Matches, "findAll")
      .resolves(matchesMockResponse as any);
  });

  after(() => {
    (Matches.findAll as sinon.SinonStub).restore();
  })

  it('Testando findAll', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/matches').send()

    expect(chaiHttpResponse.status).to.be.equal(200)
  })

});


describe('Testes de integração rota Matches - Find InProgress', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Matches, "findAll")
      .resolves(matchesInProgressMock as any);

    sinon
      .stub(jwt, "verify")
      .returns(dedodedToken as any);
  });

  after(() => {
    (Matches.findAll as sinon.SinonStub).restore();
  })

  it('Testando findAll para inProgress com param válido', async () => {
    let inProgressParam: string = 'true';
    chaiHttpResponse = await chai
      .request(app).get('/matches').query({inProgress: inProgressParam})

    expect(chaiHttpResponse.status).to.be.equal(200);
    
  })

  it('Testando findAll para inProgress com param inválido', async () => {
    let inProgressParam: string = 'xablau';
    chaiHttpResponse = await chai
      .request(app).get('/matches').query({inProgress: inProgressParam})

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body.message).to.be.equal("invalid request format");
  })

});

describe('Testes de integração rota Matches - Create Match', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Matches, "create")
      .resolves(insertMatchesMockResponse as any);
  });

  after(() => {
    (Matches.create as sinon.SinonStub).restore();
  })

  it('Testando inserir novo Match', async () => {
    chaiHttpResponse = await chai
      .request(app).post('/matches').set('Authorization', 'teste').send(insertMatchesMock)

    expect(chaiHttpResponse.status).to.be.equal(201)
  })

});