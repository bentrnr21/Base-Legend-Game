// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BaseLegendNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;
    mapping(string => bool) private _usedTokenURIs;

    constructor() ERC721("BaseLegendNFT", "BLNFT") Ownable(msg.sender) {}

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        require(!_usedTokenURIs[tokenURI], "Token URI already used");

        _tokenIds++;
        uint256 newItemId = _tokenIds;

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        _usedTokenURIs[tokenURI] = true;

        return newItemId;
    }
}
