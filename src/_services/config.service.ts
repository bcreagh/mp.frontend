import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.local';

@Injectable()
export class ConfigService {

    constructor() {
        if(!environment.name) {
            throw new Error('The environment has not been set!');
        }
        console.log(`Environment: ${environment.name}`);
    }
    
    getEnvironmentName() {
        return environment.name;
    }

    isProductionMode() {
        return environment.production;
    }
}