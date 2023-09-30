import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BorrowingFeeCharged,
  CanExecuteTimeoutUpdated,
  ClosingFeeSharesPUpdated,
  DaiVaultFeeCharged,
  DevGovFeeCharged,
  Done,
  Initialized,
  LimitExecuted,
  MarketCloseCanceled,
  MarketExecuted,
  MarketOpenCanceled,
  NftBotFeeCharged,
  NftOrderCanceled,
  PairMaxLeverageUpdated,
  Pause,
  ReferralFeeCharged,
  SssFeeCharged
} from "../generated/GNSTradingCallbacksV6_4/GNSTradingCallbacksV6_4"

export function createBorrowingFeeChargedEvent(
  trader: Address,
  tradeValueDai: BigInt,
  feeValueDai: BigInt
): BorrowingFeeCharged {
  let borrowingFeeChargedEvent = changetype<BorrowingFeeCharged>(newMockEvent())

  borrowingFeeChargedEvent.parameters = new Array()

  borrowingFeeChargedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  borrowingFeeChargedEvent.parameters.push(
    new ethereum.EventParam(
      "tradeValueDai",
      ethereum.Value.fromUnsignedBigInt(tradeValueDai)
    )
  )
  borrowingFeeChargedEvent.parameters.push(
    new ethereum.EventParam(
      "feeValueDai",
      ethereum.Value.fromUnsignedBigInt(feeValueDai)
    )
  )

  return borrowingFeeChargedEvent
}

export function createCanExecuteTimeoutUpdatedEvent(
  newValue: BigInt
): CanExecuteTimeoutUpdated {
  let canExecuteTimeoutUpdatedEvent = changetype<CanExecuteTimeoutUpdated>(
    newMockEvent()
  )

  canExecuteTimeoutUpdatedEvent.parameters = new Array()

  canExecuteTimeoutUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newValue",
      ethereum.Value.fromUnsignedBigInt(newValue)
    )
  )

  return canExecuteTimeoutUpdatedEvent
}

export function createClosingFeeSharesPUpdatedEvent(
  daiVaultFeeP: BigInt,
  lpFeeP: BigInt,
  sssFeeP: BigInt
): ClosingFeeSharesPUpdated {
  let closingFeeSharesPUpdatedEvent = changetype<ClosingFeeSharesPUpdated>(
    newMockEvent()
  )

  closingFeeSharesPUpdatedEvent.parameters = new Array()

  closingFeeSharesPUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "daiVaultFeeP",
      ethereum.Value.fromUnsignedBigInt(daiVaultFeeP)
    )
  )
  closingFeeSharesPUpdatedEvent.parameters.push(
    new ethereum.EventParam("lpFeeP", ethereum.Value.fromUnsignedBigInt(lpFeeP))
  )
  closingFeeSharesPUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "sssFeeP",
      ethereum.Value.fromUnsignedBigInt(sssFeeP)
    )
  )

  return closingFeeSharesPUpdatedEvent
}

export function createDaiVaultFeeChargedEvent(
  trader: Address,
  valueDai: BigInt
): DaiVaultFeeCharged {
  let daiVaultFeeChargedEvent = changetype<DaiVaultFeeCharged>(newMockEvent())

  daiVaultFeeChargedEvent.parameters = new Array()

  daiVaultFeeChargedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  daiVaultFeeChargedEvent.parameters.push(
    new ethereum.EventParam(
      "valueDai",
      ethereum.Value.fromUnsignedBigInt(valueDai)
    )
  )

  return daiVaultFeeChargedEvent
}

export function createDevGovFeeChargedEvent(
  trader: Address,
  valueDai: BigInt
): DevGovFeeCharged {
  let devGovFeeChargedEvent = changetype<DevGovFeeCharged>(newMockEvent())

  devGovFeeChargedEvent.parameters = new Array()

  devGovFeeChargedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  devGovFeeChargedEvent.parameters.push(
    new ethereum.EventParam(
      "valueDai",
      ethereum.Value.fromUnsignedBigInt(valueDai)
    )
  )

  return devGovFeeChargedEvent
}

export function createDoneEvent(done: boolean): Done {
  let doneEvent = changetype<Done>(newMockEvent())

  doneEvent.parameters = new Array()

  doneEvent.parameters.push(
    new ethereum.EventParam("done", ethereum.Value.fromBoolean(done))
  )

  return doneEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createLimitExecutedEvent(
  orderId: BigInt,
  limitIndex: BigInt,
  t: ethereum.Tuple,
  nftHolder: Address,
  orderType: i32,
  price: BigInt,
  priceImpactP: BigInt,
  positionSizeDai: BigInt,
  percentProfit: BigInt,
  daiSentToTrader: BigInt,
  exactExecution: boolean
): LimitExecuted {
  let limitExecutedEvent = changetype<LimitExecuted>(newMockEvent())

  limitExecutedEvent.parameters = new Array()

  limitExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  limitExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "limitIndex",
      ethereum.Value.fromUnsignedBigInt(limitIndex)
    )
  )
  limitExecutedEvent.parameters.push(
    new ethereum.EventParam("t", ethereum.Value.fromTuple(t))
  )
  limitExecutedEvent.parameters.push(
    new ethereum.EventParam("nftHolder", ethereum.Value.fromAddress(nftHolder))
  )
  limitExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "orderType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(orderType))
    )
  )
  limitExecutedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  limitExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "priceImpactP",
      ethereum.Value.fromUnsignedBigInt(priceImpactP)
    )
  )
  limitExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "positionSizeDai",
      ethereum.Value.fromUnsignedBigInt(positionSizeDai)
    )
  )
  limitExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "percentProfit",
      ethereum.Value.fromSignedBigInt(percentProfit)
    )
  )
  limitExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "daiSentToTrader",
      ethereum.Value.fromUnsignedBigInt(daiSentToTrader)
    )
  )
  limitExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "exactExecution",
      ethereum.Value.fromBoolean(exactExecution)
    )
  )

  return limitExecutedEvent
}

export function createMarketCloseCanceledEvent(
  orderId: BigInt,
  trader: Address,
  pairIndex: BigInt,
  index: BigInt,
  cancelReason: i32
): MarketCloseCanceled {
  let marketCloseCanceledEvent = changetype<MarketCloseCanceled>(newMockEvent())

  marketCloseCanceledEvent.parameters = new Array()

  marketCloseCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  marketCloseCanceledEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  marketCloseCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "pairIndex",
      ethereum.Value.fromUnsignedBigInt(pairIndex)
    )
  )
  marketCloseCanceledEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  marketCloseCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "cancelReason",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(cancelReason))
    )
  )

  return marketCloseCanceledEvent
}

export function createMarketExecutedEvent(
  orderId: BigInt,
  t: ethereum.Tuple,
  open: boolean,
  price: BigInt,
  priceImpactP: BigInt,
  positionSizeDai: BigInt,
  percentProfit: BigInt,
  daiSentToTrader: BigInt
): MarketExecuted {
  let marketExecutedEvent = changetype<MarketExecuted>(newMockEvent())

  marketExecutedEvent.parameters = new Array()

  marketExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  marketExecutedEvent.parameters.push(
    new ethereum.EventParam("t", ethereum.Value.fromTuple(t))
  )
  marketExecutedEvent.parameters.push(
    new ethereum.EventParam("open", ethereum.Value.fromBoolean(open))
  )
  marketExecutedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  marketExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "priceImpactP",
      ethereum.Value.fromUnsignedBigInt(priceImpactP)
    )
  )
  marketExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "positionSizeDai",
      ethereum.Value.fromUnsignedBigInt(positionSizeDai)
    )
  )
  marketExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "percentProfit",
      ethereum.Value.fromSignedBigInt(percentProfit)
    )
  )
  marketExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "daiSentToTrader",
      ethereum.Value.fromUnsignedBigInt(daiSentToTrader)
    )
  )

  return marketExecutedEvent
}

export function createMarketOpenCanceledEvent(
  orderId: BigInt,
  trader: Address,
  pairIndex: BigInt,
  cancelReason: i32
): MarketOpenCanceled {
  let marketOpenCanceledEvent = changetype<MarketOpenCanceled>(newMockEvent())

  marketOpenCanceledEvent.parameters = new Array()

  marketOpenCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  marketOpenCanceledEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  marketOpenCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "pairIndex",
      ethereum.Value.fromUnsignedBigInt(pairIndex)
    )
  )
  marketOpenCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "cancelReason",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(cancelReason))
    )
  )

  return marketOpenCanceledEvent
}

export function createNftBotFeeChargedEvent(
  trader: Address,
  valueDai: BigInt
): NftBotFeeCharged {
  let nftBotFeeChargedEvent = changetype<NftBotFeeCharged>(newMockEvent())

  nftBotFeeChargedEvent.parameters = new Array()

  nftBotFeeChargedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  nftBotFeeChargedEvent.parameters.push(
    new ethereum.EventParam(
      "valueDai",
      ethereum.Value.fromUnsignedBigInt(valueDai)
    )
  )

  return nftBotFeeChargedEvent
}

export function createNftOrderCanceledEvent(
  orderId: BigInt,
  nftHolder: Address,
  orderType: i32,
  cancelReason: i32
): NftOrderCanceled {
  let nftOrderCanceledEvent = changetype<NftOrderCanceled>(newMockEvent())

  nftOrderCanceledEvent.parameters = new Array()

  nftOrderCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  nftOrderCanceledEvent.parameters.push(
    new ethereum.EventParam("nftHolder", ethereum.Value.fromAddress(nftHolder))
  )
  nftOrderCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "orderType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(orderType))
    )
  )
  nftOrderCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "cancelReason",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(cancelReason))
    )
  )

  return nftOrderCanceledEvent
}

export function createPairMaxLeverageUpdatedEvent(
  pairIndex: BigInt,
  maxLeverage: BigInt
): PairMaxLeverageUpdated {
  let pairMaxLeverageUpdatedEvent = changetype<PairMaxLeverageUpdated>(
    newMockEvent()
  )

  pairMaxLeverageUpdatedEvent.parameters = new Array()

  pairMaxLeverageUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "pairIndex",
      ethereum.Value.fromUnsignedBigInt(pairIndex)
    )
  )
  pairMaxLeverageUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxLeverage",
      ethereum.Value.fromUnsignedBigInt(maxLeverage)
    )
  )

  return pairMaxLeverageUpdatedEvent
}

export function createPauseEvent(paused: boolean): Pause {
  let pauseEvent = changetype<Pause>(newMockEvent())

  pauseEvent.parameters = new Array()

  pauseEvent.parameters.push(
    new ethereum.EventParam("paused", ethereum.Value.fromBoolean(paused))
  )

  return pauseEvent
}

export function createReferralFeeChargedEvent(
  trader: Address,
  valueDai: BigInt
): ReferralFeeCharged {
  let referralFeeChargedEvent = changetype<ReferralFeeCharged>(newMockEvent())

  referralFeeChargedEvent.parameters = new Array()

  referralFeeChargedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  referralFeeChargedEvent.parameters.push(
    new ethereum.EventParam(
      "valueDai",
      ethereum.Value.fromUnsignedBigInt(valueDai)
    )
  )

  return referralFeeChargedEvent
}

export function createSssFeeChargedEvent(
  trader: Address,
  valueDai: BigInt
): SssFeeCharged {
  let sssFeeChargedEvent = changetype<SssFeeCharged>(newMockEvent())

  sssFeeChargedEvent.parameters = new Array()

  sssFeeChargedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  sssFeeChargedEvent.parameters.push(
    new ethereum.EventParam(
      "valueDai",
      ethereum.Value.fromUnsignedBigInt(valueDai)
    )
  )

  return sssFeeChargedEvent
}
