import { Component, Input } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
})
export class RoomsListComponent {
  @Input() rooms: RoomList[] = [];
}
