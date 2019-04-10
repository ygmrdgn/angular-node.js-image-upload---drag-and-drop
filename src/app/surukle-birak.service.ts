import {Injectable} from '@angular/core';
import {HttpClient,HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({ providedIn: 'root' })
export class SurukleBirakService {

    constructor(private http: HttpClient) { }

    create(file : File):Observable<HttpEvent<{}>>{

      const formdata: FormData = new FormData();
      formdata.append('file' , file);

      const req = new HttpRequest('POST', 'http://localhost:8000/api/file/upload', formdata, {
        reportProgress: true,
        responseType: 'text'
      });
      return this.http.request(req);
    }

    delete(file : File):Observable<HttpEvent<{}>>{
      // const formdata: FormData = new FormData();
      // formdata.append('file' , file);
      console.log("fileeeeeeeeee");
      console.log(file);
      const req = new HttpRequest('DELETE', 'http://localhost:8000/api/file/delete/'+file.name, null, {
        responseType: 'text'
       
      });
      return this.http.request(req);
    }
  
}


