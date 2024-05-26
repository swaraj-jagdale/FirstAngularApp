export interface Room {
  totalRooms: number;
  availabeRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  roomNumber: number;
  roomType: string;
  ammenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
  rating: number;
  
}
