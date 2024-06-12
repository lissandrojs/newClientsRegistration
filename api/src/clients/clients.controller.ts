import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client as ClientModel } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger'
import { CreateClientDto } from './dto/create-client.dto';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly ClientsService: ClientsService) {}

  @Post()
  async createClient(@Body() data: CreateClientDto){
    return this.ClientsService.createClient(data);
  }

  @Get()
  async getClients() {
    return this.ClientsService.getClients();
  }

  @Get(':id')
  async getClientById(@Param('id') id: string){
    return this.ClientsService.getClientById(id);
  }

  // @Put(':id')
  // async updateClient(@Param('id') id: string, @Body() data: CreateClientDto){
  //    return this.ClientsService.updateClient(id, data);
  // }

  @Delete(':id')
  async deleteClient(@Param('id') id: string){
    return this.ClientsService.deleteClient(id);
  }
}