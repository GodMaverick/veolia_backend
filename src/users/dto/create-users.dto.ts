import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {

  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @ApiProperty()
  readonly description: string;

  @IsInt()
  @ApiProperty()
  readonly quantity: number;

  @IsString()
  @ApiProperty()
  readonly role: string;
}
