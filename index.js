const ContractAddress = "0x0c6e1B792250d6B26Eb6b66695848aAB29648F6B";
const ContractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AuctionEnded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "biddingTime",
				"type": "uint256"
			}
		],
		"name": "AuctionStarted",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "confirmReceived",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endAuction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "bidder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "HighestBidIncreased",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "seller",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			}
		],
		"name": "ItemDelivered",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "placebid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "link",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "biddingTime",
				"type": "uint256"
			}
		],
		"name": "startAuction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_highestBid",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "auctionEndTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ended",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetAuctionEndTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getItemDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getPendingReturns",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStatus",
		"outputs": [
			{
				"internalType": "enum Auction.AuctionStatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "highestBid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "highestBidder",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "imageLink",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "itemDescription",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "itemSeller",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "itemTitle",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "seller",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

let MyContract;
let signer;
const provider = new ethers.providers.Web3Provider(window.ethereum, 11155111);
getProviderOrSigner();

async function getProviderOrSigner() {
	provider.send("eth_requestAccounts", []).then(() => {
		provider.listAccounts().then((accounts) => {
			signer = provider.getSigner(accounts[0]);
			MyContract = new ethers.Contract(
				ContractAddress,
				ContractABI,
				signer
			);
		});
	});
} 


var endTime;
setInterval(timer, 1000);
async function timer() {
	getProviderOrSigner();
	updateStatusElements();
}


var auctionStatus;
async function updateStatusElements() {
	var status = MyContract.getStatus();
	auctionStatus = await status;
	var element = document.getElementById("auction-status");
	var border1 = document.getElementById("border1");
	var border2 = document.getElementById("border2");
	var border3 = document.getElementById("border3");

	if (auctionStatus == 0) {
	  	element.classList.add("pending");
	} else if (auctionStatus == 1) {
	  	element.classList.add("open");
		fethItemDetails();
		border3.style.borderColor = "";
	} else if (auctionStatus == 2) {
	  	element.classList.add("closed");
		border1.style.borderColor = "#262e56";
	  	border1.classList.add("active");
	} else if (auctionStatus == 3) {
		element.classList.add("closed");
		border1.style.borderColor = "";
		border2.style.borderColor = "#262e56";
	  	border2.classList.add("active");
		fethItemDetails();
	} else {
		element.classList.add("closed");
		border2.style.borderColor = "";
		border3.style.borderColor = "#262e56";
		border3.classList.add("active");
		fethItemDetails();
	}
}

async function fethItemDetails() {
	var promisedDetails = MyContract.getItemDetails();
	var details = await promisedDetails;
	document.getElementById("item-title").innerText = details[0];
	document.getElementById("item-title2").innerText = details[0];
	document.getElementById("item-description").innerText = details[1];
	document.getElementById("info-desc").innerText = details[1];
	document.getElementById("item-img").src = details[2];
	updateBidElements();
}

async function updateBidElements() {
	var promisedAddress = MyContract.itemSeller();
	var addr = await promisedAddress;
	document.getElementById("seller-address").innerText = addr;
	document.getElementById("seller-address2").innerText = addr;
	var promisedAddress = MyContract._highestBid();
	var bidDetails = await promisedAddress;
	document.getElementById("highest-bidder-address").innerText = bidDetails[0];
	document.getElementById("highest-bidder-address2").innerText = bidDetails[0];
	document.getElementById("highest-bid").innerText = ethers.utils.formatEther(bidDetails[1])  + " ETH";
	UpdateTimeStamp();
}

async function UpdateTimeStamp(){
	const now = Date.now(); // get current Unix timestamp in milliseconds
	const unixTimestamp = Math.floor(now / 1000); // convert to seconds
	const promisedValue = MyContract.GetAuctionEndTime();
	const value = await promisedValue;
	document.getElementById("timer-count").innerText = (value - unixTimestamp) >= 0 && auctionStatus !== 2 ? (value - unixTimestamp) : "-- --";
}

async function startAuction(){
	var placedTitle = document.getElementById("_item-title").value;
	var placedDescription = document.getElementById("_item-description").value;
	var placedLink = document.getElementById("image-link").value;
	var placedTime = document.getElementById("auction_time").value;
	const setValue = await MyContract.startAuction(placedTitle, placedDescription, placedLink, placedTime);
    await setValue;
	element.classList.remove("closed");
}

async function _placeBid(){
	var placedAmount = document.getElementById("bid_amount").value;
	const msgValue = ethers.utils.parseEther(placedAmount);
	var promisedValue = MyContract.placebid({value: msgValue});
}

async function _withdraw(){
	var promisedValue = MyContract.withdraw();
}

async function _endAuction(){
	var promisedValue = MyContract.endAuction();
}

async function _sendItem(){
	var promisedValue = MyContract.sendItem();
}

async function _confirmReceived(){
	var promisedValue = MyContract.confirmReceived();
}