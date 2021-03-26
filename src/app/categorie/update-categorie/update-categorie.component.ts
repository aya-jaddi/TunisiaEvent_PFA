import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'app/entites/categorie';
import { CategorieService } from 'app/service/categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styles: [
  ]
})
export class UpdateCategorieComponent implements OnInit {
  currentCategorie = new Categorie();
  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private  categorieService :CategorieService) { }


 /*updateCategorie()
{ 
this.categorieService.updateCategorie(this.currentCategorie);
this.router.navigate(['list-categorie']);
}*/



  ngOnInit(): void{
    this.categorieService.consulterCategorie(this.activatedRoute.snapshot.params.id).
     subscribe( cat =>{ this.currentCategorie = cat; } ) ;
    }



       
    updateCategorie() {
      this.categorieService.updateCategorie(this.currentCategorie).subscribe(cat => {
      this.router.navigate(['list-categorie']);}
      ,(error) => { alert("Problème lors de la modification !"); });
      }
    
}
