import { PartialType } from '@nestjs/swagger';
import { CreatePermissionDto } from './create-permission.dto';
import { IsInt, IsString } from 'class-validator';

export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {}
