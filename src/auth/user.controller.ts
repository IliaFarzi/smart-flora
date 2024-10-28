import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags} from '@nestjs/swagger';

@ApiTags('Users')
@Controller()
export class UserController {

    // POST /login
    @Post('login')
    @ApiOperation({summary: 'User login'})
    @ApiResponse({status: 201, description: 'Login successful.'})
    @ApiResponse({status: 400, description: 'Invalid credentials.'})
    @ApiBody({schema: {example: {username: 'user123', password: 'password'}}})
    async login(@Body() loginDto: { username: string, password: string }) {
        // Implementation of login logic here
    }

    // POST /register
    @Post('register')
    @ApiOperation({summary: 'User registration'})
    @ApiResponse({status: 201, description: 'User registered successfully.'})
    @ApiResponse({status: 400, description: 'Invalid registration data.'})
    @ApiBody({schema: {example: {username: 'newUser', password: 'password', email: 'user@example.com'}}})
    async register(@Body() registerDto: { username: string, password: string, email: string }) {
        // Implementation of register logic here
    }
}
