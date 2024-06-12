import { IsString, IsEmail, IsNotEmpty, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

// export class CreateClientDto {
//   name: string;
//   email: string;
//   maritalStatus: string;
//   cpf: string;
//   address: {
//     publicPlace: string;
//     number: string;
//     complement: string;
//     neighborhood: string;
//     city: string;
//     state: string;
//   };
//   phone: {
//     number: string;
//     type: string;
//   }[];
// }


class AddressDto {
  @IsString()
  @IsNotEmpty()
  publicPlace: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  complement: string;

  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;
}

class PhoneDto {
  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  maritalStatus: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PhoneDto)
  phone: PhoneDto[];
}

export class UpdateClientDto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  maritalStatus?: string;

  @IsString()
  cpf?: string;

  @ValidateNested()
  @Type(() => AddressDto)
  address?: AddressDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PhoneDto)
  phone?: PhoneDto[];
}