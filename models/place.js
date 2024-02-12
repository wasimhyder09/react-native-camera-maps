class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // {lat: 0.1281, lng: 92.817}
    this.id = new Date().toString() + Math.random().toString();
  }
}