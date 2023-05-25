import { Injectable } from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders,HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  errorData: {} | undefined;
  constructor(
    private http: HttpClient,
    handler: HttpBackend
    ) { 

      this.errorData={};
      this.http = new HttpClient(handler);
    }

 
 
 ngOnInit() {
   
}

getdata(){
 return  this.http.get("https://test.negbuy.com/api/homepage_news")
  
} 


goToProductPage(){
  window.open("/product", "_blank")
}



// hardware api

// Method to send the POST request with JSON payload
//  payload={"category":"Hardware","number":5}
sendPostRequest(payload={"category":"Hardware","number":20}) {
  // Convert the payload to JSON string
  const payloadString = JSON.stringify(payload);

  // Set the Content-Type header to application/json
  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  // Send the POST request with the JSON payload and headers
  return this.http.post<any>('https://test.negbuy.com/api/homepage_single_category_products',

  
  payloadString, { headers: headers })
}

// sporting hardware

sporitngGoods(payload={"category":"Sporting Goods","number":20}) {
  // Convert the payload to JSON string
  const payloadString = JSON.stringify(payload);

  // Set the Content-Type header to application/json
  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  // Send the POST request with the JSON payload and headers
  return this.http.post<any>('https://test.negbuy.com/api/homepage_single_category_products', payloadString, { headers: headers });
}



// Search by Brand


brand(payload={"choice":"brand"}) {
  // Convert the payload to JSON string
  const payloadString = JSON.stringify(payload);

  // Set the Content-Type header to application/json
  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  // Send the POST request with the JSON payload and headers
  return this.http.post<any>('https://test.negbuy.com/api/homepage_posters_brands', payloadString, { headers: headers });
}

// Product APi
product(payload={"product_id":107}) {
  // Convert the payload to JSON string
  const payloadString = JSON.stringify(payload);

  // Set the Content-Type header to application/json
  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  // Send the POST request with the JSON payload and headers
  return this.http.post<any>('https://test.negbuy.com/api/product_details_page', payloadString, { headers: headers });
}



getProductById(productId: number):Observable<any> {
  console.log(productId);
  
  // const payload = { product_id: productId };
  return this.http.get("https://test.negbuy.com/api/product_details_page?product_id="+productId)
  // return this.http.get("https://jsonplaceholder.typicode.com/users"+productId)
}




getProductimageDesbyProductId(payload={"category":"Sporting Goods","number":20}) {
  // Convert the payload to JSON string
  const payloadString = JSON.stringify(payload);

  // Set the Content-Type header to application/json
  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  // Send the POST request with the JSON payload and headers
  return this.http.post<any>('https://test.negbuy.com/api/homepage_single_category_products', payloadString, { headers: headers });
}









private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  this.errorData = {
    errorTitle: 'Oops! Request for document failed',
    errorDesc: 'Something bad happened. Please try again later.'
  };
  return throwError(this.errorData);
}

}
