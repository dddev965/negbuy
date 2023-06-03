import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse,
  HttpBackend,
} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductpageService {
  errorData: {} | undefined;

  productbyId:number|undefined;

  constructor(private http: HttpClient, handler: HttpBackend) {
    this.errorData = {};
    this.http = new HttpClient(handler);
  }

  getProductById(productId: number): Observable<any> {
    console.log(productId);
this.productbyId = productId
    // const payload = { product_id: productId };
    return this.http.get(
      'https://test.negbuy.com/api/product_details_page?product_id=' + productId
    );
    // return this.http.get("https://jsonplaceholder.typicode.com/users"+productId)
  }

  getProductimageDesbyProductId(payload = { product_id: this.productbyId }) {
    // console.log(this.productbyId);
    
    // Convert the payload to JSON string
    const payloadString = JSON.stringify(payload);

    // Set the Content-Type header to application/json
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Send the POST request with the JSON payload and headers
    return this.http.post<any>(
      'https://test.negbuy.com/api/product_details_page_img_desc',
      payloadString,
      { headers: headers }
    );
  }


  // getProductimageDesbyProductId(productId: number): Observable<any> {
  //   // console.log(productId);

  //   // const payload = { product_id: productId };
  //   return this.http.post(
  //     'https://test.negbuy.com/api/product_details_page_img_desc?product_id=' , productId
  //   );
  //   // return this.http.get("https://jsonplaceholder.typicode.com/users"+productId)
  // }


  productReviewSection(payload = { product_id: this.productbyId }) {
    // console.log(this.productbyId);
    
    // Convert the payload to JSON string
    const payloadString = JSON.stringify(payload);

    // Set the Content-Type header to application/json
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Send the POST request with the JSON payload and headers
    return this.http.post<any>(
      'https://test.negbuy.com/api/product_details_page_review_section',
      payloadString,
      { headers: headers }
    );
  }


  productReviewAnalysis(payload = { product_id: this.productbyId }) {
  console.log(this.productbyId);
  
  // Convert the payload to JSON string
  const payloadString = JSON.stringify(payload);

  // Set the Content-Type header to application/json
  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  // Send the POST request with the JSON payload and headers
  return this.http.post<any>(
    'https://test.negbuy.com/api/product_details_page_review_analysis',
    payloadString,
    { headers: headers }
  );
}


productBasicInfo(payload = { product_id: this.productbyId }) {
  // console.log(this.productbyId);
  
  // Convert the payload to JSON string
  const payloadString = JSON.stringify(payload);

  // Set the Content-Type header to application/json
  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  // Send the POST request with the JSON payload and headers
  return this.http.post<any>(
    'https://test.negbuy.com/api/product_details_page_head_desc_details',
    payloadString,
    { headers: headers }
  );
}



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.',
    };
    return throwError(this.errorData);
  }
}
