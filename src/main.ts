import { TypeormDatabase } from '@subsquid/typeorm-store'
import { Mint } from './model'
import { processor } from './processor'

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
    //const burns: Burn[] = []
    const mints: Mint[] = []

    ctx.log.info(`Blocks: ${ctx.blocks.length}`)
    for (let c of ctx.blocks) {
        ctx.log.info(`Transactions: ${c.transactions.length}`)
        for (let tx of c.transactions) {
            // decode and normalize the tx data
            // burns.push(
            //     new Burn({
            //         id: tx.id,
            //         block: c.header.height,
            //         address: tx.from,
            //         value: tx.value,
            //         txHash: tx.hash,
            //     })
            // )
            mints.push(
                new Mint({
                    id: tx.id,
                    block: c.header.height,
                    address: tx.to,
                    value: tx.value,
                    txHash: tx.hash,
                    from: tx.from,
                })
            )
        }
    }
    // apply vectorized transformations and aggregations
    // const burned = burns.reduce((acc, b) => acc + b.value, 0n) / 1_000_000_000n
    const startBlock = ctx.blocks.at(0)?.header.height
    const endBlock = ctx.blocks.at(-1)?.header.height
    //ctx.log.info(`Burned ${burned} Gwei from ${startBlock} to ${endBlock}`)

    const minted = mints.reduce((acc, m) => acc + m.value, 0n) / 1_000_000_000n
    ctx.log.info(`Mints ${minted} from ${startBlock} to ${endBlock}`)

    // upsert batches of entities with batch-optimized ctx.store.insert()/upsert()
    await ctx.store.insert(mints)
})
