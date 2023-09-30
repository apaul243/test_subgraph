import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ChainlinkCallbackTimeout } from "../generated/schema"
import { ChainlinkCallbackTimeout as ChainlinkCallbackTimeoutEvent } from "../generated/GNSTradingV6_4/GNSTradingV6_4"
import { handleChainlinkCallbackTimeout } from "../src/gns-trading-v-6-4"
import { createChainlinkCallbackTimeoutEvent } from "./gns-trading-v-6-4-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let orderId = BigInt.fromI32(234)
    let order = "ethereum.Tuple Not implemented"
    let newChainlinkCallbackTimeoutEvent = createChainlinkCallbackTimeoutEvent(
      orderId,
      order
    )
    handleChainlinkCallbackTimeout(newChainlinkCallbackTimeoutEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ChainlinkCallbackTimeout created and stored", () => {
    assert.entityCount("ChainlinkCallbackTimeout", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ChainlinkCallbackTimeout",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "orderId",
      "234"
    )
    assert.fieldEquals(
      "ChainlinkCallbackTimeout",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "order",
      "ethereum.Tuple Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
