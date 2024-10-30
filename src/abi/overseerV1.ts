import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    DefaultAdminDelayChangeCanceled: event("0x2b1fa2edafe6f7b9e97c1a9e0c3660e645beb2dcaa2d45bdbf9beaf5472e1ec5", "DefaultAdminDelayChangeCanceled()", {}),
    DefaultAdminDelayChangeScheduled: event("0xf1038c18cf84a56e432fdbfaf746924b7ea511dfe03a6506a0ceba4888788d9b", "DefaultAdminDelayChangeScheduled(uint48,uint48)", {"newDelay": p.uint48, "effectSchedule": p.uint48}),
    DefaultAdminTransferCanceled: event("0x8886ebfc4259abdbc16601dd8fb5678e54878f47b3c34836cfc51154a9605109", "DefaultAdminTransferCanceled()", {}),
    DefaultAdminTransferScheduled: event("0x3377dc44241e779dd06afab5b788a35ca5f3b778836e2990bdb26a2a4b2e5ed6", "DefaultAdminTransferScheduled(address,uint48)", {"newAdmin": indexed(p.address), "acceptSchedule": p.uint48}),
    Initialized: event("0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2", "Initialized(uint64)", {"version": p.uint64}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
}

export const functions = {
    BURNER_ROLE: viewFun("0x282c51f3", "BURNER_ROLE()", {}, p.bytes32),
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    FEE_RECIPIENT_ROLE: viewFun("0xe82748ca", "FEE_RECIPIENT_ROLE()", {}, p.bytes32),
    GOVERNOR_ROLE: viewFun("0xccc57490", "GOVERNOR_ROLE()", {}, p.bytes32),
    MANAGER_ROLE: viewFun("0xec87621c", "MANAGER_ROLE()", {}, p.bytes32),
    MINTER_ROLE: viewFun("0xd5391393", "MINTER_ROLE()", {}, p.bytes32),
    PAUSER_ROLE: viewFun("0xe63ab1e9", "PAUSER_ROLE()", {}, p.bytes32),
    REBASER_ROLE: viewFun("0x83eb70e5", "REBASER_ROLE()", {}, p.bytes32),
    acceptDefaultAdminTransfer: fun("0xcefc1429", "acceptDefaultAdminTransfer()", {}, ),
    aprThresholdBps: viewFun("0x10e481d5", "aprThresholdBps()", {}, p.uint256),
    beginDefaultAdminTransfer: fun("0x634e93da", "beginDefaultAdminTransfer(address)", {"newAdmin": p.address}, ),
    burn: fun("0x9dc29fac", "burn(address,uint256)", {"to": p.address, "amount": p.uint256}, p.uint256),
    burns: viewFun("0xa86eb292", "burns(uint256)", {"_0": p.uint256}, {"amount": p.uint88, "user": p.address, "completed": p.bool, "sum": p.uint256}),
    cancelDefaultAdminTransfer: fun("0xd602b9fd", "cancelDefaultAdminTransfer()", {}, ),
    changeDefaultAdminDelay: fun("0x649a5ec7", "changeDefaultAdminDelay(uint48)", {"newDelay": p.uint48}, ),
    defaultAdmin: viewFun("0x84ef8ffc", "defaultAdmin()", {}, p.address),
    defaultAdminDelay: viewFun("0xcc8463c8", "defaultAdminDelay()", {}, p.uint48),
    defaultAdminDelayIncreaseWait: viewFun("0x022d63fb", "defaultAdminDelayIncreaseWait()", {}, p.uint48),
    getAllBurns: viewFun("0x03b41f74", "getAllBurns()", {}, p.array(p.struct({"amount": p.uint88, "user": p.address, "completed": p.bool, "sum": p.uint256}))),
    getBurnIds: viewFun("0x462126d7", "getBurnIds(address)", {"account": p.address}, p.array(p.uint256)),
    getBurns: viewFun("0x039fa5de", "getBurns(address)", {"account": p.address}, {"_0": p.array(p.struct({"amount": p.uint88, "user": p.address, "completed": p.bool, "sum": p.uint256})), "_1": p.array(p.uint256), "_2": p.array(p.bool)}),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    gov: viewFun("0x12d43a51", "gov()", {}, p.address),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    initialize: fun("0x485cc955", "initialize(address,address)", {"gov_": p.address, "sthype_": p.address}, ),
    lastRebaseTime: viewFun("0x1924063e", "lastRebaseTime()", {}, p.uint256),
    mint: fun("0x6a627842", "mint(address)", {"to": p.address}, p.uint256),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    pendingDefaultAdmin: viewFun("0xcf6eefb7", "pendingDefaultAdmin()", {}, {"newAdmin": p.address, "schedule": p.uint48}),
    pendingDefaultAdminDelay: viewFun("0xa1eda53c", "pendingDefaultAdminDelay()", {}, {"newDelay": p.uint48, "schedule": p.uint48}),
    rebase: fun("0xbc4f2d6d", "rebase(uint256)", {"l1Balance": p.uint256}, ),
    receiveFromL1: fun("0xec9bd3b4", "receiveFromL1(uint256)", {"amount": p.uint256}, ),
    redeem: fun("0xdb006a75", "redeem(uint256)", {"burnId": p.uint256}, ),
    redeemable: viewFun("0x825a926f", "redeemable(uint256)", {"burnId": p.uint256}, p.bool),
    redeemed: viewFun("0xe231bff0", "redeemed()", {}, p.uint256),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    rollbackDefaultAdminDelay: fun("0x0aa6220b", "rollbackDefaultAdminDelay()", {}, ),
    setAprThreshold: fun("0xe549b605", "setAprThreshold(uint256)", {"aprThreshold": p.uint256}, ),
    setSlashThreshold: fun("0x06b18384", "setSlashThreshold(uint256)", {"slashThreshold": p.uint256}, ),
    slashThresholdBps: viewFun("0x3f6c17ad", "slashThresholdBps()", {}, p.uint256),
    sthype: viewFun("0xb21c82f4", "sthype()", {}, p.address),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    syncInterval: viewFun("0xdbe41993", "syncInterval()", {}, p.uint256),
    system: viewFun("0x95bf75fd", "system()", {}, p.address),
    totalPendingBurns: viewFun("0x5fc63102", "totalPendingBurns()", {}, p.uint256),
    transferToL1: fun("0xd4a1bd20", "transferToL1(uint256)", {"amount": p.uint256}, ),
}

export class Contract extends ContractBase {

    BURNER_ROLE() {
        return this.eth_call(functions.BURNER_ROLE, {})
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

    aprThresholdBps() {
        return this.eth_call(functions.aprThresholdBps, {})
    }

    burns(_0: BurnsParams["_0"]) {
        return this.eth_call(functions.burns, {_0})
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

    getAllBurns() {
        return this.eth_call(functions.getAllBurns, {})
    }

    getBurnIds(account: GetBurnIdsParams["account"]) {
        return this.eth_call(functions.getBurnIds, {account})
    }

    getBurns(account: GetBurnsParams["account"]) {
        return this.eth_call(functions.getBurns, {account})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    gov() {
        return this.eth_call(functions.gov, {})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    lastRebaseTime() {
        return this.eth_call(functions.lastRebaseTime, {})
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

    redeemable(burnId: RedeemableParams["burnId"]) {
        return this.eth_call(functions.redeemable, {burnId})
    }

    redeemed() {
        return this.eth_call(functions.redeemed, {})
    }

    slashThresholdBps() {
        return this.eth_call(functions.slashThresholdBps, {})
    }

    sthype() {
        return this.eth_call(functions.sthype, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    syncInterval() {
        return this.eth_call(functions.syncInterval, {})
    }

    system() {
        return this.eth_call(functions.system, {})
    }

    totalPendingBurns() {
        return this.eth_call(functions.totalPendingBurns, {})
    }
}

/// Event types
export type DefaultAdminDelayChangeCanceledEventArgs = EParams<typeof events.DefaultAdminDelayChangeCanceled>
export type DefaultAdminDelayChangeScheduledEventArgs = EParams<typeof events.DefaultAdminDelayChangeScheduled>
export type DefaultAdminTransferCanceledEventArgs = EParams<typeof events.DefaultAdminTransferCanceled>
export type DefaultAdminTransferScheduledEventArgs = EParams<typeof events.DefaultAdminTransferScheduled>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>

/// Function types
export type BURNER_ROLEParams = FunctionArguments<typeof functions.BURNER_ROLE>
export type BURNER_ROLEReturn = FunctionReturn<typeof functions.BURNER_ROLE>

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

export type AprThresholdBpsParams = FunctionArguments<typeof functions.aprThresholdBps>
export type AprThresholdBpsReturn = FunctionReturn<typeof functions.aprThresholdBps>

export type BeginDefaultAdminTransferParams = FunctionArguments<typeof functions.beginDefaultAdminTransfer>
export type BeginDefaultAdminTransferReturn = FunctionReturn<typeof functions.beginDefaultAdminTransfer>

export type BurnParams = FunctionArguments<typeof functions.burn>
export type BurnReturn = FunctionReturn<typeof functions.burn>

export type BurnsParams = FunctionArguments<typeof functions.burns>
export type BurnsReturn = FunctionReturn<typeof functions.burns>

export type CancelDefaultAdminTransferParams = FunctionArguments<typeof functions.cancelDefaultAdminTransfer>
export type CancelDefaultAdminTransferReturn = FunctionReturn<typeof functions.cancelDefaultAdminTransfer>

export type ChangeDefaultAdminDelayParams = FunctionArguments<typeof functions.changeDefaultAdminDelay>
export type ChangeDefaultAdminDelayReturn = FunctionReturn<typeof functions.changeDefaultAdminDelay>

export type DefaultAdminParams = FunctionArguments<typeof functions.defaultAdmin>
export type DefaultAdminReturn = FunctionReturn<typeof functions.defaultAdmin>

export type DefaultAdminDelayParams = FunctionArguments<typeof functions.defaultAdminDelay>
export type DefaultAdminDelayReturn = FunctionReturn<typeof functions.defaultAdminDelay>

export type DefaultAdminDelayIncreaseWaitParams = FunctionArguments<typeof functions.defaultAdminDelayIncreaseWait>
export type DefaultAdminDelayIncreaseWaitReturn = FunctionReturn<typeof functions.defaultAdminDelayIncreaseWait>

export type GetAllBurnsParams = FunctionArguments<typeof functions.getAllBurns>
export type GetAllBurnsReturn = FunctionReturn<typeof functions.getAllBurns>

export type GetBurnIdsParams = FunctionArguments<typeof functions.getBurnIds>
export type GetBurnIdsReturn = FunctionReturn<typeof functions.getBurnIds>

export type GetBurnsParams = FunctionArguments<typeof functions.getBurns>
export type GetBurnsReturn = FunctionReturn<typeof functions.getBurns>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GovParams = FunctionArguments<typeof functions.gov>
export type GovReturn = FunctionReturn<typeof functions.gov>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type LastRebaseTimeParams = FunctionArguments<typeof functions.lastRebaseTime>
export type LastRebaseTimeReturn = FunctionReturn<typeof functions.lastRebaseTime>

export type MintParams = FunctionArguments<typeof functions.mint>
export type MintReturn = FunctionReturn<typeof functions.mint>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type PendingDefaultAdminParams = FunctionArguments<typeof functions.pendingDefaultAdmin>
export type PendingDefaultAdminReturn = FunctionReturn<typeof functions.pendingDefaultAdmin>

export type PendingDefaultAdminDelayParams = FunctionArguments<typeof functions.pendingDefaultAdminDelay>
export type PendingDefaultAdminDelayReturn = FunctionReturn<typeof functions.pendingDefaultAdminDelay>

export type RebaseParams = FunctionArguments<typeof functions.rebase>
export type RebaseReturn = FunctionReturn<typeof functions.rebase>

export type ReceiveFromL1Params = FunctionArguments<typeof functions.receiveFromL1>
export type ReceiveFromL1Return = FunctionReturn<typeof functions.receiveFromL1>

export type RedeemParams = FunctionArguments<typeof functions.redeem>
export type RedeemReturn = FunctionReturn<typeof functions.redeem>

export type RedeemableParams = FunctionArguments<typeof functions.redeemable>
export type RedeemableReturn = FunctionReturn<typeof functions.redeemable>

export type RedeemedParams = FunctionArguments<typeof functions.redeemed>
export type RedeemedReturn = FunctionReturn<typeof functions.redeemed>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type RollbackDefaultAdminDelayParams = FunctionArguments<typeof functions.rollbackDefaultAdminDelay>
export type RollbackDefaultAdminDelayReturn = FunctionReturn<typeof functions.rollbackDefaultAdminDelay>

export type SetAprThresholdParams = FunctionArguments<typeof functions.setAprThreshold>
export type SetAprThresholdReturn = FunctionReturn<typeof functions.setAprThreshold>

export type SetSlashThresholdParams = FunctionArguments<typeof functions.setSlashThreshold>
export type SetSlashThresholdReturn = FunctionReturn<typeof functions.setSlashThreshold>

export type SlashThresholdBpsParams = FunctionArguments<typeof functions.slashThresholdBps>
export type SlashThresholdBpsReturn = FunctionReturn<typeof functions.slashThresholdBps>

export type SthypeParams = FunctionArguments<typeof functions.sthype>
export type SthypeReturn = FunctionReturn<typeof functions.sthype>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type SyncIntervalParams = FunctionArguments<typeof functions.syncInterval>
export type SyncIntervalReturn = FunctionReturn<typeof functions.syncInterval>

export type SystemParams = FunctionArguments<typeof functions.system>
export type SystemReturn = FunctionReturn<typeof functions.system>

export type TotalPendingBurnsParams = FunctionArguments<typeof functions.totalPendingBurns>
export type TotalPendingBurnsReturn = FunctionReturn<typeof functions.totalPendingBurns>

export type TransferToL1Params = FunctionArguments<typeof functions.transferToL1>
export type TransferToL1Return = FunctionReturn<typeof functions.transferToL1>

