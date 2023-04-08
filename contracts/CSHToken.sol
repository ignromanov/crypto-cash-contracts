// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title CSHToken
 * @dev An ERC20 token with minting functionality restricted to the CodesFactory contract.
 */
contract CSHToken is ERC20Upgradeable, OwnableUpgradeable {
    address private _authorizedMinter;
    event CodesFactoryChanged(
        address indexed previousCodesFactory,
        address indexed newCodesFactory
    );

    /**
     * @notice Initializes the CSHToken contract.
     */
    function initialize() public initializer {
        __ERC20_init("CryptoCash Token", "CSH");
        __Ownable_init();
    }

    /**
     * @dev Modifier to restrict minting functionality to the CodesFactory contract.
     */
    modifier onlyCodesFactory() {
        require(
            msg.sender == _authorizedMinter,
            "Only AuthorizedMinter can mint tokens"
        );
        _;
    }

    /**
     * @dev Get the address of the AuthorizedMinter contract.
     */
    function getAuthorizedMinter() public view returns (address) {
        return _authorizedMinter;
    }

    /**
     * @dev Sets the address of the CodesFactory contract.
     * @param newAuthorizedMinter The address of the new AuthorizedMinter contract.
     */
    function setAuthorizedMinter(
        address newAuthorizedMinter
    ) external onlyOwner {
        address previousAuthorizedMinter = _authorizedMinter;
        _authorizedMinter = newAuthorizedMinter;
        emit CodesFactoryChanged(previousAuthorizedMinter, newAuthorizedMinter);
    }

    /**
     * @dev Mints a specified amount of tokens to the given address.
     * @param to The address to mint tokens to.
     * @param amount The amount of tokens to mint.
     */
    function mint(address to, uint256 amount) external onlyCodesFactory {
        _mint(to, amount);
    }
}
