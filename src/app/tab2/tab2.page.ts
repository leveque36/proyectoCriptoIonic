import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinsDetails } from '../interfaces/interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private route: ActivatedRoute) {}

  detail: CoinsDetails = {
    id: '',
    symbol: '',
    name: '',
    image: {
      thumb: '',
      small: '',
      large: ''
    }
  };

  mostrarDetalle: boolean = false;

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    if (params['detail']) {
      this.detail = JSON.parse(params['detail']) as CoinsDetails;
      this.mostrarDetalle = true;
    }
  });
}

  };


