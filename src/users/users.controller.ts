import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service'
import { User } from './interfaces/user.interface';


@Controller("user")
export class UsersController {

    constructor( private readonly userService: UsersService){

    }

    @Get()
    getAllUsers(): User[]{
        return this.userService.getAllUsers();
    }

    @Get()
    getAllPermissions(): string[] {
        return ['permission1','permission2','permission3'];
    }

    @Get(':id')
    getUserByID(@Param('id') id): string{
        return `User of ID : ${id}`;
    }

    @Get('permission/:id')
    getPermissionByID(@Param('id') id): string{
        return `Permission of ID : ${id}`;
    }

    @Get(':id/:permissions')
    getUserPermissionByID(@Param('id') id,@Param('permissions') permissions): string{
        return `User of ID : ${id} has permissions : ${permissions}`;
    }


    @Post('permission')
    createPermission( permission:string ): string{
        return `The permission created is : ${permission}}`;
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): string{
        return `Name: ${createUserDto.name}, Description : ${createUserDto.description}, Quantity: ${createUserDto.quantity}`
    }

    @Put(':id')
    updateUser(@Body() updateUserDto: CreateUserDto, @Param('id') id) : string{
        return `Update ${id} - Name ${updateUserDto.name}`;
    }

    @Delete(':id')
    deleteUser(@Param('id') id): string{
        return `Delete ${id}`;
    }



}
