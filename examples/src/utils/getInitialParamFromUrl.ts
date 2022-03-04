/**
 * 从 url 中获取初始化参数
 * */

const getInitialParamFromUrl = (): Record<string, any> => {
    const queryArr: string[] = window.location.search?.slice(1)?.split('&')
    let initialParam: Record<string, any> = {}
    if (!queryArr) return {}
    queryArr.forEach(query => {
        const queryKeyValue = query.split('=')
        if( queryKeyValue[0] !== 'renderCode'){
            let obj: Record<string, any> = {}
            obj[queryKeyValue[0]] = queryKeyValue[1]
            Object.assign(initialParam, obj)
        }
    })
    return initialParam
}


export default getInitialParamFromUrl
