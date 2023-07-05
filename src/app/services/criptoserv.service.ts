import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coins, CoinsDetails } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CriptoservService {

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
  };

  constructor(private http:HttpClient) { }

  getCoins(){
    return this.http.get<Coins[]>('https://api.coingecko.com/api/v3/coins/list',this.options)
  }

  getCoinsDetails(id: string) {
    return this.http.get<CoinsDetails>(`https://api.coingecko.com/api/v3/coins/${id}`, this.options);
  }
}
