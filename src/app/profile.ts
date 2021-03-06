export class Profile {
    id: string = "";
    ping: number = 1;
    city: string = "";
    state: string = "";
    firstName: string = "";
    lastName: string = "";
    handle: string = "";
    screenNames: any[] = []
    latitude = 1;
    longitude = 1;
    lastLogin = 0;
    locationEnabled = 'disabled';
    avatarVal = Math.round(Math.random() * 1000);
}
