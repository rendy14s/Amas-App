/* tslint:disable */

declare var Object: any;
export interface AmasusercredentialInterface {
  "fullname": string;
  "birthday": Date;
  "province": string;
  "gender": string;
  "licencecode": string;
  "username": string;
  "password": string;
  "id"?: number;
  "lastloginip"?: string;
  "lastlogindate"?: Date;
}

export class Amasusercredential implements AmasusercredentialInterface {
  "fullname": string;
  "birthday": Date;
  "province": string;
  "gender": string;
  "licencecode": string;
  "username": string;
  "password": string;
  "id": number;
  "lastloginip": string;
  "lastlogindate": Date;
  constructor(data?: AmasusercredentialInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Amasusercredential`.
   */
  public static getModelName() {
    return "Amasusercredential";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Amasusercredential for dynamic purposes.
  **/
  public static factory(data: AmasusercredentialInterface): Amasusercredential{
    return new Amasusercredential(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Amasusercredential',
      plural: 'Amasusercredentials',
      path: 'Amasusercredentials',
      properties: {
        "fullname": {
          name: 'fullname',
          type: 'string'
        },
        "birthday": {
          name: 'birthday',
          type: 'Date'
        },
        "province": {
          name: 'province',
          type: 'string'
        },
        "gender": {
          name: 'gender',
          type: 'string'
        },
        "licencecode": {
          name: 'licencecode',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "lastloginip": {
          name: 'lastloginip',
          type: 'string'
        },
        "lastlogindate": {
          name: 'lastlogindate',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
