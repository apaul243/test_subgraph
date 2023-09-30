import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { BorrowingFeeCharged } from "../generated/schema"
import { BorrowingFeeCharged as BorrowingFeeChargedEvent } from "../generated/GNSTradingCallbacksV6_4/GNSTradingCallbacksV6_4"
import { handleBorrowingFeeCharged } from "../src/gns-trading-callbacks-v-6-4"
import { createBorrowingFeeChargedEvent } from "./gns-trading-callbacks-v-6-4-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let trader = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tradeValueDai = BigInt.fromI32(234)
    let feeValueDai = BigInt.fromI32(234)
    let newBorrowingFeeChargedEvent = createBorrowingFeeChargedEvent(
      trader,
      tradeValueDai,
      feeValueDai
    )
    handleBorrowingFeeCharged(newBorrowingFeeChargedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BorrowingFeeCharged created and stored", () => {
    assert.entityCount("BorrowingFeeCharged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BorrowingFeeCharged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "trader",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BorrowingFeeCharged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tradeValueDai",
      "234"
    )
    assert.fieldEquals(
      "BorrowingFeeCharged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "feeValueDai",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
