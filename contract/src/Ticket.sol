// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.0; 
 
import "./TicketTypes.sol"; 
 
contract Ticket { 
 
    CreateEvent[] private createEvents; 
    RegisterEvent[] private registerEvents; 
 
    event CreatedEvent(string indexed name, string message); 
    event RegisteredEvent(string indexed name, string message); 
 
    function createEvent( 
        string memory _name, 
        string memory _description, 
        Types _eventType, 
        uint256 _date, 
        string memory _venue 
    ) public payable  { 
 
        // Check if the input strings are not empty 
        require(bytes(_name).length > 0, "No name provided"); 
        require(bytes(_description).length > 0, "No description provided"); 
        require(_date > 0, "No date provided"); 
        require(bytes(_venue).length > 0, "No venue provided"); 

        require(msg.value == 1 ether, "You must pay 1 ether");

        uint256 _eventId = createEvents.length + 1;
 
        CreateEvent memory createdEvent = CreateEvent({ 
            name: _name, 
            eventId: _eventId,
            description: _description, 
            eventType: _eventType, 
            date: _date, 
            venue: _venue, 
            imageUrl: "" 
        }); 
 
        createEvents.push(createdEvent); 
 
        emit CreatedEvent(_name, "Event created successfully"); 
    } 
 
    function registerEvent( 
        string memory _name, 
        string memory _email, 
        RegisterType _eventTypes 
    ) public { 
        // Check if the input strings are not empty 
        require(bytes(_name).length > 0, "No name provided"); 
        require(bytes(_email).length > 0, "No email provided"); 
        
        uint256 _eventId = registerEvents.length + 1;

        RegisterEvent memory registeredEvent = RegisterEvent({ 
            name: _name, 
            eventId: _eventId,
            email: _email, 
            eventTypes: _eventTypes, 
            imageUrl: "" 
        }); 
 
        registerEvents.push(registeredEvent); 
 
        emit RegisteredEvent(_name, "Event registered successfully"); 
    } 

    function getRegisteredEvents(uint256 _eventId) public view returns(RegisterEvent memory) {
        return registerEvents[_eventId - 1];
    }
    function getCreatedEvents(uint256 _eventId) public view returns(CreateEvent memory) {
        return createEvents[_eventId - 1];
    }
}