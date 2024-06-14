import { IsString, IsEmail, IsNotEmpty, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateClientDto {
  name: string;
  email: string;
  maritalStatus: string;
  cpf: string;
  address: {
    publicPlace: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  phone: {
    number: string;
    type: string;
  }[];
}
