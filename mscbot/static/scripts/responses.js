function getBotResponse(input) {

    if (input == "Hello") {
        return "Hello there, how can we help?" ;
    } else if (input == "Good morning") {
        return "Good morning, how can I help?";
    } else if (input == "Can I see a physician this weekend?") {
        return "Yes, the physician is available, schedule us your time";
        
        
    }

    
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}