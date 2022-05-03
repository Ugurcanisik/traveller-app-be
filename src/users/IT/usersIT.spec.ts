import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import DatabaseModule from '../../configrations/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from '../customer.module';
import { CustomerRepository } from '../customer.repository';

describe('Customer IT Tests', () => {
  let app: INestApplication;
  let customerRepository: Repository<Customer>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, ConfigModule, CustomerModule],
    }).compile();

    customerRepository = module.get(CustomerRepository);
    app = module.createNestApplication();
    await app.init();
  });

  afterEach(() => {
    customerRepository.delete({});
  });

  it(`should create Customer`, async () => {
    // given
    const payload = {
      namelastname: 'asda',
      tc: 123213213123,
      phone: 21412412412,
      email: 'asdsadad@gmail.com',
      secondemail: 'asdadasd@gmail.com',
      startdate: new Date(2022, 6, 12),
      enddate: new Date(2022, 11, 24),
    };

    const startdate = new Date(payload.startdate).toISOString();
    const enddate = new Date(payload.enddate).toISOString();

    // when
    const result = await request(app.getHttpServer())
      .post(`/customer`)
      .send(payload);

    // then
    expect(result.statusCode).toBe(201);
    expect(result.body.namelastname).toBe(payload.namelastname);
    expect(result.body.tc).toBe(payload.tc);
    expect(result.body.phone).toBe(payload.phone);
    expect(result.body.email).toBe(payload.email);
    expect(result.body.secondemail).toBe(payload.secondemail);
    expect(result.body.startdate).toBe(startdate);
    expect(result.body.enddate).toBe(enddate);
  });

  it('should findAll Customer', async () => {
    // Given
    const payload = {
      namelastname: 'asda',
      tc: 123213213123,
      phone: '21412412412',
      email: 'asdsadad@gmail.com',
      secondemail: 'asdadasd@gmail.com',
      startdate: new Date('2021-04-27T00:00:00.000Z'),
      enddate: new Date('2022-05-12T00:00:00.000Z'),
    };

    const startdate = new Date(payload.startdate).toISOString();
    const enddate = new Date(payload.enddate).toISOString();

    await customerRepository.save(payload);

    // When
    const result = await request(app.getHttpServer()).get(`/customer`);

    //Then
    expect(result.body[0].id).toBeDefined();
    expect(result.body[0].createdAt).toBeDefined();
    expect(result.body[0].updatedAt).toBeDefined();
    expect(result.body[0].deletedAt).toBe(null);
    expect(result.body[0].namelastname).toBe(payload.namelastname);
    expect(Number(result.body[0].tc)).toBe(payload.tc);
    expect(result.body[0].phone).toBe(payload.phone);
    expect(result.body[0].email).toBe(payload.email);
    expect(result.body[0].secondemail).toBe(payload.secondemail);
    expect(result.body[0].startdate).toBe(startdate);
    expect(result.body[0].enddate).toBe(enddate);
  });

  it('should findOne Customer', async () => {
    // Given
    const payload = {
      namelastname: 'asdasdasdas',
      tc: 123213213123,
      phone: '21412412412',
      email: 'asdsadad@gmail.com',
      secondemail: 'asdadasd@gmail.com',
      startdate: new Date(2022, 6, 12),
      enddate: new Date(2022, 11, 24),
    };

    const startdate = new Date(payload.startdate).toISOString();
    const enddate = new Date(payload.enddate).toISOString();

    const customer = await customerRepository.save(payload);

    // When
    const result = await request(app.getHttpServer()).get(
      `/customer/${customer.id}`,
    );

    //Then
    expect(result.body.id).toBeDefined();
    expect(result.body.createdAt).toBeDefined();
    expect(result.body.updatedAt).toBeDefined();
    expect(result.body.deletedAt).toBe(null);
    expect(result.body.namelastname).toBe(payload.namelastname);
    expect(Number(result.body.tc)).toBe(payload.tc);
    expect(result.body.phone).toBe(payload.phone);
    expect(result.body.email).toBe(payload.email);
    expect(result.body.secondemail).toBe(payload.secondemail);
    expect(result.body.startdate).toBe(startdate);
    expect(result.body.enddate).toBe(enddate);
  });
});
