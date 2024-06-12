import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { Client } from '@prisma/client';

describe('ClientsController', () => {
  let controller: ClientsController;
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [
        {
          provide: ClientsService,
          useValue: {
            createClient: jest.fn().mockResolvedValue({
              id: 'some-id',
              name: 'John Doe',
              email: 'john.doe@example.com',
              maritalStatus: 'Single',
              cpf: '12345678900',
              address: {
                publicPlace: 'Main St',
                number: '123',
                complement: 'Apt 1',
                neighborhood: 'Downtown',
                city: 'City',
                state: 'State',
              },
              phone: [
                {
                  number: '123456789',
                  type: 'mobile',
                },
              ],
            }),
            getClients: jest.fn().mockResolvedValue([
              {
                id: 'some-id',
                name: 'John Doe',
                email: 'john.doe@example.com',
                maritalStatus: 'Single',
                cpf: '12345678900',
                address: {
                  publicPlace: 'Main St',
                  number: '123',
                  complement: 'Apt 1',
                  neighborhood: 'Downtown',
                  city: 'City',
                  state: 'State',
                },
                phone: [
                  {
                    number: '123456789',
                    type: 'mobile',
                  },
                ],
              },
            ]),
            getClientById: jest.fn().mockResolvedValue({
              id: 'some-id',
              name: 'John Doe',
              email: 'john.doe@example.com',
              maritalStatus: 'Single',
              cpf: '12345678900',
              address: {
                publicPlace: 'Main St',
                number: '123',
                complement: 'Apt 1',
                neighborhood: 'Downtown',
                city: 'City',
                state: 'State',
              },
              phone: [
                {
                  number: '123456789',
                  type: 'mobile',
                },
              ],
            }),
            updateClient: jest.fn().mockResolvedValue({
              id: 'some-id',
              name: 'John Doe Updated',
              email: 'john.doe.updated@example.com',
              maritalStatus: 'Single',
              cpf: '12345678900',
              address: {
                publicPlace: 'Main St',
                number: '123',
                complement: 'Apt 1',
                neighborhood: 'Downtown',
                city: 'City',
                state: 'State',
              },
              phone: [
                {
                  number: '123456789',
                  type: 'mobile',
                },
              ],
            }),
            deleteClient: jest.fn().mockResolvedValue({
              id: 'some-id',
              name: 'John Doe',
              email: 'john.doe@example.com',
              maritalStatus: 'Single',
              cpf: '12345678900',
              address: {
                publicPlace: 'Main St',
                number: '123',
                complement: 'Apt 1',
                neighborhood: 'Downtown',
                city: 'City',
                state: 'State',
              },
              phone: [
                {
                  number: '123456789',
                  type: 'mobile',
                },
              ],
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a client', async () => {
    const clientData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      maritalStatus: 'Single',
      cpf: '12345678900',
      address: {
        publicPlace: 'Main St',
        number: '123',
        complement: 'Apt 1',
        neighborhood: 'Downtown',
        city: 'City',
        state: 'State',
      },
      phone: [
        {
          number: '123456789',
          type: 'mobile',
        },
      ],
    };

    const createdClient = await controller.createClient(clientData);

    expect(createdClient).toHaveProperty('id');
    // expect(createdClient.name).toBe(clientData.name);
    // expect(createdClient.email).toBe(clientData.email);
  });

  it('should get all clients', async () => {
    const clients = await controller.getClients();
    expect(clients).toHaveLength(1);
    expect(clients[0].name).toBe('John Doe');
  });

  it('should get a client by id', async () => {
    const client = await controller.getClientById('some-id');
    expect(client).toHaveProperty('id', 'some-id');
    expect(client.name).toBe('John Doe');
  });

  it('should update a client', async () => {
    const clientData = {
      name: 'John Doe Updated',
      email: 'john.doe.updated@example.com',
      maritalStatus: 'Single',
      cpf: '12345678900',
      address: {
        publicPlace: 'Main St',
        number: '123',
        complement: 'Apt 1',
        neighborhood: 'Downtown',
        city: 'City',
        state: 'State',
      },
      phone: [
        {
          number: '123456789',
          type: 'mobile',
        },
      ],
    };

    // const updatedClient = await controller.updateClient('some-id', clientData);

    // expect(updatedClient.name).toBe(clientData.name);
    // expect(updatedClient.email).toBe(clientData.email);
  });

  it('should delete a client', async () => {
    const deletedClient = await controller.deleteClient('some-id');
    expect(deletedClient).toHaveProperty('id', 'some-id');
  });
});