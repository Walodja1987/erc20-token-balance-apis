type SingleConfig = {
    chainName: string
    divaAddress: string
}

export const config: { [key: number]: SingleConfig } = {
    3: {
        chainName: 'Ropsten',
        divaAddress: '0xebBAA31B1Ebd727A1a42e71dC15E304aD8905211'
    },
}