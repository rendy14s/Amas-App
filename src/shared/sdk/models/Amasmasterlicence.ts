/* tslint:disable */

declare var Object: any;
export interface AmasmasterlicenceInterface {
  "masterLicenceCode": string;
  "masterLicenceType"?: string;
  "masterLicenceUserGroupcode": string;
  "masterLicenceGroup"?: string;
  "masterLicenceExpiredDate"?: Date;
  "masterLicenceIsActivate"?: number;
}

export class Amasmasterlicence implements AmasmasterlicenceInterface {
  "masterLicenceCode": string;
  "masterLicenceType": string;
  "masterLicenceUserGroupcode": string;
  "masterLicenceGroup": string;
  "masterLicenceExpiredDate": Date;
  "masterLicenceIsActivate": number;
  constructor(data?: AmasmasterlicenceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Amasmasterlicence`.
   */
  public static getModelName() {
    return "Amasmasterlicence";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Amasmasterlicence for dynamic purposes.
  **/
  public static factory(data: AmasmasterlicenceInterface): Amasmasterlicence{
    return new Amasmasterlicence(data);
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
      name: 'Amasmasterlicence',
      plural: 'Amasmasterlicences',
      path: 'Amasmasterlicences',
      properties: {
        "masterLicenceCode": {
          name: 'masterLicenceCode',
          type: 'string'
        },
        "masterLicenceType": {
          name: 'masterLicenceType',
          type: 'string'
        },
        "masterLicenceUserGroupcode": {
          name: 'masterLicenceUserGroupcode',
          type: 'string'
        },
        "masterLicenceGroup": {
          name: 'masterLicenceGroup',
          type: 'string'
        },
        "masterLicenceExpiredDate": {
          name: 'masterLicenceExpiredDate',
          type: 'Date'
        },
        "masterLicenceIsActivate": {
          name: 'masterLicenceIsActivate',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
