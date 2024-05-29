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
  selectedRoom!: RoomList;
  rooms: Room = {
    totalRooms: 20,
    availabeRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe',
        ammenities: 'Wifi, AC, TV',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        checkinTime: new Date('11/11/2021'),
        checkoutTime: new Date('11/12/2021'),
        rating: 4.5,
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
        rating: 3.7,
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
        rating: 2.7,
      },
    ];
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Presidential Suite',
      ammenities: 'AC, TV, fridge, security and much more',
      price: 75000,
      photos:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      checkinTime: new Date('01/09/2024'),
      checkoutTime: new Date('02/09/2024'),
      rating: 5,
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
