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
      enLigne:false
      },
      {nom:'Max',
      enLigne:false
      },
      {nom:'Manon',
      enLigne:false
      },
      {nom:'Mika',
      enLigne:false
      },
    ];
  }
}
