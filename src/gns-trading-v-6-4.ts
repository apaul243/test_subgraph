import {
  ChainlinkCallbackTimeout as ChainlinkCallbackTimeoutEvent,
  CouldNotCloseTrade as CouldNotCloseTradeEvent,
  Done as DoneEvent,
  MarketOrderInitiated as MarketOrderInitiatedEvent,
  NftOrderInitiated as NftOrderInitiatedEvent,
  NftOrderSameBlock as NftOrderSameBlockEvent,
  NumberUpdated as NumberUpdatedEvent,
  OpenLimitCanceled as OpenLimitCanceledEvent,
  OpenLimitPlaced as OpenLimitPlacedEvent,
  OpenLimitUpdated as OpenLimitUpdatedEvent,
  Paused as PausedEvent,
  SlUpdated as SlUpdatedEvent,
  TpUpdated as TpUpdatedEvent
} from "../generated/GNSTradingV6_4/GNSTradingV6_4"
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
} from "../generated/schema"

export function handleChainlinkCallbackTimeout(
  event: ChainlinkCallbackTimeoutEvent
): void {
  let entity = new ChainlinkCallbackTimeout(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.order_trade_trader = event.params.order.trade.trader
  entity.order_trade_pairIndex = event.params.order.trade.pairIndex
  entity.order_trade_index = event.params.order.trade.index
  entity.order_trade_initialPosToken = event.params.order.trade.initialPosToken
  entity.order_trade_positionSizeDai = event.params.order.trade.positionSizeDai
  entity.order_trade_openPrice = event.params.order.trade.openPrice
  entity.order_trade_buy = event.params.order.trade.buy
  entity.order_trade_leverage = event.params.order.trade.leverage
  entity.order_trade_tp = event.params.order.trade.tp
  entity.order_trade_sl = event.params.order.trade.sl
  entity.order_block = event.params.order.block
  entity.order_wantedPrice = event.params.order.wantedPrice
  entity.order_slippageP = event.params.order.slippageP
  entity.order_spreadReductionP = event.params.order.spreadReductionP
  entity.order_tokenId = event.params.order.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCouldNotCloseTrade(event: CouldNotCloseTradeEvent): void {
  let entity = new CouldNotCloseTrade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.pairIndex = event.params.pairIndex
  entity.index = event.params.index

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDone(event: DoneEvent): void {
  let entity = new Done(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.done = event.params.done

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketOrderInitiated(
  event: MarketOrderInitiatedEvent
): void {
  let entity = new MarketOrderInitiated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.trader = event.params.trader
  entity.pairIndex = event.params.pairIndex
  entity.open = event.params.open

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftOrderInitiated(event: NftOrderInitiatedEvent): void {
  let entity = new NftOrderInitiated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.nftHolder = event.params.nftHolder
  entity.trader = event.params.trader
  entity.pairIndex = event.params.pairIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftOrderSameBlock(event: NftOrderSameBlockEvent): void {
  let entity = new NftOrderSameBlock(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftHolder = event.params.nftHolder
  entity.trader = event.params.trader
  entity.pairIndex = event.params.pairIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNumberUpdated(event: NumberUpdatedEvent): void {
  let entity = new NumberUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOpenLimitCanceled(event: OpenLimitCanceledEvent): void {
  let entity = new OpenLimitCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.pairIndex = event.params.pairIndex
  entity.index = event.params.index

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOpenLimitPlaced(event: OpenLimitPlacedEvent): void {
  let entity = new OpenLimitPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.pairIndex = event.params.pairIndex
  entity.index = event.params.index

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOpenLimitUpdated(event: OpenLimitUpdatedEvent): void {
  let entity = new OpenLimitUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.pairIndex = event.params.pairIndex
  entity.index = event.params.index
  entity.newPrice = event.params.newPrice
  entity.newTp = event.params.newTp
  entity.newSl = event.params.newSl
  entity.maxSlippageP = event.params.maxSlippageP

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paused = event.params.paused

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSlUpdated(event: SlUpdatedEvent): void {
  let entity = new SlUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.pairIndex = event.params.pairIndex
  entity.index = event.params.index
  entity.newSl = event.params.newSl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTpUpdated(event: TpUpdatedEvent): void {
  let entity = new TpUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.pairIndex = event.params.pairIndex
  entity.index = event.params.index
  entity.newTp = event.params.newTp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
