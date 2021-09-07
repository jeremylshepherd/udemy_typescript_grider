/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export  class CustomMap {
    private googleMap: google.maps.Map;

    constructor(elementId: string) {
        this.googleMap = new google.maps.Map(document.querySelector(elementId),
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0
                }
            }
        );
    }

    addMarker(mappable: Mappable) {
        const { lat, lng } = mappable.location;
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
            lat,
            lng
            }
        });
        
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(this.googleMap, marker);
        });
    }
}

