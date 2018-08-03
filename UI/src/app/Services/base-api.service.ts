import { HttpHeaders } from '@angular/common/http';

export abstract class BaseAPIService {

    constructor() { }

    protected getRequestHeaders(existingHeaders: HttpHeaders, headerName: string,
        headerValue: string, replaceExistingHeader: boolean = true): HttpHeaders {
        let headers: HttpHeaders = existingHeaders || new HttpHeaders();

        // if the header exists and we're not replacing it (appending to it)...
        if (headers.has(headerName) && !replaceExistingHeader) {
            // if not replacing, append a comma and the value passed in to the current value.
            headers = headers.append(headerName, headerValue);
        } else {
            // the header does not exist.  add it.
            headers = headers.set(headerName, headerValue);
        }
        return headers;
    }

    /**
     * Adds an Accept & Content-Type header. Defaults to 'application/json'
    */
    protected getStandardHeaders(contentType: string = 'application/json', existingHeaders?: HttpHeaders): HttpHeaders {
        let headers = this.getRequestHeaders(existingHeaders, 'Accept', contentType);
        headers = this.getRequestHeaders(headers, 'Content-Type', contentType);
        return headers;
    }
  
}
