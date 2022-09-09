import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
  Param,
  Patch,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@ApiTags('Users')
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Get All Users' })
  @ApiResponse({ status: 200, description: 'List of Users.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get User By ID' })
  @ApiResponse({ status: 200, description: 'Single User Returned.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getUserByID(@Param('id') id): User {
    return this.userService.getUserByID(id);
  }

  @Get(':id/permissions')
  @ApiOperation({ summary: 'Get User Permission' })
  @ApiResponse({ status: 200, description: 'List of User Permissions.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getUserPermissionByID(@Param('id') id): string {
    return this.userService.getUserPermissionByID(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiCreatedResponse({ description: 'New user created successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createUser(@Body() createUserDto: CreateUserDto): string {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update User' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully updated.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  updateUser(@Body() updateUserDto: CreateUserDto, @Param('id') id): string {
    return this.userService.updateUser(updateUserDto, id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete User' })
  @ApiResponse({
    status: 201,
    description: 'The User has been successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  deleteUser(@Param('id') id): string {
    return this.userService.deleteUser(id);
  }
}
