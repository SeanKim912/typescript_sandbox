// Types and Interfaces
type Mail = {
    postagePrice: number;
    address: string;
}

interface Postal { // Note that interface syntax does not need '='
    postagePrice: number;
    address: string;
}

// Both almost the same, except interface can only be used to type objects.

// Implements keyword
interface Robot {
    identify: (id: number) => void;
}

class OneSeries implements Robot {
    identify(id: number) {
        console.log(`beep! I'm ${id.toFixed(2)}.`);
    }

    answerQuestion() {
        console.log('42!');
    }
}

// Deep Types: For nested methods and properties.
interface Robot2 {
    about: { // Note how id and name are nested within general, within about constructor
        general: {
            id: number;
            name: string;
        };
    };

    getRobotId: () => string;
}

class TwoSeries implements Robot2 {
    about;

    constructor(props: { general: { id: number; name: string; } }) {
        this.about = props;
    }

    getRobotId() {
        return `ID: ${this.about.general.id}`;
    }
}

/*
    Composed Types:
    When data gets unwieldy as it gets nested deeper and deeper, we can compose types. Below
    are two ways to write an About interface.
*/
// Version 1. Can get unwieldy.
interface About1 {
    general: {
        id: number;
        name: string;
        version: {
            versionNumber: number;
        }
    }
}

// Version 2. More readable, modular, and reusable.
interface About2 {
    general: General;
}

interface General {
    id: number;
    name: string;
    version: Version;
}

interface Version {
    versionNumber: number;
}

/*
    Extending Interfaces:
    Sometimes it's convenient to copy all type members from one type into
    another type. We can do this with the extends keyword.
*/

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

const mySquare: Square = { sideLength: 10, color: 'blue' }; // Both properties here are now required.

/*
    Index Signatures:
    When typing objects in TypeScript, sometimes it’s not possible to know the property names for an
    object, like when we get back information from an outside data source/API. While we may not know
    the exact property names at compile-time, we may know what the data will look like in general. In
    that case, it’s useful to write an object type that allows us to include a variable name for the
    property name. This feature is called index signatures.

    Imagine we query a map API to get a list of latitudes where a solar eclipse can be viewed. The data
    might look like:

    {
        '40.712776': true;
        '41.203323': true;
        '40.417286': false;
    }

    We know that all the property names will be strings, and all their values will be booleans, but we
    on’t know what the property names will be. To type this object, we can utilize an index signature
    to type this object. We could write this object’s type like this:
*/

interface SolarEclipse {
    [latitude: string]: boolean;
    /*
        This index signature defines EVERY property name as a string type with value type boolean.
    */
}

// Optional Type Members
interface OptionsType {
    name: string;
    size?: string;
}
