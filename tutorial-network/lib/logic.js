'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.example.biznet.Trade} changeAssetValue
 * @transaction
 */
function tradeCommodity(trade) {
    trade.commodity.owner = trade.newOwner;
    return getAssetRegistry('org.example.biznet.Commodity')
        .then(function (assetRegistry) {
            return assetRegistry.update(trade.commodity);
        });
}