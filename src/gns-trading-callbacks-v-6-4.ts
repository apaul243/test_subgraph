import {
  BorrowingFeeCharged as BorrowingFeeChargedEvent,
  CanExecuteTimeoutUpdated as CanExecuteTimeoutUpdatedEvent,
  ClosingFeeSharesPUpdated as ClosingFeeSharesPUpdatedEvent,
  DaiVaultFeeCharged as DaiVaultFeeChargedEvent,
  DevGovFeeCharged as DevGovFeeChargedEvent,
  Done as DoneEvent,
  Initialized as InitializedEvent,
  LimitExecuted as LimitExecutedEvent,
  MarketCloseCanceled as MarketCloseCanceledEvent,
  MarketExecuted as MarketExecutedEvent,
  MarketOpenCanceled as MarketOpenCanceledEvent,
  NftBotFeeCharged as NftBotFeeChargedEvent,
  NftOrderCanceled as NftOrderCanceledEvent,
  PairMaxLeverageUpdated as PairMaxLeverageUpdatedEvent,
  Pause as PauseEvent,
  ReferralFeeCharged as ReferralFeeChargedEvent,
  SssFeeCharged as SssFeeChargedEvent
} from "../generated/GNSTradingCallbacksV6_4/GNSTradingCallbacksV6_4"
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
} from "../generated/schema"

export function handleBorrowingFeeCharged(
  event: BorrowingFeeChargedEvent
): void {
  let entity = new BorrowingFeeCharged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.tradeValueDai = event.params.tradeValueDai
  entity.feeValueDai = event.params.feeValueDai

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCanExecuteTimeoutUpdated(
  event: CanExecuteTimeoutUpdatedEvent
): void {
  let entity = new CanExecuteTimeoutUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newValue = event.params.newValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClosingFeeSharesPUpdated(
  event: ClosingFeeSharesPUpdatedEvent
): void {
  let entity = new ClosingFeeSharesPUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.daiVaultFeeP = event.params.daiVaultFeeP
  entity.lpFeeP = event.params.lpFeeP
  entity.sssFeeP = event.params.sssFeeP

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDaiVaultFeeCharged(event: DaiVaultFeeChargedEvent): void {
  let entity = new DaiVaultFeeCharged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.valueDai = event.params.valueDai

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDevGovFeeCharged(event: DevGovFeeChargedEvent): void {
  let entity = new DevGovFeeCharged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.valueDai = event.params.valueDai

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

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLimitExecuted(event: LimitExecutedEvent): void {
  let entity = new LimitExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.limitIndex = event.params.limitIndex
  entity.t_trader = event.params.t.trader
  entity.t_pairIndex = event.params.t.pairIndex
  entity.t_index = event.params.t.index
  entity.t_initialPosToken = event.params.t.initialPosToken
  entity.t_positionSizeDai = event.params.t.positionSizeDai
  entity.t_openPrice = event.params.t.openPrice
  entity.t_buy = event.params.t.buy
  entity.t_leverage = event.params.t.leverage
  entity.t_tp = event.params.t.tp
  entity.t_sl = event.params.t.sl
  entity.nftHolder = event.params.nftHolder
  entity.orderType = event.params.orderType
  entity.price = event.params.price
  entity.priceImpactP = event.params.priceImpactP
  entity.positionSizeDai = event.params.positionSizeDai
  entity.percentProfit = event.params.percentProfit
  entity.daiSentToTrader = event.params.daiSentToTrader
  entity.exactExecution = event.params.exactExecution

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketCloseCanceled(
  event: MarketCloseCanceledEvent
): void {
  let entity = new MarketCloseCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.trader = event.params.trader
  entity.pairIndex = event.params.pairIndex
  entity.index = event.params.index
  entity.cancelReason = event.params.cancelReason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketExecuted(event: MarketExecutedEvent): void {
  let entity = new MarketExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.t_trader = event.params.t.trader
  entity.t_pairIndex = event.params.t.pairIndex
  entity.t_index = event.params.t.index
  entity.t_initialPosToken = event.params.t.initialPosToken
  entity.t_positionSizeDai = event.params.t.positionSizeDai
  entity.t_openPrice = event.params.t.openPrice
  entity.t_buy = event.params.t.buy
  entity.t_leverage = event.params.t.leverage
  entity.t_tp = event.params.t.tp
  entity.t_sl = event.params.t.sl
  entity.open = event.params.open
  entity.price = event.params.price
  entity.priceImpactP = event.params.priceImpactP
  entity.positionSizeDai = event.params.positionSizeDai
  entity.percentProfit = event.params.percentProfit
  entity.daiSentToTrader = event.params.daiSentToTrader

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketOpenCanceled(event: MarketOpenCanceledEvent): void {
  let entity = new MarketOpenCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.trader = event.params.trader
  entity.pairIndex = event.params.pairIndex
  entity.cancelReason = event.params.cancelReason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftBotFeeCharged(event: NftBotFeeChargedEvent): void {
  let entity = new NftBotFeeCharged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.valueDai = event.params.valueDai

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftOrderCanceled(event: NftOrderCanceledEvent): void {
  let entity = new NftOrderCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.nftHolder = event.params.nftHolder
  entity.orderType = event.params.orderType
  entity.cancelReason = event.params.cancelReason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePairMaxLeverageUpdated(
  event: PairMaxLeverageUpdatedEvent
): void {
  let entity = new PairMaxLeverageUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pairIndex = event.params.pairIndex
  entity.maxLeverage = event.params.maxLeverage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePause(event: PauseEvent): void {
  let entity = new Pause(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paused = event.params.paused

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReferralFeeCharged(event: ReferralFeeChargedEvent): void {
  let entity = new ReferralFeeCharged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.valueDai = event.params.valueDai

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSssFeeCharged(event: SssFeeChargedEvent): void {
  let entity = new SssFeeCharged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.valueDai = event.params.valueDai

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
