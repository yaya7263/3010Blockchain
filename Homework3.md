1. What we planned on doing: Learn ExpressJS (nodejs), MongoDB, BootStrap, and Blockchain

What one should see: 

A blockchain that is stored in mongodb. New Blocks can be added
to blockchain. Also ability to see who added the new block to the blockchain. The “who” part
will be hardcoded rather than dynamic for now. Also, wallets.

2. Accomplished all of the above except store blockchain on MongoDB and wallets.

Wallets are not included as of now since its used in cryptocurrency, we are using blockchain as a decentralized database rather than a cryptocurrency. 

Upon further research, blocks are stored in .dat files and the blockchain is the name of the link of the blocks

What we plan on doing is have different schemas to imitate the .dat files in a blockchain and then have 
methods to access those schemas in MongoDB to validate the blockchain. So, we will be storing imitations of "blocks" as schemas instead of .dat files. 

In addition to the above, Yang made a website where a seller can input the item she wants to sell and what website she wants to sell at. 
Yang is currently storing these information in the MongoDB. 

Yifan made a website as well, but using AngularJS. Yang made his website to test out the backend, but we will be using Yifan's website in the future.

3. What we had planned:
One can input data onto a website and it will be stored inside the
blockchain. The information can be passed back and force between the model and the view. For
week 2, we will probably not have interaction with website and rather hard code data into the
blockchain. Now we can enter data through website and grab data from database to website.

Changes to the plan:
We tried tackling the problem of passing information from website to backend this week and it works.
However, our blockchain is not stored well in the database since the hash function isn't working in our main javascript file.
We will fix this and store blocks as schemas in the MongoDB, inside each schema will be a variable named "block" that would list what block it belongs to.
We will then implement methods to access the blockchain and verify our blockchain( by verifying all the individual blocks) 

So for next week, our website should be able to pass data to the backend and then store it as a block correctly. And we should also be able to retrieve the blocks
from the database, verify it, and also display it on our website. So in short, we will be "fixing" what we originally planned for this week since we began tackling this already.

This week the frontend and backend are not connected, we will be connecting them for next week!

In addition:
We will creating user signup and user login. When a user signups, she will be generated a private and public key. We are currently using a field called "seller" as identity
that the user inputs on the website, now, we will be using public key instead. We will also add the act of "mining" blocks according to a certain difficulty in our blockchain.


4. video of blockchain and Yang's website
 https://www.screencast.com/t/gW6m4GBIFTf
 
 image of Yifan's website:
 
 https://imgur.com/a/d4gn5t8