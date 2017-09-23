import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //cojo la info de la url


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactId: String;

  constructor(private route: ActivatedRoute) { } //lo utilizo en este componete

    ngOnInit() {
      this.route.params //Accedo a los aparemtros. params es un observable
        .subscribe((params) => this.contactId = String(params['id']));
        //cuando se carga se puede leer la ruta. Asigno el params a el contactId.
        //
    }

    //callbacks, promises y observable, es7.

}
