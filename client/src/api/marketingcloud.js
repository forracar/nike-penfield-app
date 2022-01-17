import axios from 'axios';

function fireJourney(data) {
    axios.post("/marketingcloud/post/interactionevent", data).then((response) => {
        console.log("[API][MC] Event fired", response);
        return response;
    }).catch((error) => {
        console.log("[API][MC] Event error: ", error);
        return error;
    })
}

export {fireJourney};


