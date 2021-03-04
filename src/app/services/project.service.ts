import { Injectable } from '@angular/core';
import { HttpResponse } from '@capacitor-community/http';
import { environment } from 'src/environments/environment';
import { LoggerImpl } from '../bridge/logger/logger.impl';
import { EnpointsEnum } from '../bridge/repository/enums/enpoints.enum';
import { RemoteRepository } from '../bridge/repository/remote.repository';
import { ProjectModel } from '../models/project.model';

// const ss = [
//   {
//      "multimedia":[
        
//      ],
//      "_id":"603eddfb7202aa100442d7f0",
//      "title":"Titulo de Prueba",
//      "description":"he aqui una descripcion del proyecto",
//      "startDate":"2020-01-01",
//      "endDate":"2020-06-01",
//      "published_at":"2021-03-03T00:53:23.725Z",
//      "createdAt":"2021-03-03T00:53:15.857Z",
//      "updatedAt":"2021-03-03T02:41:11.768Z",
//      "__v":0,
//      "image":{
//         "_id":"603edd577202aa100442d7ee",
//         "name":"Captura de pantalla (297).png",
//         "alternativeText":"",
//         "caption":"",
//         "hash":"Captura_de_pantalla_297_ff65e7dc87",
//         "ext":".png",
//         "mime":"image/png",
//         "size":16.19,
//         "width":523,
//         "height":439,
//         "url":"/uploads/Captura_de_pantalla_297_ff65e7dc87.png",
//         "formats":{
//            "thumbnail":{
//               "name":"thumbnail_Captura de pantalla (297).png",
//               "hash":"thumbnail_Captura_de_pantalla_297_ff65e7dc87",
//               "ext":".png",
//               "mime":"image/png",
//               "width":186,
//               "height":156,
//               "size":22.09,
//               "path":null,
//               "url":"/uploads/thumbnail_Captura_de_pantalla_297_ff65e7dc87.png"
//            },
//            "small":{
//               "name":"small_Captura de pantalla (297).png",
//               "hash":"small_Captura_de_pantalla_297_ff65e7dc87",
//               "ext":".png",
//               "mime":"image/png",
//               "width":500,
//               "height":420,
//               "size":101.79,
//               "path":null,
//               "url":"/uploads/small_Captura_de_pantalla_297_ff65e7dc87.png"
//            }
//         },
//         "provider":"local",
//         "related":[
//            "603eddfb7202aa100442d7f0"
//         ],
//         "createdAt":"2021-03-03T00:50:31.466Z",
//         "updatedAt":"2021-03-03T00:53:16.006Z",
//         "__v":0,
//         "id":"603edd577202aa100442d7ee"
//      },
//      "id":"603eddfb7202aa100442d7f0"
//   },
//   {
//      "multimedia":[
        
//      ],
//      "_id":"603ee86f01dcbb0015729191",
//      "title":"Titulo de Prueba 2",
//      "description":"Esta prueba es desde heroku subido",
//      "startDate":"2020-12-01",
//      "endDate":"2021-03-12",
//      "published_at":"2021-03-03T01:37:55.985Z",
//      "createdAt":"2021-03-03T01:37:51.139Z",
//      "updatedAt":"2021-03-03T02:41:11.768Z",
//      "__v":0,
//      "image":{
//         "_id":"603ee7db01dcbb0015729190",
//         "name":"Captura de pantalla (297).png",
//         "alternativeText":"",
//         "caption":"",
//         "hash":"Captura_de_pantalla_297_816f82bd8f",
//         "ext":".png",
//         "mime":"image/png",
//         "size":16.19,
//         "width":523,
//         "height":439,
//         "url":"/uploads/Captura_de_pantalla_297_816f82bd8f.png",
//         "formats":{
//            "thumbnail":{
//               "name":"thumbnail_Captura de pantalla (297).png",
//               "hash":"thumbnail_Captura_de_pantalla_297_816f82bd8f",
//               "ext":".png",
//               "mime":"image/png",
//               "width":186,
//               "height":156,
//               "size":22.09,
//               "path":null,
//               "url":"/uploads/thumbnail_Captura_de_pantalla_297_816f82bd8f.png"
//            },
//            "small":{
//               "name":"small_Captura de pantalla (297).png",
//               "hash":"small_Captura_de_pantalla_297_816f82bd8f",
//               "ext":".png",
//               "mime":"image/png",
//               "width":500,
//               "height":420,
//               "size":101.79,
//               "path":null,
//               "url":"/uploads/small_Captura_de_pantalla_297_816f82bd8f.png"
//            }
//         },
//         "provider":"local",
//         "related":[
//            "603ee86f01dcbb0015729191"
//         ],
//         "createdAt":"2021-03-03T01:35:23.351Z",
//         "updatedAt":"2021-03-03T01:37:51.286Z",
//         "__v":0,
//         "id":"603ee7db01dcbb0015729190"
//      },
//      "id":"603ee86f01dcbb0015729191"
//   }
// ]

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: RemoteRepository,
              private readonly log: LoggerImpl) { }

  public async getProjects(): Promise<Array<ProjectModel>> {

    try {

      const res: HttpResponse = await this.http.get(environment.apiUrl + EnpointsEnum.PROJECTS);

      return ProjectModel.deserializeArray(res.data, ProjectModel);

    } catch (error) {

      this.log.error(error);
    }
  }
}
