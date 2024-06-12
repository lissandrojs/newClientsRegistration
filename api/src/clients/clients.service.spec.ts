import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
describe('ClientsService', () => {
  let service: ClientsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientsService, PrismaService],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a client', async () => {
    const clientData: CreateClientDto = {
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
     phone: 
       [
          {
            number: '123456789',
            type: 'mobile',
          },
        ],
      
    };

    const createdClient = await service.createClient(clientData);

    expect(createdClient).toHaveProperty('id');
    // expect(createdClient.name).toBe(clientData.name);
    // expect(createdClient.email).toBe(clientData.email);
  });

});