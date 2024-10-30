import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Approval: event("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", "Approval(address,address,uint256)", {"owner": indexed(p.address), "spender": indexed(p.address), "amount": p.uint256}),
    Burn: event("0xcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5", "Burn(address,uint256)", {"to": p.address, "amount": p.uint256}),
    DefaultAdminDelayChangeCanceled: event("0x2b1fa2edafe6f7b9e97c1a9e0c3660e645beb2dcaa2d45bdbf9beaf5472e1ec5", "DefaultAdminDelayChangeCanceled()", {}),
    DefaultAdminDelayChangeScheduled: event("0xf1038c18cf84a56e432fdbfaf746924b7ea511dfe03a6506a0ceba4888788d9b", "DefaultAdminDelayChangeScheduled(uint48,uint48)", {"newDelay": p.uint48, "effectSchedule": p.uint48}),
    DefaultAdminTransferCanceled: event("0x8886ebfc4259abdbc16601dd8fb5678e54878f47b3c34836cfc51154a9605109", "DefaultAdminTransferCanceled()", {}),
    DefaultAdminTransferScheduled: event("0x3377dc44241e779dd06afab5b788a35ca5f3b778836e2990bdb26a2a4b2e5ed6", "DefaultAdminTransferScheduled(address,uint48)", {"newAdmin": indexed(p.address), "acceptSchedule": p.uint48}),
    DelegateChanged: event("0x3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f", "DelegateChanged(address,address,address)", {"delegator": indexed(p.address), "fromDelegate": indexed(p.address), "toDelegate": indexed(p.address)}),
    DelegateVotesChanged: event("0xdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724", "DelegateVotesChanged(address,uint256,uint256)", {"delegate": indexed(p.address), "previousVotes": p.uint256, "newVotes": p.uint256}),
    EIP712DomainChanged: event("0x0a6387c9ea3628b88a633bb4f3b151770f70085117a15f9bf3787cda53f13d31", "EIP712DomainChanged()", {}),
    Initialized: event("0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2", "Initialized(uint64)", {"version": p.uint64}),
    Mint: event("0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885", "Mint(address,uint256)", {"to": p.address, "amount": p.uint256}),
    Rebase: event("0xc6642d24d84e7f3d36ca39f5cce10e75639d9b158d5193aa350e2f900653e4c0", "Rebase(uint256,uint256,uint256)", {"currentSupply": p.uint256, "newSupply": p.uint256, "rebaseInterval": p.uint256}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    Transfer: event("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "Transfer(address,address,uint256)", {"from": indexed(p.address), "to": indexed(p.address), "amount": p.uint256}),
}

export const functions = {
    BURNER_ROLE: viewFun("0x282c51f3", "BURNER_ROLE()", {}, p.bytes32),
    CLOCK_MODE: viewFun("0x4bf5d7e9", "CLOCK_MODE()", {}, p.string),
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    FEE_RECIPIENT_ROLE: viewFun("0xe82748ca", "FEE_RECIPIENT_ROLE()", {}, p.bytes32),
    GOVERNOR_ROLE: viewFun("0xccc57490", "GOVERNOR_ROLE()", {}, p.bytes32),
    MANAGER_ROLE: viewFun("0xec87621c", "MANAGER_ROLE()", {}, p.bytes32),
    MINTER_ROLE: viewFun("0xd5391393", "MINTER_ROLE()", {}, p.bytes32),
    PAUSER_ROLE: viewFun("0xe63ab1e9", "PAUSER_ROLE()", {}, p.bytes32),
    REBASER_ROLE: viewFun("0x83eb70e5", "REBASER_ROLE()", {}, p.bytes32),
    acceptDefaultAdminTransfer: fun("0xcefc1429", "acceptDefaultAdminTransfer()", {}, ),
    allowance: viewFun("0xdd62ed3e", "allowance(address,address)", {"owner_": p.address, "spender": p.address}, p.uint256),
    approve: fun("0x095ea7b3", "approve(address,uint256)", {"spender": p.address, "value": p.uint256}, p.bool),
    assetToShareDecimals: viewFun("0x6838a838", "assetToShareDecimals()", {}, p.uint256),
    assetsOf: viewFun("0x2c62fa10", "assetsOf(address)", {"who": p.address}, p.uint256),
    assetsPerShare: viewFun("0x35d16e17", "assetsPerShare()", {}, p.uint256),
    assetsToShares: viewFun("0xe0b231fa", "assetsToShares(uint256)", {"assets": p.uint256}, p.uint256),
    'balanceOf(address,uint256)': viewFun("0x00fdd58e", "balanceOf(address,uint256)", {"account": p.address, "timepoint": p.uint256}, p.uint256),
    'balanceOf(address)': viewFun("0x70a08231", "balanceOf(address)", {"who": p.address}, p.uint256),
    beginDefaultAdminTransfer: fun("0x634e93da", "beginDefaultAdminTransfer(address)", {"newAdmin": p.address}, ),
    burnAssets: fun("0xc87d0e00", "burnAssets(address,uint256)", {"refundee": p.address, "assets": p.uint256}, p.uint256),
    burnPaused: viewFun("0xd684534e", "burnPaused()", {}, p.bool),
    burnShares: fun("0xee7a7c04", "burnShares(address,uint256)", {"refundee": p.address, "shares": p.uint256}, p.uint256),
    cancelDefaultAdminTransfer: fun("0xd602b9fd", "cancelDefaultAdminTransfer()", {}, ),
    changeDefaultAdminDelay: fun("0x649a5ec7", "changeDefaultAdminDelay(uint48)", {"newDelay": p.uint48}, ),
    clock: viewFun("0x91ddadf4", "clock()", {}, p.uint48),
    decimals: viewFun("0x313ce567", "decimals()", {}, p.uint8),
    defaultAdmin: viewFun("0x84ef8ffc", "defaultAdmin()", {}, p.address),
    defaultAdminDelay: viewFun("0xcc8463c8", "defaultAdminDelay()", {}, p.uint48),
    defaultAdminDelayIncreaseWait: viewFun("0x022d63fb", "defaultAdminDelayIncreaseWait()", {}, p.uint48),
    delegate: fun("0x5c19a95c", "delegate(address)", {"delegatee": p.address}, ),
    delegateBySig: fun("0xc3cda520", "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)", {"delegatee": p.address, "nonce": p.uint256, "expiry": p.uint256, "v": p.uint8, "r": p.bytes32, "s": p.bytes32}, ),
    delegates: viewFun("0x587cde1e", "delegates(address)", {"account": p.address}, p.address),
    eip712Domain: viewFun("0x84b0196e", "eip712Domain()", {}, {"fields": p.bytes1, "name": p.string, "version": p.string, "chainId": p.uint256, "verifyingContract": p.address, "salt": p.bytes32, "extensions": p.array(p.uint256)}),
    getPastTotalSupply: viewFun("0x8e539e8c", "getPastTotalSupply(uint256)", {"timepoint": p.uint256}, p.uint256),
    getPastVotes: viewFun("0x3a46b1a8", "getPastVotes(address,uint256)", {"account": p.address, "timepoint": p.uint256}, p.uint256),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    'getVotes(address)': viewFun("0x9ab24eb0", "getVotes(address)", {"account": p.address}, p.uint256),
    'getVotes(address,uint256)': viewFun("0xeb9019d4", "getVotes(address,uint256)", {"account": p.address, "timepoint": p.uint256}, p.uint256),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    initialize: fun("0xa01ef25f", "initialize(address,uint256,address,address,address)", {"gov_": p.address, "initialSupply_": p.uint256, "burner": p.address, "minter": p.address, "rebaser": p.address}, ),
    lastSnapshotTime: viewFun("0xbe74baf2", "lastSnapshotTime()", {}, p.uint32),
    mintAssets: fun("0x3c54d386", "mintAssets(address,uint256)", {"to": p.address, "amount": p.uint256}, p.uint256),
    mintPaused: viewFun("0x7e4831d3", "mintPaused()", {}, p.bool),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    newSnapshotTime: fun("0x96d6d2fb", "newSnapshotTime(uint256)", {"snapshot": p.uint256}, p.bool),
    nonces: viewFun("0x7ecebe00", "nonces(address)", {"owner": p.address}, p.uint256),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    pauseBurn: fun("0x1be8db96", "pauseBurn(bool)", {"status": p.bool}, p.bool),
    pauseMint: fun("0xf30e6e77", "pauseMint(bool)", {"status": p.bool}, p.bool),
    pauseRebase: fun("0xf3ab777b", "pauseRebase(bool)", {"status": p.bool}, p.bool),
    pauseTransfer: fun("0x1ecc17c4", "pauseTransfer(bool)", {"status": p.bool}, p.bool),
    pendingDefaultAdmin: viewFun("0xcf6eefb7", "pendingDefaultAdmin()", {}, {"newAdmin": p.address, "schedule": p.uint48}),
    pendingDefaultAdminDelay: viewFun("0xa1eda53c", "pendingDefaultAdminDelay()", {}, {"newDelay": p.uint48, "schedule": p.uint48}),
    preSyncSupply: viewFun("0x3141b2d7", "preSyncSupply()", {}, p.uint96),
    rebasePaused: viewFun("0x53ca9f24", "rebasePaused()", {}, p.bool),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    rescueTokens: fun("0xcea9d26f", "rescueTokens(address,address,uint256)", {"token": p.address, "to": p.address, "amount": p.uint256}, p.bool),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    rewardsToSync: viewFun("0x7478c9e0", "rewardsToSync()", {}, p.uint96),
    rollbackDefaultAdminDelay: fun("0x0aa6220b", "rollbackDefaultAdminDelay()", {}, ),
    shareDecimals: viewFun("0x3af8e5eb", "shareDecimals()", {}, p.uint256),
    sharesOf: viewFun("0xf5eb42dc", "sharesOf(address)", {"who": p.address}, p.uint256),
    sharesPerAsset: viewFun("0x7c427be6", "sharesPerAsset()", {}, p.uint256),
    sharesToAssets: viewFun("0x7fe0c850", "sharesToAssets(uint256)", {"shares": p.uint256}, p.uint256),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    symbol: viewFun("0x95d89b41", "symbol()", {}, p.string),
    syncEnd: viewFun("0x0b80d4f3", "syncEnd()", {}, p.uint32),
    syncStart: viewFun("0x07655464", "syncStart()", {}, p.uint32),
    syncSupply: fun("0xc693965d", "syncSupply(uint256,uint256)", {"newSupply": p.uint256, "syncInterval": p.uint256}, p.bool),
    totalAssetSupply: viewFun("0x8fb807c5", "totalAssetSupply()", {}, p.uint256),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    totalSupplyAt: viewFun("0x981b24d0", "totalSupplyAt(uint256)", {"timepoint": p.uint256}, p.uint256),
    transfer: fun("0xa9059cbb", "transfer(address,uint256)", {"to": p.address, "shares": p.uint256}, p.bool),
    transferFrom: fun("0x23b872dd", "transferFrom(address,address,uint256)", {"from": p.address, "to": p.address, "shares": p.uint256}, p.bool),
    transferPaused: viewFun("0xfb2cb34e", "transferPaused()", {}, p.bool),
}

export class Contract extends ContractBase {

    BURNER_ROLE() {
        return this.eth_call(functions.BURNER_ROLE, {})
    }

    CLOCK_MODE() {
        return this.eth_call(functions.CLOCK_MODE, {})
    }

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    FEE_RECIPIENT_ROLE() {
        return this.eth_call(functions.FEE_RECIPIENT_ROLE, {})
    }

    GOVERNOR_ROLE() {
        return this.eth_call(functions.GOVERNOR_ROLE, {})
    }

    MANAGER_ROLE() {
        return this.eth_call(functions.MANAGER_ROLE, {})
    }

    MINTER_ROLE() {
        return this.eth_call(functions.MINTER_ROLE, {})
    }

    PAUSER_ROLE() {
        return this.eth_call(functions.PAUSER_ROLE, {})
    }

    REBASER_ROLE() {
        return this.eth_call(functions.REBASER_ROLE, {})
    }

    allowance(owner_: AllowanceParams["owner_"], spender: AllowanceParams["spender"]) {
        return this.eth_call(functions.allowance, {owner_, spender})
    }

    assetToShareDecimals() {
        return this.eth_call(functions.assetToShareDecimals, {})
    }

    assetsOf(who: AssetsOfParams["who"]) {
        return this.eth_call(functions.assetsOf, {who})
    }

    assetsPerShare() {
        return this.eth_call(functions.assetsPerShare, {})
    }

    assetsToShares(assets: AssetsToSharesParams["assets"]) {
        return this.eth_call(functions.assetsToShares, {assets})
    }

    'balanceOf(address,uint256)'(account: BalanceOfParams_0["account"], timepoint: BalanceOfParams_0["timepoint"]) {
        return this.eth_call(functions['balanceOf(address,uint256)'], {account, timepoint})
    }

    'balanceOf(address)'(who: BalanceOfParams_1["who"]) {
        return this.eth_call(functions['balanceOf(address)'], {who})
    }

    burnPaused() {
        return this.eth_call(functions.burnPaused, {})
    }

    clock() {
        return this.eth_call(functions.clock, {})
    }

    decimals() {
        return this.eth_call(functions.decimals, {})
    }

    defaultAdmin() {
        return this.eth_call(functions.defaultAdmin, {})
    }

    defaultAdminDelay() {
        return this.eth_call(functions.defaultAdminDelay, {})
    }

    defaultAdminDelayIncreaseWait() {
        return this.eth_call(functions.defaultAdminDelayIncreaseWait, {})
    }

    delegates(account: DelegatesParams["account"]) {
        return this.eth_call(functions.delegates, {account})
    }

    eip712Domain() {
        return this.eth_call(functions.eip712Domain, {})
    }

    getPastTotalSupply(timepoint: GetPastTotalSupplyParams["timepoint"]) {
        return this.eth_call(functions.getPastTotalSupply, {timepoint})
    }

    getPastVotes(account: GetPastVotesParams["account"], timepoint: GetPastVotesParams["timepoint"]) {
        return this.eth_call(functions.getPastVotes, {account, timepoint})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    'getVotes(address)'(account: GetVotesParams_0["account"]) {
        return this.eth_call(functions['getVotes(address)'], {account})
    }

    'getVotes(address,uint256)'(account: GetVotesParams_1["account"], timepoint: GetVotesParams_1["timepoint"]) {
        return this.eth_call(functions['getVotes(address,uint256)'], {account, timepoint})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    lastSnapshotTime() {
        return this.eth_call(functions.lastSnapshotTime, {})
    }

    mintPaused() {
        return this.eth_call(functions.mintPaused, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nonces(owner: NoncesParams["owner"]) {
        return this.eth_call(functions.nonces, {owner})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    pendingDefaultAdmin() {
        return this.eth_call(functions.pendingDefaultAdmin, {})
    }

    pendingDefaultAdminDelay() {
        return this.eth_call(functions.pendingDefaultAdminDelay, {})
    }

    preSyncSupply() {
        return this.eth_call(functions.preSyncSupply, {})
    }

    rebasePaused() {
        return this.eth_call(functions.rebasePaused, {})
    }

    rewardsToSync() {
        return this.eth_call(functions.rewardsToSync, {})
    }

    shareDecimals() {
        return this.eth_call(functions.shareDecimals, {})
    }

    sharesOf(who: SharesOfParams["who"]) {
        return this.eth_call(functions.sharesOf, {who})
    }

    sharesPerAsset() {
        return this.eth_call(functions.sharesPerAsset, {})
    }

    sharesToAssets(shares: SharesToAssetsParams["shares"]) {
        return this.eth_call(functions.sharesToAssets, {shares})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    symbol() {
        return this.eth_call(functions.symbol, {})
    }

    syncEnd() {
        return this.eth_call(functions.syncEnd, {})
    }

    syncStart() {
        return this.eth_call(functions.syncStart, {})
    }

    totalAssetSupply() {
        return this.eth_call(functions.totalAssetSupply, {})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }

    totalSupplyAt(timepoint: TotalSupplyAtParams["timepoint"]) {
        return this.eth_call(functions.totalSupplyAt, {timepoint})
    }

    transferPaused() {
        return this.eth_call(functions.transferPaused, {})
    }
}

/// Event types
export type ApprovalEventArgs = EParams<typeof events.Approval>
export type BurnEventArgs = EParams<typeof events.Burn>
export type DefaultAdminDelayChangeCanceledEventArgs = EParams<typeof events.DefaultAdminDelayChangeCanceled>
export type DefaultAdminDelayChangeScheduledEventArgs = EParams<typeof events.DefaultAdminDelayChangeScheduled>
export type DefaultAdminTransferCanceledEventArgs = EParams<typeof events.DefaultAdminTransferCanceled>
export type DefaultAdminTransferScheduledEventArgs = EParams<typeof events.DefaultAdminTransferScheduled>
export type DelegateChangedEventArgs = EParams<typeof events.DelegateChanged>
export type DelegateVotesChangedEventArgs = EParams<typeof events.DelegateVotesChanged>
export type EIP712DomainChangedEventArgs = EParams<typeof events.EIP712DomainChanged>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type MintEventArgs = EParams<typeof events.Mint>
export type RebaseEventArgs = EParams<typeof events.Rebase>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type TransferEventArgs = EParams<typeof events.Transfer>

/// Function types
export type BURNER_ROLEParams = FunctionArguments<typeof functions.BURNER_ROLE>
export type BURNER_ROLEReturn = FunctionReturn<typeof functions.BURNER_ROLE>

export type CLOCK_MODEParams = FunctionArguments<typeof functions.CLOCK_MODE>
export type CLOCK_MODEReturn = FunctionReturn<typeof functions.CLOCK_MODE>

export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type FEE_RECIPIENT_ROLEParams = FunctionArguments<typeof functions.FEE_RECIPIENT_ROLE>
export type FEE_RECIPIENT_ROLEReturn = FunctionReturn<typeof functions.FEE_RECIPIENT_ROLE>

export type GOVERNOR_ROLEParams = FunctionArguments<typeof functions.GOVERNOR_ROLE>
export type GOVERNOR_ROLEReturn = FunctionReturn<typeof functions.GOVERNOR_ROLE>

export type MANAGER_ROLEParams = FunctionArguments<typeof functions.MANAGER_ROLE>
export type MANAGER_ROLEReturn = FunctionReturn<typeof functions.MANAGER_ROLE>

export type MINTER_ROLEParams = FunctionArguments<typeof functions.MINTER_ROLE>
export type MINTER_ROLEReturn = FunctionReturn<typeof functions.MINTER_ROLE>

export type PAUSER_ROLEParams = FunctionArguments<typeof functions.PAUSER_ROLE>
export type PAUSER_ROLEReturn = FunctionReturn<typeof functions.PAUSER_ROLE>

export type REBASER_ROLEParams = FunctionArguments<typeof functions.REBASER_ROLE>
export type REBASER_ROLEReturn = FunctionReturn<typeof functions.REBASER_ROLE>

export type AcceptDefaultAdminTransferParams = FunctionArguments<typeof functions.acceptDefaultAdminTransfer>
export type AcceptDefaultAdminTransferReturn = FunctionReturn<typeof functions.acceptDefaultAdminTransfer>

export type AllowanceParams = FunctionArguments<typeof functions.allowance>
export type AllowanceReturn = FunctionReturn<typeof functions.allowance>

export type ApproveParams = FunctionArguments<typeof functions.approve>
export type ApproveReturn = FunctionReturn<typeof functions.approve>

export type AssetToShareDecimalsParams = FunctionArguments<typeof functions.assetToShareDecimals>
export type AssetToShareDecimalsReturn = FunctionReturn<typeof functions.assetToShareDecimals>

export type AssetsOfParams = FunctionArguments<typeof functions.assetsOf>
export type AssetsOfReturn = FunctionReturn<typeof functions.assetsOf>

export type AssetsPerShareParams = FunctionArguments<typeof functions.assetsPerShare>
export type AssetsPerShareReturn = FunctionReturn<typeof functions.assetsPerShare>

export type AssetsToSharesParams = FunctionArguments<typeof functions.assetsToShares>
export type AssetsToSharesReturn = FunctionReturn<typeof functions.assetsToShares>

export type BalanceOfParams_0 = FunctionArguments<typeof functions['balanceOf(address,uint256)']>
export type BalanceOfReturn_0 = FunctionReturn<typeof functions['balanceOf(address,uint256)']>

export type BalanceOfParams_1 = FunctionArguments<typeof functions['balanceOf(address)']>
export type BalanceOfReturn_1 = FunctionReturn<typeof functions['balanceOf(address)']>

export type BeginDefaultAdminTransferParams = FunctionArguments<typeof functions.beginDefaultAdminTransfer>
export type BeginDefaultAdminTransferReturn = FunctionReturn<typeof functions.beginDefaultAdminTransfer>

export type BurnAssetsParams = FunctionArguments<typeof functions.burnAssets>
export type BurnAssetsReturn = FunctionReturn<typeof functions.burnAssets>

export type BurnPausedParams = FunctionArguments<typeof functions.burnPaused>
export type BurnPausedReturn = FunctionReturn<typeof functions.burnPaused>

export type BurnSharesParams = FunctionArguments<typeof functions.burnShares>
export type BurnSharesReturn = FunctionReturn<typeof functions.burnShares>

export type CancelDefaultAdminTransferParams = FunctionArguments<typeof functions.cancelDefaultAdminTransfer>
export type CancelDefaultAdminTransferReturn = FunctionReturn<typeof functions.cancelDefaultAdminTransfer>

export type ChangeDefaultAdminDelayParams = FunctionArguments<typeof functions.changeDefaultAdminDelay>
export type ChangeDefaultAdminDelayReturn = FunctionReturn<typeof functions.changeDefaultAdminDelay>

export type ClockParams = FunctionArguments<typeof functions.clock>
export type ClockReturn = FunctionReturn<typeof functions.clock>

export type DecimalsParams = FunctionArguments<typeof functions.decimals>
export type DecimalsReturn = FunctionReturn<typeof functions.decimals>

export type DefaultAdminParams = FunctionArguments<typeof functions.defaultAdmin>
export type DefaultAdminReturn = FunctionReturn<typeof functions.defaultAdmin>

export type DefaultAdminDelayParams = FunctionArguments<typeof functions.defaultAdminDelay>
export type DefaultAdminDelayReturn = FunctionReturn<typeof functions.defaultAdminDelay>

export type DefaultAdminDelayIncreaseWaitParams = FunctionArguments<typeof functions.defaultAdminDelayIncreaseWait>
export type DefaultAdminDelayIncreaseWaitReturn = FunctionReturn<typeof functions.defaultAdminDelayIncreaseWait>

export type DelegateParams = FunctionArguments<typeof functions.delegate>
export type DelegateReturn = FunctionReturn<typeof functions.delegate>

export type DelegateBySigParams = FunctionArguments<typeof functions.delegateBySig>
export type DelegateBySigReturn = FunctionReturn<typeof functions.delegateBySig>

export type DelegatesParams = FunctionArguments<typeof functions.delegates>
export type DelegatesReturn = FunctionReturn<typeof functions.delegates>

export type Eip712DomainParams = FunctionArguments<typeof functions.eip712Domain>
export type Eip712DomainReturn = FunctionReturn<typeof functions.eip712Domain>

export type GetPastTotalSupplyParams = FunctionArguments<typeof functions.getPastTotalSupply>
export type GetPastTotalSupplyReturn = FunctionReturn<typeof functions.getPastTotalSupply>

export type GetPastVotesParams = FunctionArguments<typeof functions.getPastVotes>
export type GetPastVotesReturn = FunctionReturn<typeof functions.getPastVotes>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GetVotesParams_0 = FunctionArguments<typeof functions['getVotes(address)']>
export type GetVotesReturn_0 = FunctionReturn<typeof functions['getVotes(address)']>

export type GetVotesParams_1 = FunctionArguments<typeof functions['getVotes(address,uint256)']>
export type GetVotesReturn_1 = FunctionReturn<typeof functions['getVotes(address,uint256)']>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type LastSnapshotTimeParams = FunctionArguments<typeof functions.lastSnapshotTime>
export type LastSnapshotTimeReturn = FunctionReturn<typeof functions.lastSnapshotTime>

export type MintAssetsParams = FunctionArguments<typeof functions.mintAssets>
export type MintAssetsReturn = FunctionReturn<typeof functions.mintAssets>

export type MintPausedParams = FunctionArguments<typeof functions.mintPaused>
export type MintPausedReturn = FunctionReturn<typeof functions.mintPaused>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NewSnapshotTimeParams = FunctionArguments<typeof functions.newSnapshotTime>
export type NewSnapshotTimeReturn = FunctionReturn<typeof functions.newSnapshotTime>

export type NoncesParams = FunctionArguments<typeof functions.nonces>
export type NoncesReturn = FunctionReturn<typeof functions.nonces>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type PauseBurnParams = FunctionArguments<typeof functions.pauseBurn>
export type PauseBurnReturn = FunctionReturn<typeof functions.pauseBurn>

export type PauseMintParams = FunctionArguments<typeof functions.pauseMint>
export type PauseMintReturn = FunctionReturn<typeof functions.pauseMint>

export type PauseRebaseParams = FunctionArguments<typeof functions.pauseRebase>
export type PauseRebaseReturn = FunctionReturn<typeof functions.pauseRebase>

export type PauseTransferParams = FunctionArguments<typeof functions.pauseTransfer>
export type PauseTransferReturn = FunctionReturn<typeof functions.pauseTransfer>

export type PendingDefaultAdminParams = FunctionArguments<typeof functions.pendingDefaultAdmin>
export type PendingDefaultAdminReturn = FunctionReturn<typeof functions.pendingDefaultAdmin>

export type PendingDefaultAdminDelayParams = FunctionArguments<typeof functions.pendingDefaultAdminDelay>
export type PendingDefaultAdminDelayReturn = FunctionReturn<typeof functions.pendingDefaultAdminDelay>

export type PreSyncSupplyParams = FunctionArguments<typeof functions.preSyncSupply>
export type PreSyncSupplyReturn = FunctionReturn<typeof functions.preSyncSupply>

export type RebasePausedParams = FunctionArguments<typeof functions.rebasePaused>
export type RebasePausedReturn = FunctionReturn<typeof functions.rebasePaused>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RescueTokensParams = FunctionArguments<typeof functions.rescueTokens>
export type RescueTokensReturn = FunctionReturn<typeof functions.rescueTokens>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type RewardsToSyncParams = FunctionArguments<typeof functions.rewardsToSync>
export type RewardsToSyncReturn = FunctionReturn<typeof functions.rewardsToSync>

export type RollbackDefaultAdminDelayParams = FunctionArguments<typeof functions.rollbackDefaultAdminDelay>
export type RollbackDefaultAdminDelayReturn = FunctionReturn<typeof functions.rollbackDefaultAdminDelay>

export type ShareDecimalsParams = FunctionArguments<typeof functions.shareDecimals>
export type ShareDecimalsReturn = FunctionReturn<typeof functions.shareDecimals>

export type SharesOfParams = FunctionArguments<typeof functions.sharesOf>
export type SharesOfReturn = FunctionReturn<typeof functions.sharesOf>

export type SharesPerAssetParams = FunctionArguments<typeof functions.sharesPerAsset>
export type SharesPerAssetReturn = FunctionReturn<typeof functions.sharesPerAsset>

export type SharesToAssetsParams = FunctionArguments<typeof functions.sharesToAssets>
export type SharesToAssetsReturn = FunctionReturn<typeof functions.sharesToAssets>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type SymbolParams = FunctionArguments<typeof functions.symbol>
export type SymbolReturn = FunctionReturn<typeof functions.symbol>

export type SyncEndParams = FunctionArguments<typeof functions.syncEnd>
export type SyncEndReturn = FunctionReturn<typeof functions.syncEnd>

export type SyncStartParams = FunctionArguments<typeof functions.syncStart>
export type SyncStartReturn = FunctionReturn<typeof functions.syncStart>

export type SyncSupplyParams = FunctionArguments<typeof functions.syncSupply>
export type SyncSupplyReturn = FunctionReturn<typeof functions.syncSupply>

export type TotalAssetSupplyParams = FunctionArguments<typeof functions.totalAssetSupply>
export type TotalAssetSupplyReturn = FunctionReturn<typeof functions.totalAssetSupply>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type TotalSupplyAtParams = FunctionArguments<typeof functions.totalSupplyAt>
export type TotalSupplyAtReturn = FunctionReturn<typeof functions.totalSupplyAt>

export type TransferParams = FunctionArguments<typeof functions.transfer>
export type TransferReturn = FunctionReturn<typeof functions.transfer>

export type TransferFromParams = FunctionArguments<typeof functions.transferFrom>
export type TransferFromReturn = FunctionReturn<typeof functions.transferFrom>

export type TransferPausedParams = FunctionArguments<typeof functions.transferPaused>
export type TransferPausedReturn = FunctionReturn<typeof functions.transferPaused>

