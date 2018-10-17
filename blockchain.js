const SHA256 = require('crypto-js/sha256')

class Item { 
/* Item to be sold
    Takes in productname, price, and websites to be sold at for now
    Currently, singular website, so to be changed in the future
*/
    constructor(productName, price, website) {
        this.productName = productName;
        this.price = price;
        this.website = website; 
    }
}
class Block {
    // this constructor can take two parameters
    // first is the item, second is the seller
    constructor() {
        var currentDate = new Date();
        this.timestamp = currentDate.getTime();
        this.item = arguments[0];

        this.previousHash = "0"; 
        this.seller = arguments[1]; 
        this.hash = SHA256(this.timestamp + this.item + this.previousHash).toString();
        //this.hash = this.calculateHash();
       // this.nonce = 0;
    }
/*
    calculateHash() {
        return SHA256(this.timestamp + this.item + this.previousHash).toString();
    }*/
/*
    mineBlock(difficulty) {

    }
*/
}

class Blockchain{
    constructor() {
        this.chain = [this.createGenesis()];
    }

    // The genesis block is Empty for now, maybe create a different kind of genesis block in the future where it stores stuff
    createGenesis() {
        return new Block(new Item(0,0,0) ,"Empty");
    }

    latestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.latestBlock().hash;
        newBlock.hash = SHA256(this.timestamp + this.item + this.previousHash).toString();
        //newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    checkValid() {
        for(let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}
let MarketChain = new Blockchain();
MarketChain.addBlock(new Block(new Item("hi","hello","yo"), "Dragon"));

exports.getBlockChain = function() {
    return MarketChain;
}
exports.newBlock = function() {
    return Block;
}
exports.newItem = function() {
    return Item;
}
let jsChain = new Blockchain();
jsChain.addBlock(new Block(new Item(1,1,1), "Frank"));
jsChain.addBlock(new Block(new Item("hi","hello","yo"), "Dragon"));

console.log(JSON.stringify(jsChain, null, 4));

//let MarketChain = new Blockchain();
// The below is a test
/*
let jsChain = new Blockchain();
jsChain.addBlock(new Block(new Item(1,1,1), "Frank"));
jsChain.addBlock(new Block(new Item("hi","hello","yo"), "Dragon"));

console.log(JSON.stringify(jsChain, null, 4));
console.log("Is blockchain valid? " + jsChain.checkValid()); */