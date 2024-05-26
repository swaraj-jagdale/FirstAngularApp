import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = true;
  rooms: Room = {
    totalRooms: 20,
    availabeRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe',
      ammenities: 'Wifi, AC, TV',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      checkinTime: new Date('11/11/2021'),
      checkoutTime: new Date('11/12/2021'),
    },

    {
      roomNumber: 2,
      roomType: 'Deluxe',
      ammenities: 'Wifi, AC, TV',
      price: 1500,
      photos:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      checkinTime: new Date('11/11/2021'),
      checkoutTime: new Date('11/12/2021'),
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      ammenities: 'Wifi, AC, TV',
      price: 10000,
      photos:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      checkinTime: new Date('11/11/2021'),
      checkoutTime: new Date('11/12/2021'),
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
