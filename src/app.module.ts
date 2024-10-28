import {Module} from '@nestjs/common';

import {DataBaseModule} from './data-base/data-base.module';
import {DataSourceModule} from './data-source/data-source.module';
import {ConfigModule} from './config/config.module';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {AiModelModule} from './ai-model/ai-model.module';
import {FilesModule} from './files/files.module';

@Module({
    imports: [DataBaseModule, DataSourceModule, ConfigModule, UserModule, AuthModule, AiModelModule, FilesModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
