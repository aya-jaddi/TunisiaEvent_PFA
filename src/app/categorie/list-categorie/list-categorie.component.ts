import { ActivatedRoute, Router } from '@angular/router';

import { Component, Inject, OnInit } from '@angular/core';
import { Categorie } from 'app/entites/categorie';
import { CategorieService } from 'app/service/categorie.service';




@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
  categories : Categorie[];

 

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,private categorieService :CategorieService){}
  
  //categories : Categorie[];
 // constructor(private categorieService :CategorieService) {
   // this.categories = categorieService.listeCategories();
  
 //  }

 /*  supprimerCategorie(c:Categorie)

   {
  // console.log(c);
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
  this.categorieService.supprimerCategorie(c);
   }*/
  ngOnInit(): void {
    this.categorieService.listeCategorie().subscribe(cats => {
      console.log(cats);
      this.categories = cats;
      });

   
        
      /*this.getCategorie();*/
  }



  supprimerCategorie(c:Categorie)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.categorieService.supprimerCategorie(c.id).subscribe(() => {
console.log("Categorie supprimé");
this.SuprimerCategorieDuTableau(c);

});

}
SuprimerCategorieDuTableau(cat : Categorie) {
  this.categories.forEach((cur, index) => {
  if(cat.id=== cur.id) {
  this.categories.splice(index, 1);
  }
  });
}
  /*addCategorie()
  {
 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    //dialogConfig.data="gdddd";
    this.matDialog.open(AddCategorieComponent, dialogConfig);
  }
  getCategorie() {
    this.categorieService.getAll().subscribe(
      response =>{this.categorieService.listCategorie = response;}
     );
   
  }
  removeCategorie(id: number) {
    if (window.confirm('Are sure you want to delete this Catégorie ?')) {
    this.categorieService.deleteCategorie(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.warning(' data successfully deleted!'); 
          this.getCategorie();
        },
        error => console.log(error));
  }
  }
  selectCategorie(item : Categorie) {
    this.categorieService.choixmenu = "M";
    this.categorieService.dataForm = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    
    this.matDialog.open(AddCategorieComponent, dialogConfig);
  }
  

}
*/
}
