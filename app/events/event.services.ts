/**
 * Created by g62 on 17/05/17.
 */
export interface Shop {
    // Unique Id
    id: string;
    // The title
    title: string;
    // location
    location: string;
    // Price
    date: string;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

export class EventService {

    private events: Event[] = [
        // Bakery
        { id: '1', categoryId: '1', title: 'Lion King', rating: 1.5, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', director: 'some guy at disney', description: 'It a great movie about talking animals', plot:'disney plot', opinion:'one of my favorite movies', production: 'how was it made' },
        { id: '2', categoryId: '1', title: 'Big Hero 6', rating: 5, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', description: 'It a movie about six kids and a puffy robot', plot:'disney plot', opinion:'my favorite movie in 2015',production: 'how was it made' },
        { id: '3', categoryId: '1', title: 'Lilo and Stitch', rating: 7, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', description: 'A disney movie that takes place on Hawaii', plot:'disney plot', opinion:'my favorite disney movie',production: 'how was it made' }

    ];

    getEvents(category?: string, search?: string) {
        if (category) {
            return this.events.filter((event: Event, index: number, array: Event[]) => {
                return event.categoryId === category;
            });
        } else if (search) {
            let lowSearch = search.toLowerCase();
            return this.events.filter((event: Event, index: number, array: Event[]) => {
                return event.title.toLowerCase().indexOf(lowSearch) != -1;
            });
        } else {
            return this.events;
        }
    }

    getEvent(id: string): Event {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].id === id) {
                return this.events[i];
            }
        }
        throw new EventNotFoundException(`Event ${id} not found`);
    }
}

export class EventNotFoundException extends Error {
    constructor(message?: string) {
        super(message);
    }
}