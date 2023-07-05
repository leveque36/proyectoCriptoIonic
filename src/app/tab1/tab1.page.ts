import { Component, OnInit } from '@angular/core';
import { Coins } from '../interfaces/interface';
import { CriptoservService } from '../services/criptoserv.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  arrayCoins: Coins[] = []; 
  filtroCoins: Coins[] = [];
  mostrarBusqueda: boolean = false;

  constructor(private criptoService:CriptoservService, private navCtrl:NavController) {}

  ngOnInit() {
    this.criptoService.getCoins().subscribe(coinsResponse =>{
      this.arrayCoins=coinsResponse.slice(0, 10);
      console.log(this.arrayCoins);
    })
  }

  coinDetail(id: string) {
    this.criptoService.getCoinsDetails(id).subscribe(detailResponse => {
      this.navCtrl.navigateForward('/tabs/tab2', {
        queryParams: {
          detail: JSON.stringify(detailResponse)
        }
      });
    });
  }

  search(event: any) {
      const criptoSearch = event.target.value;
    if (typeof criptoSearch === 'string') {
      this.filtroCoins = this.arrayCoins.filter(coins =>
      coins.name.toLowerCase().includes(criptoSearch.toLowerCase())
    );
    } else {
        this.filtroCoins = [];
      }
    this.mostrarBusqueda = true;
  }
  
  }


