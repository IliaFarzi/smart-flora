import {Body, Controller, Get} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';

@ApiTags('Home')
@Controller()
export class AppController {
    // POST /suggest/flower
    @Get()
    @ApiOperation({summary: 'home page'})
    @ApiResponse({status: 201, description: 'app is up'})
    @ApiResponse({status: 400, description: 'app is down'})
    async suggestFlower(@Body() suggestFlowerDto: { name: string, description: string }) {
        // Implementation of flower suggestion logic here
    }
}
