import { BaseModel } from './base.model';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('ImageModel')
export class ImageModel extends BaseModel {

  @JsonProperty('url', String, true)
  public url: string = undefined;
}
