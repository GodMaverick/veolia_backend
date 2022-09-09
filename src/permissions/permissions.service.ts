import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionsService {
  createPermission(createPermissionDto: CreatePermissionDto) {
    return 'This action adds a new permission';
  }

  getAllPermissions() {
    return `This action returns all permissions`;
  }

  getPermissionByID(id: number) {
    return `This action returns a #${id} permission`;
  }

  updatePermission(id: number, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`;
  }

  removePermission(id: number) {
    return `This action removes a #${id} permission`;
  }
}
