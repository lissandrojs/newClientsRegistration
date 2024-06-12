import { IsString, IsEmail, IsNotEmpty, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateClientDto {
  name?: string;
  email?: string;
  maritalStatus?: string;
  cpf?: string;
  address?: {
    publicPlace?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
  };
  phone?: {
    number?: string;
    type?: string;
  }[];
}