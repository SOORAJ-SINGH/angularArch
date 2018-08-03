import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { CONFIGURATION } from "../app.constants";
import { BaseAPIService } from "./base-api.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService extends BaseAPIService {
    loginUrl = 'login';

    constructor(private http: HttpClient) {
      super();
    }

    public checkLogin(): Observable<boolean> {
        const path: string = CONFIGURATION.baseUrls.apiUrl + this.loginUrl;
        const reqHeaders: HttpHeaders = this.getStandardHeaders();
        return this.http.get<boolean>(path, { headers: reqHeaders });
    }
}