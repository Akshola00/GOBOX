// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./AggregatorV3Interface.sol";


contract EventTicketFactory is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _eventIds;

// priceFeed ETH/USD : 0x1a81afB8146aeFfCFc5E50e8479e826E7D55b910
    AggregatorV3Interface internal priceFeed;

    struct Event {
        uint256 id;
        address creator;
        string name;
        uint date;
        string location;
        string time;
        string category;
        uint256 ticketPriceUSD; // Price in USD cents
        uint256 totalTickets;
        uint256 availableTickets;
        string ipfsHash;
        address ticketContract;
    }

    mapping(uint256 => Event) public events;

    event EventCreated(uint256 eventId, string name, address ticketContract, address creator);
    event TicketPurchased(uint256 eventId, address buyer, uint256 tokenId);

    constructor(address _priceFeed) Ownable(msg.sender) {
        priceFeed = AggregatorV3Interface(_priceFeed);
    }

    function createEvent(
        string memory name,
        string memory category,
        uint256 ticketPriceUSD,
        uint256 totalTickets,
        string memory ipfsHash,
        string memory ticketName,
        string memory ticketSymbol
    ) public {
        _eventIds.increment();
        uint256 newEventId = _eventIds.current();

        EventTicket newTicketContract = new EventTicket(ticketName, ticketSymbol);

        events[newEventId] = Event(
            newEventId,
            msg.sender,
            name,
            category,
            ticketPriceUSD,
            totalTickets,
            totalTickets,
            ipfsHash,
            address(newTicketContract)
        );

        emit EventCreated(newEventId, name, address(newTicketContract), msg.sender);
    }

    function getLatestPrice() public view returns (int) {
        (
            /* uint80 roundID */,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
        return price;
    }

    function getTicketPriceETH(uint256 eventId) public view returns (uint256) {
        Event storage _event = events[eventId];
        int latestPrice = getLatestPrice();
        require(latestPrice > 0, "Invalid ETH price");
        
        return (_event.ticketPriceUSD * 1e8) / uint256(latestPrice);
    }

    function purchaseTicket(uint256 eventId) public payable {
        Event storage _event = events[eventId];
        require(_event.availableTickets > 0, "No tickets available");
        
        uint256 ticketPriceETH = getTicketPriceETH(eventId);
        require(msg.value >= ticketPriceETH, "Insufficient payment");

        _event.availableTickets--;

        EventTicket ticketContract = EventTicket(_event.ticketContract);
        uint256 newTokenId = ticketContract.mint(msg.sender);

        emit TicketPurchased(eventId, msg.sender, newTokenId);

        if (msg.value > ticketPriceETH) {
            payable(msg.sender).transfer(msg.value - ticketPriceETH);
        }
    }

    function getEvent(uint256 eventId) public view returns (Event memory) {
        return events[eventId];
    }

    function getEventsCount() public view returns (uint256) {
        return _eventIds.current();
    }

    function withdrawBalance() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        payable(owner()).transfer(balance);
    }
}

contract EventTicket is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address public factoryContract;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        factoryContract = msg.sender;
    }

    function mint(address to) public returns (uint256) {
        require(msg.sender == factoryContract, "Only factory contract can mint");
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _safeMint(to, newTokenId);
        return newTokenId;
    }
}