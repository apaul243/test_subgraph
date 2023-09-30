import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ChainlinkCallbackTimeout,
  CouldNotCloseTrade,
  Done,
  MarketOrderInitiated,
  NftOrderInitiated,
  NftOrderSameBlock,
  NumberUpdated,
  OpenLimitCanceled,
  OpenLimitPlaced,
  OpenLimitUpdated,
  Paused,
  SlUpdated,
  TpUpdated
} from "../generated/GNSTradingV6_4/GNSTradingV6_4"

export function createChainlinkCallbackTimeoutEvent(
  orderId: BigInt,
  order: ethereum.Tuple
): ChainlinkCallbackTimeout {
  let chainlinkCallbackTimeoutEvent = changetype<ChainlinkCallbackTimeout>(
    newMockEvent()
  )

  chainlinkCallbackTimeoutEvent.parameters = new Array()

  chainlinkCallbackTimeoutEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  chainlinkCallbackTimeoutEvent.parameters.push(
    new ethereum.EventParam("order", ethereum.Value.fromTuple(order))
  )

  return chainlinkCallbackTimeoutEvent
}

export function createCouldNotCloseTradeEvent(
  trader: Address,
  pairIndex: BigInt,
  index: BigInt
): CouldNotCloseTrade {
  let couldNotCloseTradeEvent = changetype<CouldNotCloseTrade>(newMockEvent())

  couldNotCloseTradeEvent.parameters = new Array()

  couldNotCloseTradeEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  couldNotCloseTradeEvent.parameters.push(
    new ethereum.EventParam(
      "pairIndex",
      ethereum.Value.fromUnsignedBigInt(pairIndex)
    )
  )
  couldNotCloseTradeEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )

  return couldNotCloseTradeEvent
}

export function createDoneEvent(done: boolean): Done {
  let doneEvent = changetype<Done>(newMockEvent())

  doneEvent.parameters = new Array()

  doneEvent.parameters.push(
    new ethereum.EventParam("done", ethereum.Value.fromBoolean(done))
  )

  return doneEvent
}

export function createMarketOrderInitiatedEvent(
  orderId: BigInt,
  trader: Address,
  pairIndex: BigInt,
  open: boolean
): MarketOrderInitiated {
  let marketOrderInitiatedEvent = changetype<MarketOrderInitiated>(
    newMockEvent()
  )

  marketOrderInitiatedEvent.parameters = new Array()

  marketOrderInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  marketOrderInitiatedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  marketOrderInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "pairIndex",
      ethereum.Value.fromUnsignedBigInt(pairIndex)
    )
  )
  marketOrderInitiatedEvent.parameters.push(
    new ethereum.EventParam("open", ethereum.Value.fromBoolean(open))
  )

  return marketOrderInitiatedEvent
}

export function createNftOrderInitiatedEvent(
  orderId: BigInt,
  nftHolder: Address,
  trader: Address,
  pairIndex: BigInt
): NftOrderInitiated {
  let nftOrderInitiatedEvent = changetype<NftOrderInitiated>(newMockEvent())

  nftOrderInitiatedEvent.parameters = new Array()

  nftOrderInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  nftOrderInitiatedEvent.parameters.push(
    new ethereum.EventParam("nftHolder", ethereum.Value.fromAddress(nftHolder))
  )
  nftOrderInitiatedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  nftOrderInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "pairIndex",
      ethereum.Value.fromUnsignedBigInt(pairIndex)
    )
  )

  return nftOrderInitiatedEvent
}

export function createNftOrderSameBlockEvent(
  nftHolder: Address,
  trader: Address,
  pairIndex: BigInt
): NftOrderSameBlock {
  let nftOrderSameBlockEvent = changetype<NftOrderSameBlock>(newMockEvent())

  nftOrderSameBlockEvent.parameters = new Array()

  nftOrderSameBlockEvent.parameters.push(
    new ethereum.EventParam("nftHolder", ethereum.Value.fromAddress(nftHolder))
  )
  nftOrderSameBlockEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  nftOrderSameBlockEvent.parameters.push(
    new ethereum.EventParam(
      "pairIndex",
      ethereum.Value.fromUnsignedBigInt(pairIndex)
    )
  )

  return nftOrderSameBlockEvent
}

export function createNumberUpdatedEvent(
  name: string,
  value: BigInt
): NumberUpdated {
  let numberUpdatedEvent = changetype<NumberUpdated>(newMockEvent())

  numberUpdatedEvent.parameters = new Array()

  numberUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  numberUpdatedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return numberUpdatedEvent
}

export function createOpenLimitCanceledEvent(
  trader: Address,
  pairIndex: BigInt,
  index: BigInt
): OpenLimitCanceled {
  let openLimitCanceledEvent = changetype<OpenLimitCanceled>(newMockEvent())

  openLimitCanceledEvent.parameters = new Array()

  openLimitCanceledEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  openLimitCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "pairIndex",
      ethereum.Value.fromUnsignedBigInt(pairIndex)
    )
  )
  openLimitCanceledEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )

  return openLimitCanceledEvent
}

export function createOpenLimitPlacedEvent(
  trader: Address,
  pairIndex: BigInt,
  index: BigInt
): OpenLimitPlaced {
  let openLimitPlacedEvent = changetype<OpenLimitPlaced>(newMockEvent())

  openLimitPlacedEvent.parameters = new Array()

  openLimitPlacedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  openLimitPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "pairIndex",
      ethereum.Value.fromUnsignedBigInt(pairIndex)
    )
  )
  openLimitPlacedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )

  return openLimitPlacedEvent
}

export function createOpenLimitUpdatedEvent(
  trader: Address,
  pairIndex: BigInt,
  index: BigInt,
  newPrice: BigInt,
  newTp: BigInt,
  newSl: BigInt,
  maxSlippageP: BigInt
): OpenLimitUpdated {
  let openLimitUpdatedEvent = changetype<OpenLimitUpdated>(newMockEvent())

  openLimitUpdatedEvent.parameters = new Array()

  openLimitUpdatedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  openLimitUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "pairIndex",
      ethereum.Value.fromUnsignedBigInt(pairIndex)
    )
  )
  openLimitUpdatedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  openLimitUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newPrice",
      ethereum.Value.fromUnsignedBigInt(newPrice)
    )
  )
  openLimitUpdatedEvent.parameters.push(
    new ethereum.EventParam("newTp", ethereum.Value.fromUnsignedBigInt(newTp))
  )
  openLimitUpdatedEvent.parameters.push(
    new ethereum.EventParam("newSl", ethereum.Value.fromUnsignedBigInt(newSl))
  )
  openLimitUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxSlippageP",
      ethereum.Value.fromUnsignedBigInt(maxSlippageP)
    )
  )

  return openLimitUpdatedEvent
}

export function createPausedEvent(paused: boolean): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("paused", ethereum.Value.fromBoolean(paused))
  )

  return pausedEvent
}

export function createSlUpdatedEvent(
  trader: Address,
  pairIndex: BigInt,
  index: BigInt,
  newSl: BigInt
): SlUpdated {
  let slUpdatedEvent = changetype<SlUpdated>(newMockEvent())

  slUpdatedEvent.parameters = new Array()

  slUpdatedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  slUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "pairIndex",
      ethereum.Value.fromUnsignedBigInt(pairIndex)
    )
  )
  slUpdatedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  slUpdatedEvent.parameters.push(
    new ethereum.EventParam("newSl", ethereum.Value.fromUnsignedBigInt(newSl))
  )

  return slUpdatedEvent
}

export function createTpUpdatedEvent(
  trader: Address,
  pairIndex: BigInt,
  index: BigInt,
  newTp: BigInt
): TpUpdated {
  let tpUpdatedEvent = changetype<TpUpdated>(newMockEvent())

  tpUpdatedEvent.parameters = new Array()

  tpUpdatedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  tpUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "pairIndex",
      ethereum.Value.fromUnsignedBigInt(pairIndex)
    )
  )
  tpUpdatedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  tpUpdatedEvent.parameters.push(
    new ethereum.EventParam("newTp", ethereum.Value.fromUnsignedBigInt(newTp))
  )

  return tpUpdatedEvent
}
