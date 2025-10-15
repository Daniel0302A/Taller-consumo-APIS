import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { ServicioAPIService } from '../../services/servicio-api.service';
import { postI } from '../../types/tipoApis';

@Component({
  selector: 'app-componente-cards',
  standalone: false,
  templateUrl: './componente-cards.component.html',
  styleUrl: './componente-cards.component.scss',
})
export class ComponenteCardscomponent implements OnInit, OnChanges, OnDestroy {
  constructor(private servicio: ServicioAPIService) {}
  posts: postI[] = [];

  ngOnInit(): void {
    this.servicio.getPost().subscribe({
      next: (res) => {
        this.posts = res;
      },
      error: () => {},
      complete: () => {},
    });
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnDestroy(): void {}
}
