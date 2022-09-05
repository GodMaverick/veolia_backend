import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {

    private readonly Users: User[] = [
        {
            id: "34331312236",
            username : "Item One",
            email: "example1@gmail.com" ,
            password : "password12345",
            quantity : 100,
            description : "This is the first item in the list",
            permission : "Complete Access",
            Role : "Admin"

        },

        {
            id: "1342236",
            username : "Item Two",
            email: "example2@gmail.com" ,
            password : "password123",
            quantity : 777,
            description : "This is the Second item in the list",
            permission : "Partial Access",
            Role : "Project Manger"
        }
    ];

    getAllUsers(): User[]{
        return this.Users;
    }

}
