import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Permissions')
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create Permission' })
  @ApiCreatedResponse({ description: 'New permission created successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createPermission(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.createPermission(createPermissionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get All Permissions' })
  @ApiResponse({ status: 200, description: 'List of all permissions.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllPermissions() {
    return this.permissionsService.getAllPermissions();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Permissions By ID' })
  @ApiResponse({ status: 200, description: 'Single permission Returned.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getPermissionByID(@Param('id') id: string) {
    return this.permissionsService.getPermissionByID(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Permission' })
  @ApiResponse({
    status: 201,
    description: 'The permission has been successfully updated.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  updatePermission(
    @Param('id') id: string,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ) {
    return this.permissionsService.updatePermission(+id, updatePermissionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Permission' })
  @ApiResponse({
    status: 201,
    description: 'The permission has been successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  removePermission(@Param('id') id: string) {
    return this.permissionsService.removePermission(+id);
  }
}
