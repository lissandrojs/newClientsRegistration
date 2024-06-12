import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Client, Prisma } from '@prisma/client';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';


@Injectable()
export class ClientsService {
  constructor(private dataBase: PrismaService) {}


  async validateUniqueFields (name,email,cpf){
    const existingCPF = await this.dataBase.client.findUnique({
      where: {
        cpf,
      },
    });

    if (existingCPF) {
      throw new ConflictException('CPF já cadastrado.');
    }

    const existingClient = await this.dataBase.client.findUnique({
        where: {
          email,
        },
      });
  
    if (existingClient) {
        throw new ConflictException('Email já cadastrado.');
      }

    const existingClientName = await this.dataBase.client.findUnique({
        where: {
          name,
        },
      });
  
    if (existingClientName) {
        throw new ConflictException('Nome já cadastrado.');
      }
  }


  async createClient(createClientDto: CreateClientDto) {
    const { name, email, maritalStatus, cpf, address, phone } = createClientDto;

    await this.validateUniqueFields(name,email,cpf)

    const client = await this.dataBase.client.create({
        data: {
          name,
          email,
          maritalStatus,
          cpf,
        },
      });

    const clientAddress = await this.dataBase.address.create({
        data: {
          ...address,
          client: {
            connect: { id: client.id },
          },
        },
      });

      const clientPhones = await Promise.all(
        phone.map(async (p) => {
          return await this.dataBase.phone.create({
            data: {
              ...p,
              client: {
                connect: { id: client.id },
              },
            },
          });
        }),
      );

      return { client, address: clientAddress, phones: clientPhones };

  }

  async getClients(): Promise<Client[]> {
    return this.dataBase.client.findMany();
  }

  async getClientById(id: string) {
    return this.dataBase.client.findUnique({
      where: { id },
    });
  }

  async deleteClient(id: string) {
    return this.dataBase.client.delete({
      where: { id },
    });
  }
}