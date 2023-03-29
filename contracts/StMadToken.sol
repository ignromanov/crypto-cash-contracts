// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StMadToken is ERC20, Ownable {
    address private _codesFactory;

    constructor() ERC20("StMad Token", "stMad") {}

    modifier onlyCodesFactory() {
        require(msg.sender == _codesFactory, "Only CodesFactory can mint");
        _;
    }

    function setCodesFactory(address newCodesFactory) external onlyOwner {
        _codesFactory = newCodesFactory;
    }

    function mint(address to, uint256 amount) external onlyCodesFactory {
        _mint(to, amount);
    }
}
