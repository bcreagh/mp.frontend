import { environment } from 'src/config/environment';
import { Injectable } from '@angular/core';

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