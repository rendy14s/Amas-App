/* tslint:disable */
import { Injectable } from '@angular/core';
import { Amasmasterlicence } from '../../models/Amasmasterlicence';
import { Amasusercredential } from '../../models/Amasusercredential';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Amasmasterlicence: Amasmasterlicence,
    Amasusercredential: Amasusercredential,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
