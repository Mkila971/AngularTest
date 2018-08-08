import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnregistrementService {

  constructor() { }

  getDataPersonnesMock(){
    return [
      {nom:'Ced',
      enLigne:false
      },
      {nom:'Julie',
      enLigne:true
      },
      {nom:'Max mure',
      enLigne:false
      },
      {nom:'Manon',
      enLigne:false
      },
      {nom:'Mika gros bite',
      enLigne:false
      },
    ];
  }
}
