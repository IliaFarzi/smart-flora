import {Body, Controller, Post} from '@nestjs/common';
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';

@ApiTags('Flowers')
@Controller()
export class FlowersController {
    // POST /suggest/flower
    @Post('suggest/flower')
    @ApiOperation({summary: 'Suggest a flower'})
    @ApiResponse({status: 201, description: 'Flower suggestion submitted.'})
    @ApiResponse({status: 400, description: 'Invalid suggestion data.'})
    @ApiBody({schema: {example: {name: 'Rose', description: 'A beautiful red flower'}}})
    async suggestFlower(@Body() suggestFlowerDto: { name: string, description: string }) {
        // Implementation of flower suggestion logic here
    }
}
