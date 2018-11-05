import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Package} from "../shared/models/package.model";
import {APP_BASE_HREF} from '@angular/common';

@Injectable({providedIn: 'root'})
export class PackageService {

  constructor(private http: HttpClient, @Inject(APP_BASE_HREF) private baseHref: string) {
  }

  search(query?: any) {
    let params = {};
    if (query) {
      params = new HttpParams({
        fromString: `q=${query}`
      });
    }
    return this.http.get<Package[]>(`${this.baseHref}packages`, {params: params})
      .pipe(catchError(PackageService.errorHandler));

  }

  private static errorHandler(err: HttpErrorResponse) {
    let errorMessage = `An error occurred during request. See console logs.`;
    console.error(err.error instanceof ErrorEvent ? err.error.message : err.message);
    return throwError(errorMessage);
  }
}
