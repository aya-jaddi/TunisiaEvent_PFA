import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Categorie } from 'app/entites/categorie';
import { Observable } from 'rxjs';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  apiURL: string = 'http://localhost:8101/categories/api';
  
  categories : Categorie[];
  
  constructor(private http : HttpClient) {
   /* this.categories = [
      {id: 1, codeC: "001", libelle :"test1"},
      {id: 2, codeC: "002", libelle :"test2"},
      {id: 3, codeC: "003", libelle :"test3"},
     
       ];*/
   }
   listeCategorie(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.apiURL);
    }
    
    ajouterCategorie( cat: Categorie):Observable<Categorie>{
      return this.http.post<Categorie>(this.apiURL, cat, httpOptions);
      }
      

      supprimerCategorie(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }



        consulterCategorie(id: number): Observable<Categorie> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Categorie>(url);
          }
          updateCategorie(cat :Categorie) : Observable<Categorie>
          {
          return this.http.put<Categorie>(this.apiURL, cat, httpOptions);
      
          }
                   

          
   /*listeCategories():Categorie[] {
    return this.categories;
  }*/

  
    
  /*ajouterCategorie( cat: Categorie){
    this.categories.push(cat);
    }
    supprimerCategorie( cat: Categorie){
      //supprimer le categorie cat du tableau categories
      const index = this.categories.indexOf(cat, 0);
      if (index > -1) {
      this.categories.splice(index, 1);
      }
      //ou Bien
      /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
      this.produits.splice(index, 1);
      }
      }); */
     // }
      /*consulterCategorie(id:number): Categorie{
        this.categorie = this.categories.find(c => c.id == id);
        return this.categorie;
        }
        
        trierCategories(){
          this.categories = this.categories.sort((n1,n2) => {
          if (n1.id > n2.id) {
          return 1;
          }
          if (n1.id < n2.id) {
          return -1;
          }
          return 0;
          });
          }
          
 updateCategorie(c:Categorie)
{
// console.log(p);
this.supprimerCategorie(c);
this.ajouterCategorie(c);
this.trierCategories();
}*/
 
 
}
  

