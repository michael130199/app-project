import { BaseModel } from './base.model';
import { JsonObject, JsonProperty } from 'json2typescript';
import { ImageModel } from './image.model';

@JsonObject('ProjectModel')
export class ProjectModel extends BaseModel {

  @JsonProperty('id', String, true)
  public id: string = undefined;

  @JsonProperty('title', String, true)
  public title: string = undefined;

  @JsonProperty('description', String, true)
  public description: string = undefined;

  @JsonProperty('url_multimedia', [ImageModel], true)
  public urlMultimedia: Array<ImageModel> = undefined;

  @JsonProperty('url_video', String, true)
  public urlVideo: string = undefined;

  @JsonProperty('startDate', String, true)
  public startDate: string = undefined;

  @JsonProperty('endDate', String, true)
  public endDate: string = undefined;

  @JsonProperty('published_at', String, true)
  public publishedAt: string = undefined;

  @JsonProperty('createdAt', String, true)
  public createdAt: string = undefined;

  @JsonProperty('updatedAt', String, true)
  public updatedAt: string = undefined;
}
