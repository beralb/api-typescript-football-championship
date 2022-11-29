import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import User from '../database/models/User'

import {
  loginUser,
  token,
  loginMockResponse
} from './unit/mocks/login.mocks'

import { Response } from 'superagent';
import { any } from 'joi';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Teste de integração rota Login', () => {
  
  let chaiHttpResponse;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(loginMockResponse as any);
  });

  after(() => {
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Testando rota login', async () => {
    chaiHttpResponse = await chai
      .request(app).post('/login').send(loginUser)

    expect(chaiHttpResponse.status).to.be.equal(200)
  })

  // it('Sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
