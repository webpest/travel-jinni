import { Button } from '.';

const TripCard = () => {
    return (
        <div className="div-w ml-40 text-center border-white border mt-2 pt-8 px-4 bg-gray-400 bg-opacity-10 blur-filter rounded-md">
            <h1 className="text-5xl font-serif font-bold pb-5 px-4">Your Trip Awaits You!</h1>
            <p className="text-sm pb-5">
                We have taken some time to help plan your trip to make it a memmorable one. Access
                your calender for even more things you can do on your trip.
            </p>
            <Button>ACCESS CALENDAR</Button>
        </div>
    );
};

export default TripCard;
