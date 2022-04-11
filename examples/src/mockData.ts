/**
 * 此文件为如视官方提供的 mock 数据
 * 此文件的所有数据仅用作如视能力展示调试
 * 不可商用！！！
 * */

import { Work } from '@realsee/five'
import { FloorplanServerData} from "@realsee/dnalogel/libs/floorplan/typings/floorplanServerData";
import { ModelRoomLabelPluginData} from "@realsee/dnalogel/libs/ModelRoomLabelPlugin/typings";
import { ModelEntryDoorGuidePluginData } from '@realsee/dnalogel/libs/ModelEntryDoorGuidePlugin'

import getQueryValueByName from "./utils/getQueryValueByName";

// 根据不同的 query 参数，获取不同版本的数据
const defaultRenderCode = '81gmMq5a7zbF9leWMk'

const dataReq = getQueryValueByName('renderCode')
const dataCode = dataReq ? dataReq : defaultRenderCode

// 从 github 拉取开源 json 数据
const workUrl = `//unpkg.com/@realsee/open-works@0.1.0-alpha.3/virtual/${dataCode}/work.json`
const floorplanServerDataUrl = `//unpkg.com/@realsee/open-works@0.1.0-alpha.3/virtual/${dataCode}/floorplanServerData.json`
const modelRoomLabelsUrl = `//unpkg.com/@realsee/open-works@0.1.0-alpha.3/virtual/${dataCode}/modelRoomLabels.json`
const modelEntryDoorGuidePluginServerDataUrl = `//unpkg.com/@realsee/open-works@0.1.0-alpha.3/virtual/${dataCode}/modelEntryDoorGuidePluginServerData.json`

let work: Work | null = null
let floorplanServerData: FloorplanServerData | null = null
let modelRoomLabels: ModelRoomLabelPluginData | null = null
let modelEntryDoorGuidePluginServerData: ModelEntryDoorGuidePluginData | null = null


await fetch(workUrl).then((res) => res.json()).then(res => work = res).catch(e => console.warn('拉取 work 数据失败'))
await fetch(floorplanServerDataUrl).then((res) => res.json()).then(res => floorplanServerData = res).catch(e => console.warn('拉取 floorplanServerData 数据失败或不含此数据源'))
await fetch(modelRoomLabelsUrl).then((res) => res.json()).then(res => modelRoomLabels = res).catch(e => console.warn('拉取 modelRoomLabels 数据失败或不含此数据源'))
await fetch(modelEntryDoorGuidePluginServerDataUrl).then((res) => res.json()).then(res => modelEntryDoorGuidePluginServerData = res).catch(e => console.warn('拉取 modelEntryDoorGuidePluginServerData 数据失败或不含此数据源'))

const newData = {
    "outlines": [
        {
            "checksum": "8ca949e6685b11b516b320c3d226a4a6",
            "index": 0,
            "url": "https://vrlab-public.ljcdn.com/release/vrlab/outlinefloorplan/217f0b8d711b28755b03470260817a57.jpg"
        }
    ],
    "computed_data": {
        "floor_datas": [
            {
                "floor_index": 0,
                "floor_name": "一层",
                "rooms": [
                    {
                        "id": "u-BqNrq1Kv557eLI",
                        "name": "卧室A",
                        "path": [
                            {
                                "x": 44951,
                                "y": 28999
                            },
                            {
                                "x": 44121,
                                "y": 28999
                            },
                            {
                                "x": 44121,
                                "y": 28250
                            },
                            {
                                "x": 41607,
                                "y": 28250
                            },
                            {
                                "x": 41607,
                                "y": 32859
                            },
                            {
                                "x": 41607,
                                "y": 34169.6956
                            },
                            {
                                "x": 42083,
                                "y": 34169.6956
                            },
                            {
                                "x": 42083,
                                "y": 34029.6956
                            },
                            {
                                "x": 43262,
                                "y": 34029.6956
                            },
                            {
                                "x": 43262,
                                "y": 33498
                            },
                            {
                                "x": 44951,
                                "y": 33498
                            }
                        ],
                        "size": 16776994.746000051,
                        "room_type": "100900000001",
                        "floor_type": 0,
                        "room_label": {
                            "position": {
                                "x": 43279,
                                "y": 31209.5
                            },
                            "position_in_image": {
                                "x": 0.7492963032463877,
                                "y": 0.7240189586673172
                            }
                        },
                        "observer_indexs": [
                            13,
                            14
                        ]
                    },
                    {
                        "id": "u-YAQPlSKV5589Yq",
                        "name": "厨房",
                        "path": [
                            {
                                "x": 36293,
                                "y": 34966.375
                            },
                            {
                                "x": 36293,
                                "y": 40597
                            },
                            {
                                "x": 38019.375,
                                "y": 40597
                            },
                            {
                                "x": 38019.375,
                                "y": 39073
                            },
                            {
                                "x": 38019.375,
                                "y": 34966.375
                            }
                        ],
                        "size": 8852130.234375,
                        "room_type": "100900000003",
                        "floor_type": 3,
                        "room_label": {
                            "position": {
                                "x": 37156,
                                "y": 37781.5
                            },
                            "position_in_image": {
                                "x": 0.1747982735972978,
                                "y": 0.26594409981180733
                            }
                        },
                        "observer_indexs": [
                            4,
                            5,
                            6
                        ]
                    },
                    {
                        "id": "u-D7X97ZkV558Dkb",
                        "name": "阳台",
                        "path": [
                            {
                                "x": 39208.5797,
                                "y": 40597
                            },
                            {
                                "x": 40323.7594,
                                "y": 40104
                            },
                            {
                                "x": 40984,
                                "y": 40104
                            },
                            {
                                "x": 40984,
                                "y": 39073
                            },
                            {
                                "x": 38019.375,
                                "y": 39073
                            },
                            {
                                "x": 38019.375,
                                "y": 40597
                            }
                        ],
                        "size": 3416796.306304097,
                        "room_type": "100900000005",
                        "floor_type": 4,
                        "room_label": {
                            "position": {
                                "x": 38781,
                                "y": 39835
                            },
                            "position_in_image": {
                                "x": 0.32726590354663165,
                                "y": 0.12281313166515648
                            }
                        },
                        "observer_indexs": [
                            1
                        ]
                    },
                    {
                        "id": "u-r0284VKV558Iy8",
                        "name": "客厅",
                        "path": [
                            {
                                "x": 40984,
                                "y": 39073
                            },
                            {
                                "x": 42083,
                                "y": 39073
                            },
                            {
                                "x": 42083,
                                "y": 36092
                            },
                            {
                                "x": 42083,
                                "y": 34169.6956
                            },
                            {
                                "x": 41607,
                                "y": 34169.6956
                            },
                            {
                                "x": 41607,
                                "y": 32859
                            },
                            {
                                "x": 37868.375,
                                "y": 32859
                            },
                            {
                                "x": 37868.375,
                                "y": 34415
                            },
                            {
                                "x": 38019.375,
                                "y": 34415
                            },
                            {
                                "x": 38019.375,
                                "y": 34966.375
                            },
                            {
                                "x": 38019.375,
                                "y": 39073
                            }
                        ],
                        "size": 23625395.64440012,
                        "room_type": "100900000002",
                        "floor_type": 1,
                        "room_label": {
                            "position": {
                                "x": 40051.13537597656,
                                "y": 36482.80920410156
                            },
                            "position_in_image": {
                                "x": 0.4464379223096793,
                                "y": 0.3564641246182782
                            }
                        },
                        "observer_indexs": [
                            0,
                            2,
                            3,
                            7
                        ]
                    },
                    {
                        "id": "u-CHPloakv558md2",
                        "name": "过道",
                        "path": [
                            {
                                "x": 42083,
                                "y": 34029.6956
                            },
                            {
                                "x": 42083,
                                "y": 34169.6956
                            },
                            {
                                "x": 42083,
                                "y": 36092
                            },
                            {
                                "x": 43262,
                                "y": 36092
                            },
                            {
                                "x": 43262,
                                "y": 34029.6956
                            }
                        ],
                        "size": 2056900.3596000671,
                        "room_type": "100900000012",
                        "floor_type": 1,
                        "room_label": {
                            "position": {
                                "x": 42672.5,
                                "y": 35060.5
                            },
                            "position_in_image": {
                                "x": 0.6923906924376055,
                                "y": 0.4556004739666829
                            }
                        },
                        "observer_indexs": [
                            8
                        ]
                    },
                    {
                        "id": "u-fvZpKZkV558naB",
                        "name": "卧室B",
                        "path": [
                            {
                                "x": 42083,
                                "y": 39073
                            },
                            {
                                "x": 42083,
                                "y": 39606
                            },
                            {
                                "x": 42424.0809,
                                "y": 39606
                            },
                            {
                                "x": 42424.0809,
                                "y": 40306
                            },
                            {
                                "x": 44052.2059,
                                "y": 40306
                            },
                            {
                                "x": 44052.2059,
                                "y": 39606
                            },
                            {
                                "x": 44951,
                                "y": 39606
                            },
                            {
                                "x": 44951,
                                "y": 36092
                            },
                            {
                                "x": 43262,
                                "y": 36092
                            },
                            {
                                "x": 42083,
                                "y": 36092
                            }
                        ],
                        "size": 9326712,
                        "room_type": "100900000001",
                        "floor_type": 0,
                        "room_label": {
                            "position": {
                                "x": 43517,
                                "y": 38199
                            },
                            "position_in_image": {
                                "x": 0.7716269468943516,
                                "y": 0.23684393949954693
                            }
                        },
                        "observer_indexs": [
                            11,
                            12
                        ]
                    },
                    {
                        "id": "u-8fyHeokV558OzD",
                        "name": "卫生间",
                        "path": [
                            {
                                "x": 43262,
                                "y": 34029.6956
                            },
                            {
                                "x": 43262,
                                "y": 36092
                            },
                            {
                                "x": 44951,
                                "y": 36092
                            },
                            {
                                "x": 44951,
                                "y": 33498
                            },
                            {
                                "x": 43262,
                                "y": 33498
                            }
                        ],
                        "size": 3881706,
                        "room_type": "100900000004",
                        "floor_type": 3,
                        "room_label": {
                            "position": {
                                "x": 44106.5,
                                "y": 34795
                            },
                            "position_in_image": {
                                "x": 0.8269375117282792,
                                "y": 0.47410608489579703
                            }
                        },
                        "observer_indexs": [
                            9,
                            10
                        ]
                    }
                ],
                "rules": {
                    "top": [
                        [
                            {
                                "x": 39195,
                                "y": 40537
                            },
                            {
                                "x": 40311,
                                "y": 40044
                            }
                        ],
                        [
                            {
                                "x": 40311,
                                "y": 40044
                            },
                            {
                                "x": 40924,
                                "y": 40044
                            }
                        ],
                        [
                            {
                                "x": 40984,
                                "y": 39013
                            },
                            {
                                "x": 42023,
                                "y": 39013
                            }
                        ],
                        [
                            {
                                "x": 42143,
                                "y": 39546
                            },
                            {
                                "x": 44891,
                                "y": 39546
                            }
                        ],
                        [
                            {
                                "x": 36353,
                                "y": 40537
                            },
                            {
                                "x": 37959,
                                "y": 40537
                            }
                        ],
                        [
                            {
                                "x": 38079,
                                "y": 40537
                            },
                            {
                                "x": 39195,
                                "y": 40537
                            }
                        ]
                    ],
                    "right": [
                        [
                            {
                                "x": 40924,
                                "y": 39133
                            },
                            {
                                "x": 40924,
                                "y": 40044
                            }
                        ],
                        [
                            {
                                "x": 44061,
                                "y": 28310
                            },
                            {
                                "x": 44061,
                                "y": 29059
                            }
                        ],
                        [
                            {
                                "x": 44891,
                                "y": 36152
                            },
                            {
                                "x": 44891,
                                "y": 39546
                            }
                        ],
                        [
                            {
                                "x": 44891,
                                "y": 33558
                            },
                            {
                                "x": 44891,
                                "y": 36032
                            }
                        ],
                        [
                            {
                                "x": 44891,
                                "y": 29059
                            },
                            {
                                "x": 44891,
                                "y": 33438
                            }
                        ]
                    ],
                    "bottom": [
                        [
                            {
                                "x": 44061,
                                "y": 29059
                            },
                            {
                                "x": 44891,
                                "y": 29059
                            }
                        ],
                        [
                            {
                                "x": 41667,
                                "y": 28310
                            },
                            {
                                "x": 44061,
                                "y": 28310
                            }
                        ],
                        [
                            {
                                "x": 37928,
                                "y": 32919
                            },
                            {
                                "x": 41547,
                                "y": 32919
                            }
                        ],
                        [
                            {
                                "x": 36353,
                                "y": 35026
                            },
                            {
                                "x": 37959,
                                "y": 35026
                            }
                        ]
                    ],
                    "left": [
                        [
                            {
                                "x": 36353,
                                "y": 35026
                            },
                            {
                                "x": 36353,
                                "y": 40537
                            }
                        ],
                        [
                            {
                                "x": 41667,
                                "y": 28310
                            },
                            {
                                "x": 41667,
                                "y": 32859
                            }
                        ],
                        [
                            {
                                "x": 37928,
                                "y": 32919
                            },
                            {
                                "x": 37928,
                                "y": 34355
                            }
                        ],
                        [
                            {
                                "x": 38079,
                                "y": 34355
                            },
                            {
                                "x": 38079,
                                "y": 34966
                            }
                        ]
                    ]
                }
            }
        ],
        "entrance": {
            "rad": 3.1416,
            "room_id": "u-r0284VKV558Iy8",
            "position": {
                "x": 37868.375,
                "y": 33646.8831
            },
            "north_rad": 7.85398898038469,
            "floor_index": 0,
            "position_in_image": {
                "x": 0.24163773691124038,
                "y": 0.5541309611765527
            }
        },
        "bounding": {
            "min": {
                "x": 35293,
                "y": 27250
            },
            "max": {
                "x": 45951,
                "y": 41597
            },
            "origin": {
                "x": 37500,
                "y": 37500
            }
        },
        "observers": [
            {
                "index": 0,
                "floor_index": 0,
                "position": {
                    "x": 39708.71996879578,
                    "y": 38902.59003639221
                },
                "position_in_image": {
                    "x": 0.41431037425368517,
                    "y": 0.18780302248607988
                }
            },
            {
                "index": 1,
                "floor_index": 0,
                "position": {
                    "x": 39755.01990318298,
                    "y": 39672.43003845215
                },
                "position_in_image": {
                    "x": 0.4186545227231172,
                    "y": 0.1341444177561756
                }
            },
            {
                "index": 2,
                "floor_index": 0,
                "position": {
                    "x": 38919.89994049072,
                    "y": 37084.037989377975
                },
                "position_in_image": {
                    "x": 0.34029836184000023,
                    "y": 0.31455788740656754
                }
            },
            {
                "index": 3,
                "floor_index": 0,
                "position": {
                    "x": 39892.74001121521,
                    "y": 35190.49000740051
                },
                "position_in_image": {
                    "x": 0.4315762817803725,
                    "y": 0.44654004269878633
                }
            },
            {
                "index": 4,
                "floor_index": 0,
                "position": {
                    "x": 37388.365998864174,
                    "y": 35583.77003669739
                },
                "position_in_image": {
                    "x": 0.19660030013737792,
                    "y": 0.41912803814752997
                }
            },
            {
                "index": 5,
                "floor_index": 0,
                "position": {
                    "x": 37448.42569902539,
                    "y": 37938.43299150467
                },
                "position_in_image": {
                    "x": 0.2022354756075617,
                    "y": 0.25500571607272116
                }
            },
            {
                "index": 6,
                "floor_index": 0,
                "position": {
                    "x": 37448.87150079012,
                    "y": 39091.869950294495
                },
                "position_in_image": {
                    "x": 0.20227730350817405,
                    "y": 0.1746100264658469
                }
            },
            {
                "index": 7,
                "floor_index": 0,
                "position": {
                    "x": 38766.8399810791,
                    "y": 34164.57009315491
                },
                "position_in_image": {
                    "x": 0.32593732230053496,
                    "y": 0.5180476689792356
                }
            },
            {
                "index": 8,
                "floor_index": 0,
                "position": {
                    "x": 42804.90016937256,
                    "y": 34916.759967803955
                },
                "position_in_image": {
                    "x": 0.7048133016862975,
                    "y": 0.46561929547613057
                }
            },
            {
                "index": 9,
                "floor_index": 0,
                "position": {
                    "x": 43282.440185546875,
                    "y": 35646.27003669739
                },
                "position_in_image": {
                    "x": 0.7496190828998757,
                    "y": 0.4147717267235389
                }
            },
            {
                "index": 10,
                "floor_index": 0,
                "position": {
                    "x": 43931.07986450195,
                    "y": 35626.42002105713
                },
                "position_in_image": {
                    "x": 0.810478501079185,
                    "y": 0.4161552923219399
                }
            },
            {
                "index": 11,
                "floor_index": 0,
                "position": {
                    "x": 42999.21989440918,
                    "y": 36910.65400838852
                },
                "position_in_image": {
                    "x": 0.723045589642445,
                    "y": 0.32664292128051026
                }
            },
            {
                "index": 12,
                "floor_index": 0,
                "position": {
                    "x": 43457.419872283936,
                    "y": 39069.390058517456
                },
                "position_in_image": {
                    "x": 0.7660367679005381,
                    "y": 0.17617689701558123
                }
            },
            {
                "index": 13,
                "floor_index": 0,
                "position": {
                    "x": 42653.560161590576,
                    "y": 33053.86018753052
                },
                "position_in_image": {
                    "x": 0.6906136387305851,
                    "y": 0.5954652409890209
                }
            },
            {
                "index": 14,
                "floor_index": 0,
                "position": {
                    "x": 42564.770221710205,
                    "y": 29684.800148010254
                },
                "position_in_image": {
                    "x": 0.6822828130709518,
                    "y": 0.8302920368014042
                }
            }
        ]
    }
}

const newWork = {
    "_signature": "l0ZJWDCkSCO3NIOxyly9mzFhVigm0TZ5pefe9L55njMT5we7WDKyirOiBAo98IdsxxBJB6ybtTERts5t8lizgsUSIf/uwFeHp55eDvwPlNpzoaYUULl+ZKUFjTathyI19JXABwVjBwWsZ17En+EhhXGrOJtqYy4ho/ea/AhfJ2I=",
    "allow_hosts": [
        "*"
    ],
    "base_url": "https://vrlab-public.ljcdn.com/",
    "certificate": "-----BEGIN CERTIFICATE-----\nMIIEMzCCAhsCCQDYAS/7ATZRmTANBgkqhkiG9w0BAQsFADCBkzELMAkGA1UEBhMC\nQ04xEDAOBgNVBAgMB0JlaWppbmcxEDAOBgNVBAcMB0JlaWppbmcxFDASBgNVBAoM\nC2xpYW5qaWEuY29tMRAwDgYDVQQLDAdSZWFsc2VlMREwDwYDVQQDDAhIYXJkd2Fy\nZTElMCMGCSqGSIb3DQEJARYWbml1aGFpcWluZ0BsaWFuamlhLmNvbTAeFw0yMTA5\nMTAwNTIwMDBaFw0zMTA5MDgwNTIwMDBaMIGmMQswCQYDVQQGEwJDTjEQMA4GA1UE\nCAwHQmVpSmluZzEQMA4GA1UEBwwHQmVpSmluZzEQMA4GA1UECgwHUmVhbHNlZTEZ\nMBcGA1UECwwQUmVhbHNlZUFwcEdldHdheTEgMB4GA1UEAwwXYXBwLWdhdGV3YXku\ncmVhbHNlZS5jb20xJDAiBgkqhkiG9w0BCQEWFWRldmVsb3BlckByZWFsc2VlLmNv\nbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuv/y3Ezsy/wh3LCA8vomPbgI\nSO9iO5kyR+oAetklD+epMU6J/ZbvTDEomZxuS5iyyKGBupzAh2ZFLIy7tsE71Vx1\nIIvT7Kdyq66lMU4YzdrpKUcxv7oOQnO8DA1orKluNa4jkyXBywHKs/Q+20LVc+RD\ngKXqFGJUdo8mAxEScs0CAwEAATANBgkqhkiG9w0BAQsFAAOCAgEAkMxsU4VLPd4J\n0rElBNBIyqPtvnlTs6VkhIK0l4oM58wtDKc1uG9UPSX5j29NguZM6LOe0jCsU2Vg\nEpUseMWQjx4o2yBg7MokQyjWc1zu6PppKhQ+RqHQy/biJ2zsIMpX3oMASXffvnW5\nn4Bjyo1JdDJiLm1fLvLlVVxQoraJD+rtpqWDEYixGVREUo5OIL5Y5dVjkHG2r9RQ\nQuu3yEiyr9gAW8yhz3YR6/sJ6boyGK8NC0v8Jih7NnCdT+9ML+3jn3P5F3TeXdSf\nVeYIm5oWAOTe3AjjKP8ARMb2RYACjg80/AcowD/dvRRjbwQmyucUNug2pXJynXpD\nNfx1IBmUmzSAT1Z5yNuY/f3VRBJvmIQ6Jpmef+g0/wUJpyS4SObguItyYlFPLqRH\nK1oKqNX/uV0GWWEQl6Lml986TzlHxc4ljtHBhjzlKYIYYZLWWipk4JiB8hxJcTK+\ncrgvclEQSxFlmAyoqxYFClrOOsPqZJdBhDTvoUWnnWuJLQt7DLHpyInp+S75Gg3o\n0zgHpt9m26B3YbjQGYMQlYmhl2VLQa+Ey0W8UZQXLcTvoRT4p+8crqr6cNNsxCyZ\nm08vBbEMIMvhBeLQvpM75oaMBmelegipFl2eelxVIHdGJWoyJSZQUdXN0uSidhZp\nI7AIgzhqK1Ku/IXK0OSXJonn+/9X/VI=\n-----END CERTIFICATE-----",
    "expire_at": "1961649785356",
    "initial": {
        "flag_position": [
            1.4741313224264068,
            -1.1730823573683113,
            -0.3355151635912277
        ],
        "fov": 95,
        "heading": 0,
        "latitude": 0,
        "longitude": 0.02010530290110424,
        "pano_index": 3
    },
    "model": {
        "file_url": "vrframework/release/ue4_decoration_plan/EAPoBGEgwS7V1XMg/vrproc-ue4/render/model.at3d",
        "material_base_url": "https://vrlab-public.ljcdn.com/",
        "material_textures": [
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_0.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_1.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_2.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_3.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_4.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_5.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_6.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_7.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_8.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_9.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_10.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_11.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_12.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_13.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_14.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_15.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_16.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_17.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_18.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_19.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_20.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_21.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_22.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_23.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_24.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_25.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_26.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_27.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_28.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_29.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_30.jpg",
            "release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_31.jpg"
        ]
    },
    "observers": [
        {
            "accessible_nodes": [
                1,
                2,
                3,
                7
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518629,
            "index": 0,
            "position": [
                2.2087199687957764,
                1.0625753608558983,
                -1.402590036392212
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                2.2087199687957764,
                0.0036735391269111517,
                -1.402590036392212
            ],
            "visible_nodes": [
                1,
                2,
                3,
                7
            ]
        },
        {
            "accessible_nodes": [
                0,
                2,
                3,
                7
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518630,
            "index": 1,
            "position": [
                2.2550199031829834,
                1.0639223587725968,
                -2.1724300384521484
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                2.2550199031829834,
                0.0034959962925815713,
                -2.1724300384521484
            ],
            "visible_nodes": [
                0,
                2,
                3,
                7
            ]
        },
        {
            "accessible_nodes": [
                0,
                1,
                3,
                7
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518631,
            "index": 2,
            "position": [
                1.4198999404907227,
                1.062372354886374,
                0.41596201062202454
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                1.4198999404907227,
                0.0010692009894797128,
                0.41596201062202454
            ],
            "visible_nodes": [
                0,
                1,
                3,
                7
            ]
        },
        {
            "accessible_nodes": [
                0,
                1,
                2,
                4,
                7,
                8
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518632,
            "index": 3,
            "position": [
                2.39274001121521,
                1.066200358888945,
                2.3095099925994873
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                2.39274001121521,
                0,
                2.3095099925994873
            ],
            "visible_nodes": [
                0,
                1,
                2,
                4,
                7,
                8
            ]
        },
        {
            "accessible_nodes": [
                3,
                5,
                6,
                8
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518633,
            "index": 4,
            "position": [
                -0.11163400113582611,
                1.074421955368361,
                1.9162299633026123
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                -0.11163400113582611,
                0.00715511443844119,
                1.9162299633026123
            ],
            "visible_nodes": [
                3,
                5,
                6,
                8
            ]
        },
        {
            "accessible_nodes": [
                4,
                6
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518634,
            "index": 5,
            "position": [
                -0.05157430097460747,
                1.0766300541375489,
                -0.4384329915046692
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                -0.05157430097460747,
                0.011683718821783984,
                -0.4384329915046692
            ],
            "visible_nodes": [
                4,
                6
            ]
        },
        {
            "accessible_nodes": [
                4,
                5
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518635,
            "index": 6,
            "position": [
                -0.05112849920988083,
                1.076569957754454,
                -1.5918699502944946
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                -0.05112849920988083,
                0.012680418754758005,
                -1.5918699502944946
            ],
            "visible_nodes": [
                4,
                5
            ]
        },
        {
            "accessible_nodes": [
                0,
                1,
                2,
                3,
                8,
                9,
                10
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518636,
            "index": 7,
            "position": [
                1.2668399810791016,
                1.0591623541925759,
                3.3354299068450928
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                1.2668399810791016,
                0.004535748188228217,
                3.3354299068450928
            ],
            "visible_nodes": [
                0,
                1,
                2,
                3,
                8,
                9,
                10
            ]
        },
        {
            "accessible_nodes": [
                3,
                4,
                7,
                9,
                11,
                12,
                13,
                14
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518637,
            "index": 8,
            "position": [
                5.304900169372559,
                1.069411357960543,
                2.583240032196045
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                5.304900169372559,
                0.006326704324158161,
                2.583240032196045
            ],
            "visible_nodes": [
                3,
                4,
                7,
                9,
                11,
                12,
                13,
                14
            ]
        },
        {
            "accessible_nodes": [
                7,
                8,
                10
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518638,
            "index": 9,
            "position": [
                5.782440185546875,
                1.0786530581329674,
                1.8537299633026123
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                5.782440185546875,
                0.031401610979785,
                1.8537299633026123
            ],
            "visible_nodes": [
                7,
                8,
                10
            ]
        },
        {
            "accessible_nodes": [
                7,
                9
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518639,
            "index": 10,
            "position": [
                6.431079864501953,
                1.0864862558458657,
                1.873579978942871
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                6.431079864501953,
                0.01807715299379531,
                1.873579978942871
            ],
            "visible_nodes": [
                7,
                9
            ]
        },
        {
            "accessible_nodes": [
                8,
                12,
                13,
                14
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518640,
            "index": 11,
            "position": [
                5.49921989440918,
                1.0657203552339882,
                0.5893459916114807
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                5.49921989440918,
                0.004061425936848773,
                0.5893459916114807
            ],
            "visible_nodes": [
                8,
                12,
                13,
                14
            ]
        },
        {
            "accessible_nodes": [
                8,
                11,
                13
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518641,
            "index": 12,
            "position": [
                5.9574198722839355,
                1.0669553560231537,
                -1.569390058517456
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                5.9574198722839355,
                0.0013560550584945652,
                -1.569390058517456
            ],
            "visible_nodes": [
                8,
                11,
                13
            ]
        },
        {
            "accessible_nodes": [
                8,
                11,
                12,
                14
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518642,
            "index": 13,
            "position": [
                5.153560161590576,
                1.0614733603809685,
                4.446139812469482
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                5.153560161590576,
                0.0025794997127555064,
                4.446139812469482
            ],
            "visible_nodes": [
                8,
                11,
                12,
                14
            ]
        },
        {
            "accessible_nodes": [
                8,
                11,
                13
            ],
            "create_time": "2021-10-24T17:41:13+08:00",
            "floor_index": 0,
            "id": 79518643,
            "index": 14,
            "position": [
                5.064770221710205,
                1.0628763568614334,
                7.815199851989746
            ],
            "quaternion": {
                "w": 0.7071067811865475,
                "x": 0,
                "y": 0.7071067811865475,
                "z": 0
            },
            "standing_position": [
                5.064770221710205,
                0.019404059217158265,
                7.815199851989746
            ],
            "visible_nodes": [
                8,
                11,
                13
            ]
        }
    ],
    "panorama": {
        "count": 15,
        "list": [
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/0/0_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/0/0_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/0/0_f.jpg",
                "index": 0,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/0/0_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/0/0_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/0/0_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/1/1_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/1/1_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/1/1_f.jpg",
                "index": 1,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/1/1_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/1/1_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/1/1_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/2/2_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/2/2_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/2/2_f.jpg",
                "index": 2,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/2/2_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/2/2_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/2/2_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/3/3_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/3/3_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/3/3_f.jpg",
                "index": 3,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/3/3_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/3/3_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/3/3_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/4/4_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/4/4_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/4/4_f.jpg",
                "index": 4,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/4/4_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/4/4_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/4/4_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/5/5_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/5/5_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/5/5_f.jpg",
                "index": 5,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/5/5_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/5/5_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/5/5_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/6/6_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/6/6_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/6/6_f.jpg",
                "index": 6,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/6/6_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/6/6_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/6/6_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/7/7_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/7/7_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/7/7_f.jpg",
                "index": 7,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/7/7_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/7/7_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/7/7_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/8/8_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/8/8_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/8/8_f.jpg",
                "index": 8,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/8/8_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/8/8_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/8/8_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/9/9_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/9/9_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/9/9_f.jpg",
                "index": 9,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/9/9_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/9/9_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/9/9_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/10/10_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/10/10_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/10/10_f.jpg",
                "index": 10,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/10/10_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/10/10_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/10/10_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/11/11_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/11/11_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/11/11_f.jpg",
                "index": 11,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/11/11_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/11/11_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/11/11_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/12/12_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/12/12_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/12/12_f.jpg",
                "index": 12,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/12/12_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/12/12_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/12/12_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/13/13_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/13/13_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/13/13_f.jpg",
                "index": 13,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/13/13_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/13/13_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/13/13_u.jpg"
            },
            {
                "back": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/14/14_b.jpg",
                "down": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/14/14_d.jpg",
                "front": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/14/14_f.jpg",
                "index": 14,
                "left": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/14/14_l.jpg",
                "right": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/14/14_r.jpg",
                "up": "release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/14/14_u.jpg"
            }
        ]
    },
    "picture_url": "vrframework/release/ue4_decoration_plan/EAPoBGEgwS7V1XMg/vrproc-ue4/render/picture.jpg"
}

export {
    newWork,
    newData,
    work,
    floorplanServerData,
    modelRoomLabels,
    modelEntryDoorGuidePluginServerData
}

