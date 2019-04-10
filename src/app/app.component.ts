import { Component } from '@angular/core';
import { SurukleBirakService} from './surukle-birak.service'
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { GeneratedFile } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 
  currentFileUpload:File;
  sonuc:any[];
  listeDurumu=true;
  degisken=false;
  deneme = Array<any>();
  progress: { percentage: number } = { percentage: 0 };
 
  constructor(private imageServis: SurukleBirakService) {}
  
  ngOnInit() {}

  dosyaYukle(){   
     if(this.degisken){
      this.degisken=false;
    }else{
    var ad= document.getElementById("files");
    console.log(ad);
    ad.click();
    }
  }
  resimGonder(){

    this.listeDurumu=false;
    setTimeout(()=>{  
   this.progress.percentage = 0;
  // @ts-ignore
this.sonuc=getFile();
  for(let i=0;i<this.sonuc.length;i++){
     // @ts-ignore
     this.deneme.push(getFile()[i]);
    this.currentFileUpload = this.sonuc[i];
    this.imageServis.create(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(event.loaded / event.total * 100 );
      } else if (event instanceof HttpResponse) {
        console.log('Upload images!');
      }
    });
}
}, 50);
  
}

  resmiSil(dosya){

   this.degisken=true;
    this.deneme.splice(this.deneme.indexOf(dosya) , 1);
  // @ts-ignore
  this.sonuc=getFile();

    this.imageServis.delete(dosya).subscribe(event => {
   
    });
}



 
  }

