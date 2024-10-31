import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Mint {
    constructor(props?: Partial<Mint>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    block!: number

    @StringColumn_({nullable: false})
    address!: string

    @BigIntColumn_({nullable: false})
    value!: bigint

    @StringColumn_({nullable: false})
    txHash!: string

    @StringColumn_({nullable: false})
    from!: string
}
