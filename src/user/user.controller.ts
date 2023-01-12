import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { Body, Controller, Post, Get, Patch, Delete } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('createuser')
  async createUser(@Body() userDto: UserDto): Promise<any> {
    console.log('whats inside', userDto);
    return this.userService.createUser(userDto);
  }

  @Get('getalluser')
  async getAllUser() {
    return this.userService.getAllUser();
  }

  @Patch('updateuser')
  async updateUser(@Body() userData) {
    console.log(userData);
    return this.userService.updateUser(userData);
  }
  @Delete('removeuser/:id')
  async removeUser(@Param() data) {
    console.log(data);
    return this.userService.removeUser(data.id);
  }
}
//eita just basic routing er jonne
