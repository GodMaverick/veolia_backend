import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreatePermissionDto {

    @IsString()
    @ApiProperty()
    readonly permission: string;
  
    @IsString()
    @ApiProperty()
    readonly Accessability: string;

}
