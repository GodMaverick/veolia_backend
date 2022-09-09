import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UserModule } from './users/users.module';
import { PermissionsModule } from './permissions/permissions.module';
import { PermissionsController } from './permissions/permissions.controller';
import { PermissionsService } from './permissions/permissions.service';

@Module({
  imports: [UserModule, PermissionsModule],
  controllers: [AppController, UsersController, PermissionsController],
  providers: [AppService, UsersService, PermissionsService],
})
export class AppModule {}
