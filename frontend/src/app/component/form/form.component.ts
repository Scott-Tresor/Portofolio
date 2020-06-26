import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import sweetAlert from 'sweetalert2';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: []
})
export class FormComponent implements OnInit {

  username: string;
  email: string;
  phone: number;
  message: string;
  loading: boolean;
  error: boolean;
  contact: Contact[];

  constructor(private apiservice: ApiService, private route: Router) { }

  ngOnInit(): void {
  }

  partager(formulaire){
    this.loading = true;
    this.apiservice.storeContact({username: this.username, email: this.email, phone: this.phone, message: this.message}).subscribe(
      success => {
        this.loading = false;
        console.log(success);
        this.route.navigate(['/contact']);
      },
      error => {
        if (error.status === 400) {
          this.loading = false;
          sweetAlert.fire('Erreur', error.error.detail, 'warning');
        } else {
          const Toast = sweetAlert.mixin({
            toast: true,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
          });
          Toast.fire('Error', 'Probleme de connexion a votre server', 'warning');
          console.log(error);
          this.loading = false;
        }
      }
    );
  }

  loadArticles() {
    this.apiservice.getContact().subscribe(
      data => {
        this.contact = data;
        this.contact.forEach(a => {
          console.log(a);
        });
      });
  }

}
