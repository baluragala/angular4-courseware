interface ICDPlayer {
    eject: () => boolean;
    play: () => void;
    stop: () => void;
}


class SonyCDPlayer implements ICDPlayer {

    eject() {
        console.log('Ejecting');
        return true;
    };

    play() {
        console.log('Playing');
    }

    stop() {
        console.log('Stopped');
    }

}