import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CryptoService } from 'src/app/crypto.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  sushi="assets/images/sushi.jpg";
  ethereum="assets/images/ethereum.png";
  btc="assets/images/btc.png";
  usdt="assets/images/usdt.png";
  binance="assets/images/binance.png";
  star="assets/images/star.png";
  cryptoForm= this.formBuilder.group({
    type:[null,[Validators.required]],
    solde:[null,[Validators.required]],
    currency:[null,[Validators.required]],
    type2:[null,[Validators.required]],
    solde2:[null,[Validators.required]],
    currency2:[null,[Validators.required]],
    nbr:[null,[Validators.required]],
    nbr2:[null,[Validators.required]]
   
  },
  )
  constructor(
    private crypt:CryptoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
   let data1={
      solde:this.cryptoForm.get("solde")?.value,
      type:this.cryptoForm.get("type")?.value,
      nbr:this.cryptoForm.get("nbr")?.value,
      currency:this.cryptoForm.get("currency")?.value
    };
    let data2={
      solde:this.cryptoForm.get("solde2")?.value,
      type:this.cryptoForm.get("type2")?.value,
      nbr:this.cryptoForm.get("nbr2")?.value,
      currency:this.cryptoForm.get("currency2")?.value
    };
    this.crypt.createCrypto(data1).pipe(map((res:any)=>{

    })).subscribe(()=>{
      
  
  },(err:any)=>{
    
         
    });
    this.crypt.createCrypto(data2).pipe(map((res:any)=>{

    })).subscribe(()=>{
      
  
  },(err:any)=>{
    
         
    });
  
  
  }

}
