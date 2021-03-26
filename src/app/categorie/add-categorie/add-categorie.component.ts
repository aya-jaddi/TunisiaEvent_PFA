import { CategorieService } from 'app/service/categorie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'app/entites/categorie';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  newCategorie = new Categorie();

  message :string;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private  categorieService :CategorieService) { }


   //addCategorie()
//{ 
//this.categorieService.ajouterCategorie(this.newCategorie);
//this.router.navigate(['list-categorie']);
//} 

/*addCategorie(){
 // console.log(this.newProduit);
 this.categorieService.ajouterCategorie(this.newCategorie);
 this.router.navigate(['list-categorie']);

  }*/
    

  ngOnInit(): void {
     }
     addCategorie(){
      this.categorieService.ajouterCategorie(this.newCategorie).subscribe(cat => {
      console.log(cat);
      });
      
      this.router.navigate(['list-categorie']).then(() => {
        window.location.reload();
        });
      }     
}


