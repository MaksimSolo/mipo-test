import axios from "axios";

const instance = axios.create({baseURL: 'https://api-moscow-mba.herokuapp.com/products',})

//api
export const programsApi = {
    getPrograms: () => {
        return instance.get<ProgramsType[]>('')
    }
}

//types
export type ProgramsType = Pick<ProgramsAPIType, '_id'| 'title'| 'specializedSubjects'>
type ProgramsAPIType = {

    studyFormat: string,
    subjectsStickerType: string,
    questions: [],
    reviews: [],
    localizations: [],
    _id: string,
    published_at: string,
    locale: string,
    goal: string,
    slug: string,
    title: string,
    whatWillYouLearn: [
        {
            _id: string,
            string: string,
            __v: number,
            "id": string
        }
    ],
    specializedSubjects: [
        {
            _id: string,
            string: string,
            __v: number,
            "id": string
        }
    ],
    duration: null,
    baseSubjects: [
        {
            _id: string,
            string: string,
            __v: number,
            "id": string
        }
    ],
    programModulesCounters: {
        "leftCounter": string,
        "rightCounter": string,
        "_id": string,
        "__v": number,
        "id": string
    },
    diplomas: [],
    whoIsFor: [],
    specializedSubjectsAddons: {
        _id: string,
        Practice: boolean,
        __v: number,
        id: string
    },
    createdAt: string,
    updatedAt: string,
    __v: number,
    category: {
        copyToKk: boolean,
        localizations: [
            {
                "_id": "6140722e95ec9b217f470ae9",
                "id": {
                    "type": "Buffer",
                    "data": [
                        97,
                        64,
                        114,
                        46,
                        149,
                        236,
                        155,
                        33,
                        127,
                        71,
                        10,
                        233
                    ]
                }
            }
        ],
        "_id": "6140722c95ec9b217f470ae6",
        "slug": "mini",
        "type": "mini",
        "description": "Программа является усеченной версией полуторогодового курса MBA. На курсе Mini MBA Вы сможете повысить свою квалификацию более интенсивно и освоите только ключевые модули длинной программы",
        "locale": "ru",
        "published_at": "2021-09-14T09:58:41.402Z",
        "labelCases": {
            "_id": "6140722c95ec9b217f470ae7",
            "singular": "Mini MBA",
            "plural": "Mini MBA",
            "__v": 0,
            "id": "6140722c95ec9b217f470ae7"
        },
        "createdAt": "2021-09-14T09:58:04.919Z",
        "updatedAt": "2021-09-14T09:58:41.593Z",
        "__v": 1,
        "id": "6140722c95ec9b217f470ae6"
    },
    "picture": {
        "_id": "6140d01895ec9b217f470af9",
        "name": "bg-header-1.jpg",
        "alternativeText": "",
        "caption": "",
        "hash": "bg_header_1_2a52deb4ab",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "size": 297.5,
        "width": 1920,
        "height": 1279,
        "url": "https://res.cloudinary.com/npomba/image/upload/v1631637522/bg_header_1_2a52deb4ab.jpg",
        "provider_metadata": {
            "public_id": "bg_header_1_2a52deb4ab",
            "resource_type": "image"
        },
        "formats": {
            "thumbnail": {
                "name": "thumbnail_bg-header-1.jpg",
                "hash": "thumbnail_bg_header_1_2a52deb4ab",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 234,
                "height": 156,
                "size": 10.91,
                "path": null,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1631637523/thumbnail_bg_header_1_2a52deb4ab.jpg",
                "provider_metadata": {
                    "public_id": "thumbnail_bg_header_1_2a52deb4ab",
                    "resource_type": "image"
                }
            },
            "large": {
                "name": "large_bg-header-1.jpg",
                "hash": "large_bg_header_1_2a52deb4ab",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 1000,
                "height": 666,
                "size": 143.85,
                "path": null,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1631637524/large_bg_header_1_2a52deb4ab.jpg",
                "provider_metadata": {
                    "public_id": "large_bg_header_1_2a52deb4ab",
                    "resource_type": "image"
                }
            },
            "medium": {
                "name": "medium_bg-header-1.jpg",
                "hash": "medium_bg_header_1_2a52deb4ab",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 750,
                "height": 500,
                "size": 84.39,
                "path": null,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1631637526/medium_bg_header_1_2a52deb4ab.jpg",
                "provider_metadata": {
                    "public_id": "medium_bg_header_1_2a52deb4ab",
                    "resource_type": "image"
                }
            },
            "small": {
                "name": "small_bg-header-1.jpg",
                "hash": "small_bg_header_1_2a52deb4ab",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 500,
                "height": 333,
                "size": 41.68,
                "path": null,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1631637528/small_bg_header_1_2a52deb4ab.jpg",
                "provider_metadata": {
                    "public_id": "small_bg_header_1_2a52deb4ab",
                    "resource_type": "image"
                }
            }
        },
        "provider": "cloudinary",
        "related": [
            "6151cd63ae30d553a5300ca9",
            "6151e5a8c3e9875b0101ad74",
            "6151ee2fc3e9875b0101afb4",
            "6151eeb0c3e9875b0101affc",
            "6151f61ac3e9875b0101b210",
            "61520180c3e9875b0101b394",
            "615231f9273c4e0e788171ae",
            "615235a2273c4e0e78817312",
            "61524c24273c4e0e788178ca",
            "61524cc2273c4e0e78817944",
            "61528ecd4311e562c52045b9",
            "615301fa4311e562c52047a5",
            "615309a64311e562c5204a5c",
            "616fbef8ce68061a1b676a70",
            "616fc0dece68061a1b676ac2",
            "616fc4dace68061a1b676bda",
            "616fca8ece68061a1b676c36",
            "618948b12cc27e377c7b0f64",
            "629f6f36a63c5d001600fd9f"
        ],
        "createdAt": "2021-09-14T16:38:48.261Z",
        "updatedAt": "2022-06-07T15:31:03.757Z",
        "__v": 0,
        "id": "6140d01895ec9b217f470af9"
    },
    "teachers": [
        {
            "copyToKk": true,
            "programs": [
                "6151e97ac3e9875b0101ae7c",
                "61522ee5273c4e0e78816e56",
                "616fbe71ce68061a1b676a42",
                "616fbef8ce68061a1b676a70",
                "616fc06ace68061a1b676a94",
                "6284f9af238ee00016972e88",
                "618948b12cc27e377c7b0f64",
                "6151f897c3e9875b0101b304",
                "615232c3273c4e0e788172a2",
                "61521149273c4e0e78816bf4",
                "6151e719c3e9875b0101ada4",
                "615231f9273c4e0e788171ae",
                "6151f61ac3e9875b0101b210",
                "6151f5cdc3e9875b0101b1e0",
                "61523194273c4e0e78817134",
                "61522ba3273c4e0e78816d62",
                "6151e89cc3e9875b0101ae1c",
                "61522b2c273c4e0e78816ce8",
                "6151d957d152b1001657086c",
                "61523745273c4e0e78817480",
                "6151e483c3e9875b0101acfc",
                "6152493f273c4e0e788177d6",
                "61524d4f273c4e0e788179be",
                "6151ef54c3e9875b0101b02c",
                "6151da21d152b1001657089c",
                "615237c7273c4e0e788174fa",
                "6151d5cfd152b1001657080c",
                "6152363c273c4e0e7881738c",
                "6151ee2fc3e9875b0101afb4",
                "61524c24273c4e0e788178ca",
                "61524cc2273c4e0e78817944",
                "6151eeb0c3e9875b0101affc",
                "6151ea2dc3e9875b0101aec4",
                "61522f55273c4e0e78816ed0",
                "61a0b8f1915ce600162c0dbb",
                "61522ab9273c4e0e78816c6e",
                "6151e7eec3e9875b0101adec",
                "61524e39273c4e0e78817ab2",
                "6151f053c3e9875b0101b08c",
                "6151f676c3e9875b0101b240",
                "61523256273c4e0e78817228",
                "6151f523c3e9875b0101b180",
                "615251be273c4e0e78817d18",
                "61525151273c4e0e78817c9e",
                "6151f484c3e9875b0101b150",
                "61524dcd273c4e0e78817a38",
                "6151efe1c3e9875b0101b05c",
                "6151f575c3e9875b0101b1b0",
                "6152521a273c4e0e78817d92",
                "6151f0c2c3e9875b0101b0be",
                "6151cd63ae30d553a5300ca9",
                "615235a2273c4e0e78817312",
                "6151daeed152b100165708cc",
                "61523831273c4e0e78817574",
                "6151f723c3e9875b0101b2a0",
                "61525294273c4e0e78817e0c",
                "6151e3b2c3e9875b0101ac9c",
                "61524a0a273c4e0e78817850",
                "6151e504c3e9875b0101ad44",
                "6152502c273c4e0e78817b2e",
                "6151d83cd152b1001657083c",
                "615236cf273c4e0e78817406",
                "6151e427c3e9875b0101accc",
                "6151fbb4c3e9875b0101b364",
                "61523a19273c4e0e7881775c",
                "6151f304c3e9875b0101b120",
                "615250e5273c4e0e78817c24",
                "6151f832c3e9875b0101b2d0",
                "6151e5a8c3e9875b0101ad74",
                "61520180c3e9875b0101b394",
                "6151e2a9c3e9875b0101ac54",
                "61523915273c4e0e78817668",
                "6151f279c3e9875b0101b0ee",
                "6152508c273c4e0e78817ba8",
                "6151f6cac3e9875b0101b270",
                "61522e79273c4e0e78816ddc",
                "6151ebcfc3e9875b0101aef4",
                "61522fd4273c4e0e78816f4a",
                "6151ecd3c3e9875b0101af22",
                "61523041273c4e0e78816fc4",
                "6151dba6d152b100165708fc",
                "615238af273c4e0e788175ee",
                "6151ed2cc3e9875b0101af54",
                "615230a9273c4e0e78817040",
                "6151ed92c3e9875b0101af84",
                "61523125273c4e0e788170ba"
            ],
            "localizations": [
                {
                    "_id": "6137afae59a4ce38fc81b061",
                    "id": {
                        "type": "Buffer",
                        "data": [
                            97,
                            55,
                            175,
                            174,
                            89,
                            164,
                            206,
                            56,
                            252,
                            129,
                            176,
                            97
                        ]
                    }
                }
            ],
            "_id": "6137afad59a4ce38fc81b05f",
            "name": "Ицхак Пинтосевич",
            "description": "Эксперт по личностному росту и развитию бизнеса, почетный профессор университета «Синергия»\n",
            "locale": "ru",
            "published_at": "2022-02-04T10:30:17.308Z",
            "slug": "ichak-pintosevich",
            "createdAt": "2021-09-07T18:30:05.096Z",
            "updatedAt": "2022-06-23T16:42:36.422Z",
            "__v": 0,
            "portrait": {
                "_id": "620148f9aff4de00166c125d",
                "name": "Ицхак Пинтосевич.png",
                "alternativeText": "",
                "caption": "",
                "hash": "Iczhak_Pintosevich_47dad6b6c8",
                "ext": ".png",
                "mime": "image/png",
                "size": 252.47,
                "width": 492,
                "height": 581,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1644251382/Iczhak_Pintosevich_47dad6b6c8.png",
                "provider_metadata": {
                    "public_id": "Iczhak_Pintosevich_47dad6b6c8",
                    "resource_type": "image"
                },
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_Ицхак Пинтосевич.png",
                        "hash": "thumbnail_Iczhak_Pintosevich_47dad6b6c8",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 132,
                        "height": 156,
                        "size": 33.18,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644251383/thumbnail_Iczhak_Pintosevich_47dad6b6c8.png",
                        "provider_metadata": {
                            "public_id": "thumbnail_Iczhak_Pintosevich_47dad6b6c8",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "name": "small_Ицхак Пинтосевич.png",
                        "hash": "small_Iczhak_Pintosevich_47dad6b6c8",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 423,
                        "height": 500,
                        "size": 275.45,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644251384/small_Iczhak_Pintosevich_47dad6b6c8.png",
                        "provider_metadata": {
                            "public_id": "small_Iczhak_Pintosevich_47dad6b6c8",
                            "resource_type": "image"
                        }
                    }
                },
                "provider": "cloudinary",
                "related": [
                    "6137afad59a4ce38fc81b05f"
                ],
                "createdAt": "2022-02-07T16:29:45.200Z",
                "updatedAt": "2022-02-07T16:30:10.176Z",
                "__v": 0,
                "id": "620148f9aff4de00166c125d"
            },
            "descriptionItems": [
                {
                    "_id": "61fd00145326950016a1819f",
                    "item": " Автор книги «Действуй! 10 заповедей успеха» и еще 14 книг-тренингов",
                    "__v": 0,
                    "id": "61fd00145326950016a1819f"
                },
                {
                    "_id": "61fd00145326950016a181a0",
                    "item": "Общий тираж проданных книг более 800 000. Почетный профессор университета «Синергия»",
                    "__v": 0,
                    "id": "61fd00145326950016a181a0"
                },
                {
                    "_id": "61fd00145326950016a181a1",
                    "item": "Основатель платформы для экспертов 5sfer.com и платформы для преподавателей vaikra.com",
                    "__v": 0,
                    "id": "61fd00145326950016a181a1"
                }
            ],
            "id": "6137afad59a4ce38fc81b05f"
        },
        {
            "copyToKk": true,
            "programs": [
                "618948b12cc27e377c7b0f64",
                "6151f897c3e9875b0101b304",
                "615232c3273c4e0e788172a2",
                "61521149273c4e0e78816bf4",
                "6151e719c3e9875b0101ada4",
                "615231f9273c4e0e788171ae",
                "6151f61ac3e9875b0101b210",
                "6151f5cdc3e9875b0101b1e0",
                "61523194273c4e0e78817134",
                "61522ba3273c4e0e78816d62",
                "6151e89cc3e9875b0101ae1c",
                "61522b2c273c4e0e78816ce8",
                "6151d957d152b1001657086c",
                "61523745273c4e0e78817480",
                "6151e483c3e9875b0101acfc",
                "6152493f273c4e0e788177d6",
                "61524d4f273c4e0e788179be",
                "6151ef54c3e9875b0101b02c",
                "6151da21d152b1001657089c",
                "615237c7273c4e0e788174fa",
                "6151d5cfd152b1001657080c",
                "6152363c273c4e0e7881738c",
                "6151ee2fc3e9875b0101afb4",
                "61524c24273c4e0e788178ca",
                "61524cc2273c4e0e78817944",
                "6151eeb0c3e9875b0101affc",
                "6151ea2dc3e9875b0101aec4",
                "61522f55273c4e0e78816ed0",
                "61a0b8f1915ce600162c0dbb",
                "61522ab9273c4e0e78816c6e",
                "6151e7eec3e9875b0101adec",
                "61524e39273c4e0e78817ab2",
                "6151f053c3e9875b0101b08c",
                "6151f676c3e9875b0101b240",
                "61523256273c4e0e78817228",
                "6151f523c3e9875b0101b180",
                "615251be273c4e0e78817d18",
                "61525151273c4e0e78817c9e",
                "6151f484c3e9875b0101b150",
                "61524dcd273c4e0e78817a38",
                "6151efe1c3e9875b0101b05c",
                "6151f575c3e9875b0101b1b0",
                "6152521a273c4e0e78817d92",
                "6151f0c2c3e9875b0101b0be",
                "6151cd63ae30d553a5300ca9",
                "615235a2273c4e0e78817312",
                "6151daeed152b100165708cc",
                "61523831273c4e0e78817574",
                "6151f723c3e9875b0101b2a0",
                "61525294273c4e0e78817e0c",
                "6151e3b2c3e9875b0101ac9c",
                "61524a0a273c4e0e78817850",
                "6151e504c3e9875b0101ad44",
                "6152502c273c4e0e78817b2e",
                "6151d83cd152b1001657083c",
                "615236cf273c4e0e78817406",
                "6151e427c3e9875b0101accc",
                "6151fbb4c3e9875b0101b364",
                "61523a19273c4e0e7881775c",
                "6151f304c3e9875b0101b120",
                "615250e5273c4e0e78817c24",
                "6151f832c3e9875b0101b2d0",
                "6151e5a8c3e9875b0101ad74",
                "61520180c3e9875b0101b394",
                "6151e2a9c3e9875b0101ac54",
                "61523915273c4e0e78817668",
                "6151f279c3e9875b0101b0ee",
                "6152508c273c4e0e78817ba8",
                "6151f6cac3e9875b0101b270",
                "61522e79273c4e0e78816ddc",
                "6151ebcfc3e9875b0101aef4",
                "61522fd4273c4e0e78816f4a",
                "6151ecd3c3e9875b0101af22",
                "61523041273c4e0e78816fc4",
                "6151dba6d152b100165708fc",
                "615238af273c4e0e788175ee",
                "6151ed2cc3e9875b0101af54",
                "615230a9273c4e0e78817040",
                "6151ed92c3e9875b0101af84",
                "61523125273c4e0e788170ba"
            ],
            "localizations": [],
            "_id": "61fd03355326950016a181c5",
            "name": "Валерия Трофимова ",
            "slug": "trofimova-valeriya",
            "description": "Практикующий экономист в ВТБ. Работает с крупнейшими международными компаниями в области финансового консалтинга\n",
            "locale": "ru",
            "published_at": "2022-02-07T12:52:56.868Z",
            "descriptionItems": [
                {
                    "_id": "61fd03355326950016a181c6",
                    "item": "Практикующий экономист в ВТБ",
                    "__v": 0,
                    "id": "61fd03355326950016a181c6"
                },
                {
                    "_id": "61fd03355326950016a181c7",
                    "item": "Работает с крупнейшими международными компаниями в области финансового консалтинга, аудита, банковского дела",
                    "__v": 0,
                    "id": "61fd03355326950016a181c7"
                },
                {
                    "_id": "61fd03355326950016a181c8",
                    "item": "Дипломированный финансовый советник",
                    "__v": 0,
                    "id": "61fd03355326950016a181c8"
                },
                {
                    "_id": "61fd03355326950016a181c9",
                    "item": "Аспирант Финансового университета при правительстве РФ",
                    "__v": 0,
                    "id": "61fd03355326950016a181c9"
                }
            ],
            "createdAt": "2022-02-04T10:43:01.361Z",
            "updatedAt": "2022-06-23T16:22:03.996Z",
            "__v": 1,
            "portrait": {
                "_id": "61fd032e5326950016a181c4",
                "name": "Трофимова Валерия.png",
                "alternativeText": "",
                "caption": "",
                "hash": "Trofimova_Valeriya_4d424dddef",
                "ext": ".png",
                "mime": "image/png",
                "size": 436.76,
                "width": 800,
                "height": 956,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1643971370/Trofimova_Valeriya_4d424dddef.png",
                "provider_metadata": {
                    "public_id": "Trofimova_Valeriya_4d424dddef",
                    "resource_type": "image"
                },
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_Трофимова Валерия.png",
                        "hash": "thumbnail_Trofimova_Valeriya_4d424dddef",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 131,
                        "height": 156,
                        "size": 25.38,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1643971371/thumbnail_Trofimova_Valeriya_4d424dddef.png",
                        "provider_metadata": {
                            "public_id": "thumbnail_Trofimova_Valeriya_4d424dddef",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "name": "medium_Трофимова Валерия.png",
                        "hash": "medium_Trofimova_Valeriya_4d424dddef",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 628,
                        "height": 750,
                        "size": 441.05,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1643971372/medium_Trofimova_Valeriya_4d424dddef.png",
                        "provider_metadata": {
                            "public_id": "medium_Trofimova_Valeriya_4d424dddef",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "name": "small_Трофимова Валерия.png",
                        "hash": "small_Trofimova_Valeriya_4d424dddef",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 418,
                        "height": 500,
                        "size": 207.82,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1643971373/small_Trofimova_Valeriya_4d424dddef.png",
                        "provider_metadata": {
                            "public_id": "small_Trofimova_Valeriya_4d424dddef",
                            "resource_type": "image"
                        }
                    }
                },
                "provider": "cloudinary",
                "related": [
                    "61fd03355326950016a181c5"
                ],
                "createdAt": "2022-02-04T10:42:54.059Z",
                "updatedAt": "2022-02-04T10:43:01.568Z",
                "__v": 0,
                "id": "61fd032e5326950016a181c4"
            },
            "id": "61fd03355326950016a181c5"
        },
        {
            "copyToKk": true,
            "programs": [
                "618948b12cc27e377c7b0f64",
                "6151f897c3e9875b0101b304",
                "615232c3273c4e0e788172a2",
                "61521149273c4e0e78816bf4",
                "6151e719c3e9875b0101ada4",
                "615231f9273c4e0e788171ae",
                "6151f61ac3e9875b0101b210",
                "6151f5cdc3e9875b0101b1e0",
                "61523194273c4e0e78817134",
                "61522ba3273c4e0e78816d62",
                "6151e89cc3e9875b0101ae1c",
                "61522b2c273c4e0e78816ce8",
                "6151d957d152b1001657086c",
                "61523745273c4e0e78817480",
                "6151e483c3e9875b0101acfc",
                "6152493f273c4e0e788177d6",
                "61524d4f273c4e0e788179be",
                "6151ef54c3e9875b0101b02c",
                "6151da21d152b1001657089c",
                "615237c7273c4e0e788174fa",
                "6151d5cfd152b1001657080c",
                "6152363c273c4e0e7881738c",
                "6151ee2fc3e9875b0101afb4",
                "61524c24273c4e0e788178ca",
                "61524cc2273c4e0e78817944",
                "6151eeb0c3e9875b0101affc",
                "6151ea2dc3e9875b0101aec4",
                "61522f55273c4e0e78816ed0",
                "61a0b8f1915ce600162c0dbb",
                "61522ab9273c4e0e78816c6e",
                "6151e7eec3e9875b0101adec",
                "61524e39273c4e0e78817ab2",
                "6151f053c3e9875b0101b08c",
                "6151f676c3e9875b0101b240",
                "61523256273c4e0e78817228",
                "6151f523c3e9875b0101b180",
                "615251be273c4e0e78817d18",
                "61525151273c4e0e78817c9e",
                "6151f484c3e9875b0101b150",
                "61524dcd273c4e0e78817a38",
                "6151efe1c3e9875b0101b05c",
                "6151f575c3e9875b0101b1b0",
                "6152521a273c4e0e78817d92",
                "6151f0c2c3e9875b0101b0be",
                "6151cd63ae30d553a5300ca9",
                "615235a2273c4e0e78817312",
                "6151daeed152b100165708cc",
                "61523831273c4e0e78817574",
                "6151f723c3e9875b0101b2a0",
                "61525294273c4e0e78817e0c",
                "6151e3b2c3e9875b0101ac9c",
                "61524a0a273c4e0e78817850",
                "6151e504c3e9875b0101ad44",
                "6152502c273c4e0e78817b2e",
                "6151d83cd152b1001657083c",
                "615236cf273c4e0e78817406",
                "6151e427c3e9875b0101accc",
                "6151fbb4c3e9875b0101b364",
                "61523a19273c4e0e7881775c",
                "6151f304c3e9875b0101b120",
                "615250e5273c4e0e78817c24",
                "6151f832c3e9875b0101b2d0",
                "6151e5a8c3e9875b0101ad74",
                "61520180c3e9875b0101b394",
                "6151e2a9c3e9875b0101ac54",
                "61523915273c4e0e78817668",
                "6151f279c3e9875b0101b0ee",
                "6152508c273c4e0e78817ba8",
                "6151f6cac3e9875b0101b270",
                "61522e79273c4e0e78816ddc",
                "6151ebcfc3e9875b0101aef4",
                "61522fd4273c4e0e78816f4a",
                "6151ecd3c3e9875b0101af22",
                "61523041273c4e0e78816fc4",
                "6151dba6d152b100165708fc",
                "615238af273c4e0e788175ee",
                "6151ed2cc3e9875b0101af54",
                "615230a9273c4e0e78817040",
                "6151ed92c3e9875b0101af84",
                "61523125273c4e0e788170ba"
            ],
            "localizations": [],
            "_id": "6200d63d2c27ca0016c1e2e6",
            "name": "Валентина Катаниди ",
            "slug": "katanidi-valentina",
            "description": "Бизнес-тренер компании Hoff. Более 3500 проведенных тренинговых часов для развития soft skills",
            "locale": "ru",
            "published_at": "2022-02-07T12:48:06.300Z",
            "descriptionItems": [
                {
                    "_id": "6200d63d2c27ca0016c1e2e7",
                    "item": "Бизнес-тренер компании Hoff",
                    "__v": 0,
                    "id": "6200d63d2c27ca0016c1e2e7"
                },
                {
                    "_id": "6200d63d2c27ca0016c1e2e8",
                    "item": "Член Ассоциации карьерного консультирования и сопровождения\n",
                    "__v": 0,
                    "id": "6200d63d2c27ca0016c1e2e8"
                },
                {
                    "_id": "6200d63d2c27ca0016c1e2e9",
                    "item": "Более 5 лет проводит карьерные консультации для руководителей",
                    "__v": 0,
                    "id": "6200d63d2c27ca0016c1e2e9"
                },
                {
                    "_id": "6200d63d2c27ca0016c1e2ea",
                    "item": "Более 3500 проведенных тренинговых часов для развития soft skills\n",
                    "__v": 0,
                    "id": "6200d63d2c27ca0016c1e2ea"
                },
                {
                    "_id": "6200d63d2c27ca0016c1e2eb",
                    "item": "Полуфиналист Всероссийского конкурса «Лига лекторов»\"",
                    "__v": 0,
                    "id": "6200d63d2c27ca0016c1e2eb"
                }
            ],
            "createdAt": "2022-02-07T08:20:13.451Z",
            "updatedAt": "2022-06-23T16:22:03.996Z",
            "__v": 1,
            "portrait": {
                "_id": "6200d6302c27ca0016c1e2e5",
                "name": "Катаниди Валентина.png",
                "alternativeText": "",
                "caption": "",
                "hash": "Katanidi_Valentina_d5046ad6d2",
                "ext": ".png",
                "mime": "image/png",
                "size": 2792.55,
                "width": 2469,
                "height": 2950,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1644221994/Katanidi_Valentina_d5046ad6d2.png",
                "provider_metadata": {
                    "public_id": "Katanidi_Valentina_d5046ad6d2",
                    "resource_type": "image"
                },
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_Катаниди Валентина.png",
                        "hash": "thumbnail_Katanidi_Valentina_d5046ad6d2",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 130,
                        "height": 156,
                        "size": 36.03,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644221996/thumbnail_Katanidi_Valentina_d5046ad6d2.png",
                        "provider_metadata": {
                            "public_id": "thumbnail_Katanidi_Valentina_d5046ad6d2",
                            "resource_type": "image"
                        }
                    },
                    "large": {
                        "name": "large_Катаниди Валентина.png",
                        "hash": "large_Katanidi_Valentina_d5046ad6d2",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 837,
                        "height": 1000,
                        "size": 1096.89,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644221998/large_Katanidi_Valentina_d5046ad6d2.png",
                        "provider_metadata": {
                            "public_id": "large_Katanidi_Valentina_d5046ad6d2",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "name": "medium_Катаниди Валентина.png",
                        "hash": "medium_Katanidi_Valentina_d5046ad6d2",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 628,
                        "height": 750,
                        "size": 643.94,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644221999/medium_Katanidi_Valentina_d5046ad6d2.png",
                        "provider_metadata": {
                            "public_id": "medium_Katanidi_Valentina_d5046ad6d2",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "name": "small_Катаниди Валентина.png",
                        "hash": "small_Katanidi_Valentina_d5046ad6d2",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 418,
                        "height": 500,
                        "size": 300.23,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644222000/small_Katanidi_Valentina_d5046ad6d2.png",
                        "provider_metadata": {
                            "public_id": "small_Katanidi_Valentina_d5046ad6d2",
                            "resource_type": "image"
                        }
                    }
                },
                "provider": "cloudinary",
                "related": [
                    "6200d63d2c27ca0016c1e2e6"
                ],
                "createdAt": "2022-02-07T08:20:00.944Z",
                "updatedAt": "2022-02-07T08:20:13.659Z",
                "__v": 0,
                "id": "6200d6302c27ca0016c1e2e5"
            },
            "id": "6200d63d2c27ca0016c1e2e6"
        },
        {
            "copyToKk": true,
            "programs": [
                "618948b12cc27e377c7b0f64",
                "6151f897c3e9875b0101b304",
                "615232c3273c4e0e788172a2",
                "61521149273c4e0e78816bf4",
                "6151e719c3e9875b0101ada4",
                "615231f9273c4e0e788171ae",
                "6151f61ac3e9875b0101b210",
                "6151f5cdc3e9875b0101b1e0",
                "61523194273c4e0e78817134",
                "61522ba3273c4e0e78816d62",
                "6151e89cc3e9875b0101ae1c",
                "61522b2c273c4e0e78816ce8",
                "6151d957d152b1001657086c",
                "61523745273c4e0e78817480",
                "6151e483c3e9875b0101acfc",
                "6152493f273c4e0e788177d6",
                "61524d4f273c4e0e788179be",
                "6151ef54c3e9875b0101b02c",
                "6151da21d152b1001657089c",
                "615237c7273c4e0e788174fa",
                "6151d5cfd152b1001657080c",
                "6152363c273c4e0e7881738c",
                "6151ee2fc3e9875b0101afb4",
                "61524c24273c4e0e788178ca",
                "61524cc2273c4e0e78817944",
                "6151eeb0c3e9875b0101affc",
                "6151ea2dc3e9875b0101aec4",
                "61522f55273c4e0e78816ed0",
                "61a0b8f1915ce600162c0dbb",
                "61522ab9273c4e0e78816c6e",
                "6151e7eec3e9875b0101adec",
                "61524e39273c4e0e78817ab2",
                "6151f053c3e9875b0101b08c",
                "6151f676c3e9875b0101b240",
                "61523256273c4e0e78817228",
                "6151f523c3e9875b0101b180",
                "615251be273c4e0e78817d18",
                "61525151273c4e0e78817c9e",
                "6151f484c3e9875b0101b150",
                "61524dcd273c4e0e78817a38",
                "6151efe1c3e9875b0101b05c",
                "6151f575c3e9875b0101b1b0",
                "6152521a273c4e0e78817d92",
                "6151f0c2c3e9875b0101b0be",
                "6151cd63ae30d553a5300ca9",
                "615235a2273c4e0e78817312",
                "6151daeed152b100165708cc",
                "61523831273c4e0e78817574",
                "6151f723c3e9875b0101b2a0",
                "61525294273c4e0e78817e0c",
                "6151e3b2c3e9875b0101ac9c",
                "61524a0a273c4e0e78817850",
                "6151e504c3e9875b0101ad44",
                "6152502c273c4e0e78817b2e",
                "6151d83cd152b1001657083c",
                "615236cf273c4e0e78817406",
                "6151e427c3e9875b0101accc",
                "6151fbb4c3e9875b0101b364",
                "61523a19273c4e0e7881775c",
                "6151f304c3e9875b0101b120",
                "615250e5273c4e0e78817c24",
                "6151f832c3e9875b0101b2d0",
                "6151e5a8c3e9875b0101ad74",
                "61520180c3e9875b0101b394",
                "6151e2a9c3e9875b0101ac54",
                "61523915273c4e0e78817668",
                "6151f279c3e9875b0101b0ee",
                "6152508c273c4e0e78817ba8",
                "6151f6cac3e9875b0101b270",
                "61522e79273c4e0e78816ddc",
                "6151ebcfc3e9875b0101aef4",
                "61522fd4273c4e0e78816f4a",
                "6151ecd3c3e9875b0101af22",
                "61523041273c4e0e78816fc4",
                "6151dba6d152b100165708fc",
                "615238af273c4e0e788175ee",
                "6151ed2cc3e9875b0101af54",
                "615230a9273c4e0e78817040",
                "615303124311e562c52047ff",
                "6151ed92c3e9875b0101af84",
                "61523125273c4e0e788170ba",
                "62bed28e5cdd98001682278f"
            ],
            "localizations": [],
            "_id": "62011efe693ccb0016da2f11",
            "name": "Александр Карпухин ",
            "slug": "aleksandr-karpuhin",
            "description": "Руководитель проектов создания аналитических систем для государства и бизнеса для РБК Мониторинг, РАН, МИД России, К.э.н.",
            "locale": "ru",
            "published_at": "2022-02-07T13:30:40.067Z",
            "descriptionItems": [
                {
                    "_id": "62011efe693ccb0016da2f12",
                    "item": "Руководитель проектов создания экспертных и аналитических систем для государства и бизнеса, в том числе РБК Мониторинг, аналитической системы госзакупок, экспертной системы Российской академии наук, УС ВФД МИД России, ИАС ФАНО России",
                    "__v": 0,
                    "id": "62011efe693ccb0016da2f12"
                },
                {
                    "_id": "62011efe693ccb0016da2f13",
                    "item": "К.э.н., доцент Департамента анализа данных и машинного обучения Финансового университета при Правительстве Российской Федерации",
                    "__v": 0,
                    "id": "62011efe693ccb0016da2f13"
                },
                {
                    "_id": "62011efe693ccb0016da2f14",
                    "item": "Автор 18 научных публикаций",
                    "__v": 0,
                    "id": "62011efe693ccb0016da2f14"
                }
            ],
            "createdAt": "2022-02-07T13:30:38.081Z",
            "updatedAt": "2022-07-21T12:29:05.810Z",
            "__v": 1,
            "portrait": {
                "_id": "62011efc693ccb0016da2f10",
                "name": "Карпухин Александр.png",
                "alternativeText": "",
                "caption": "",
                "hash": "Karpuhin_Aleksandr_67ea5388c7",
                "ext": ".png",
                "mime": "image/png",
                "size": 2296.36,
                "width": 2264,
                "height": 2700,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1644240628/Karpuhin_Aleksandr_67ea5388c7.png",
                "provider_metadata": {
                    "public_id": "Karpuhin_Aleksandr_67ea5388c7",
                    "resource_type": "image"
                },
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_Карпухин Александр.png",
                        "hash": "thumbnail_Karpuhin_Aleksandr_67ea5388c7",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 131,
                        "height": 156,
                        "size": 26.53,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644240630/thumbnail_Karpuhin_Aleksandr_67ea5388c7.png",
                        "provider_metadata": {
                            "public_id": "thumbnail_Karpuhin_Aleksandr_67ea5388c7",
                            "resource_type": "image"
                        }
                    },
                    "large": {
                        "name": "large_Карпухин Александр.png",
                        "hash": "large_Karpuhin_Aleksandr_67ea5388c7",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 839,
                        "height": 1000,
                        "size": 765.46,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644240632/large_Karpuhin_Aleksandr_67ea5388c7.png",
                        "provider_metadata": {
                            "public_id": "large_Karpuhin_Aleksandr_67ea5388c7",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "name": "medium_Карпухин Александр.png",
                        "hash": "medium_Karpuhin_Aleksandr_67ea5388c7",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 629,
                        "height": 750,
                        "size": 446.2,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644240634/medium_Karpuhin_Aleksandr_67ea5388c7.png",
                        "provider_metadata": {
                            "public_id": "medium_Karpuhin_Aleksandr_67ea5388c7",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "name": "small_Карпухин Александр.png",
                        "hash": "small_Karpuhin_Aleksandr_67ea5388c7",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 419,
                        "height": 500,
                        "size": 208.44,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644240635/small_Karpuhin_Aleksandr_67ea5388c7.png",
                        "provider_metadata": {
                            "public_id": "small_Karpuhin_Aleksandr_67ea5388c7",
                            "resource_type": "image"
                        }
                    }
                },
                "provider": "cloudinary",
                "related": [
                    "62011efe693ccb0016da2f11"
                ],
                "createdAt": "2022-02-07T13:30:36.149Z",
                "updatedAt": "2022-02-07T13:30:38.301Z",
                "__v": 0,
                "id": "62011efc693ccb0016da2f10"
            },
            "id": "62011efe693ccb0016da2f11"
        },
        {
            "copyToKk": true,
            "programs": [
                "61521149273c4e0e78816bf4",
                "6151e719c3e9875b0101ada4",
                "6151cd63ae30d553a5300ca9",
                "615235a2273c4e0e78817312",
                "6151f832c3e9875b0101b2d0",
                "6151e2a9c3e9875b0101ac54",
                "61523915273c4e0e78817668",
                "6151ed2cc3e9875b0101af54",
                "615230a9273c4e0e78817040"
            ],
            "localizations": [],
            "_id": "62011f49693ccb0016da2f1a",
            "name": "Алексей Сотников",
            "slug": "aleksej-sotnikov",
            "description": "Эксперт в брендинге и финансовом менеджменте. 20+ лет работы бизнес-консультантом. Степень MBA «International Management»",
            "locale": "ru",
            "published_at": "2022-02-07T13:31:54.959Z",
            "descriptionItems": [
                {
                    "_id": "62011f49693ccb0016da2f1b",
                    "item": "15+ лет опыта в сфере финансов на должности Финансовый директор (ПО ЗАО «Сходня», ЗАО «Лерко-новые технологии», ЗАО «Электрофарфор»)",
                    "__v": 0,
                    "id": "62011f49693ccb0016da2f1b"
                },
                {
                    "_id": "62011f49693ccb0016da2f1c",
                    "item": " Консультант в проведении проектов по трансормации в стандарты МСФО и обучению (ОАО «Мегафон», концерна «Siemens», ОАО «Ильинское подворье» и др.)\n",
                    "__v": 0,
                    "id": "62011f49693ccb0016da2f1c"
                },
                {
                    "_id": "62011f49693ccb0016da2f1d",
                    "item": "К.э.н. и Преподаватель экономических дисциплин (РЭА, Финансовый Университет, МОСУ и др)",
                    "__v": 0,
                    "id": "62011f49693ccb0016da2f1d"
                },
                {
                    "_id": "62011f49693ccb0016da2f1e",
                    "item": "Автор статей и научных публикаций в областях управленческого, \nмеждународного, финансового учета, АФС и др",
                    "__v": 0,
                    "id": "62011f49693ccb0016da2f1e"
                }
            ],
            "createdAt": "2022-02-07T13:31:53.050Z",
            "updatedAt": "2022-06-23T15:38:51.016Z",
            "__v": 1,
            "portrait": {
                "_id": "62011f41693ccb0016da2f19",
                "name": "Сотников Алексей.png",
                "alternativeText": "",
                "caption": "",
                "hash": "Sotnikov_Aleksej_a6b86c4a30",
                "ext": ".png",
                "mime": "image/png",
                "size": 658.45,
                "width": 800,
                "height": 956,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1644240702/Sotnikov_Aleksej_a6b86c4a30.png",
                "provider_metadata": {
                    "public_id": "Sotnikov_Aleksej_a6b86c4a30",
                    "resource_type": "image"
                },
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_Сотников Алексей.png",
                        "hash": "thumbnail_Sotnikov_Aleksej_a6b86c4a30",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 131,
                        "height": 156,
                        "size": 30.04,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644240702/thumbnail_Sotnikov_Aleksej_a6b86c4a30.png",
                        "provider_metadata": {
                            "public_id": "thumbnail_Sotnikov_Aleksej_a6b86c4a30",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "name": "medium_Сотников Алексей.png",
                        "hash": "medium_Sotnikov_Aleksej_a6b86c4a30",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 628,
                        "height": 750,
                        "size": 596.99,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644240704/medium_Sotnikov_Aleksej_a6b86c4a30.png",
                        "provider_metadata": {
                            "public_id": "medium_Sotnikov_Aleksej_a6b86c4a30",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "name": "small_Сотников Алексей.png",
                        "hash": "small_Sotnikov_Aleksej_a6b86c4a30",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 418,
                        "height": 500,
                        "size": 269.47,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644240705/small_Sotnikov_Aleksej_a6b86c4a30.png",
                        "provider_metadata": {
                            "public_id": "small_Sotnikov_Aleksej_a6b86c4a30",
                            "resource_type": "image"
                        }
                    }
                },
                "provider": "cloudinary",
                "related": [
                    "62011f49693ccb0016da2f1a"
                ],
                "createdAt": "2022-02-07T13:31:45.355Z",
                "updatedAt": "2022-02-07T13:31:53.246Z",
                "__v": 0,
                "id": "62011f41693ccb0016da2f19"
            },
            "id": "62011f49693ccb0016da2f1a"
        },
        {
            "copyToKk": true,
            "programs": [
                "618948b12cc27e377c7b0f64",
                "6151f897c3e9875b0101b304",
                "615232c3273c4e0e788172a2",
                "61521149273c4e0e78816bf4",
                "6151e719c3e9875b0101ada4",
                "615231f9273c4e0e788171ae",
                "6151f61ac3e9875b0101b210",
                "6151f5cdc3e9875b0101b1e0",
                "61523194273c4e0e78817134",
                "61522ba3273c4e0e78816d62",
                "6151e89cc3e9875b0101ae1c",
                "61522b2c273c4e0e78816ce8",
                "6151d957d152b1001657086c",
                "61523745273c4e0e78817480",
                "6151e483c3e9875b0101acfc",
                "6152493f273c4e0e788177d6",
                "61524d4f273c4e0e788179be",
                "6151ef54c3e9875b0101b02c",
                "6151da21d152b1001657089c",
                "615237c7273c4e0e788174fa",
                "6151d5cfd152b1001657080c",
                "6152363c273c4e0e7881738c",
                "6151ee2fc3e9875b0101afb4",
                "61524c24273c4e0e788178ca",
                "61524cc2273c4e0e78817944",
                "6151eeb0c3e9875b0101affc",
                "6151ea2dc3e9875b0101aec4",
                "61522f55273c4e0e78816ed0",
                "61a0b8f1915ce600162c0dbb",
                "61522ab9273c4e0e78816c6e",
                "6151e7eec3e9875b0101adec",
                "61524e39273c4e0e78817ab2",
                "6151f053c3e9875b0101b08c",
                "6151f676c3e9875b0101b240",
                "61523256273c4e0e78817228",
                "6151f523c3e9875b0101b180",
                "615251be273c4e0e78817d18",
                "61525151273c4e0e78817c9e",
                "6151f484c3e9875b0101b150",
                "61524dcd273c4e0e78817a38",
                "6151efe1c3e9875b0101b05c",
                "6151f575c3e9875b0101b1b0",
                "6152521a273c4e0e78817d92",
                "6151f0c2c3e9875b0101b0be",
                "6151cd63ae30d553a5300ca9",
                "615235a2273c4e0e78817312",
                "6151daeed152b100165708cc",
                "61523831273c4e0e78817574",
                "6151f723c3e9875b0101b2a0",
                "61525294273c4e0e78817e0c",
                "6151e3b2c3e9875b0101ac9c",
                "61524a0a273c4e0e78817850",
                "6151e504c3e9875b0101ad44",
                "6152502c273c4e0e78817b2e",
                "6151d83cd152b1001657083c",
                "615236cf273c4e0e78817406",
                "6151e427c3e9875b0101accc",
                "6151fbb4c3e9875b0101b364",
                "61523a19273c4e0e7881775c",
                "6151f304c3e9875b0101b120",
                "615250e5273c4e0e78817c24",
                "6151f832c3e9875b0101b2d0",
                "6151e5a8c3e9875b0101ad74",
                "61520180c3e9875b0101b394",
                "6151e2a9c3e9875b0101ac54",
                "61523915273c4e0e78817668",
                "6151f279c3e9875b0101b0ee",
                "6152508c273c4e0e78817ba8",
                "6151f6cac3e9875b0101b270",
                "61522e79273c4e0e78816ddc",
                "6151ebcfc3e9875b0101aef4",
                "61522fd4273c4e0e78816f4a",
                "6151ecd3c3e9875b0101af22",
                "61523041273c4e0e78816fc4",
                "6151dba6d152b100165708fc",
                "615238af273c4e0e788175ee",
                "6151ed2cc3e9875b0101af54",
                "615230a9273c4e0e78817040",
                "6151ed92c3e9875b0101af84",
                "61523125273c4e0e788170ba"
            ],
            "localizations": [],
            "_id": "620121d5693ccb0016da2f74",
            "name": "Инна Ожогина",
            "slug": "inna-ozhogina",
            "description": "Эксперт в цифровой трансформации бизнеса. 20+ лет работы в международных компаниях. Запускала проекты в Microsoft, SAP",
            "locale": "ru",
            "published_at": "2022-02-07T13:42:48.145Z",
            "descriptionItems": [
                {
                    "_id": "620121d5693ccb0016da2f75",
                    "item": "Ментор, коуч, наставник",
                    "__v": 0,
                    "id": "620121d5693ccb0016da2f75"
                },
                {
                    "_id": "620121d5693ccb0016da2f76",
                    "item": "20+ лет работы в международных ИТ-компаниях в сферах прямых и непрямых (через партнерскую сеть) В2В продаж сложных решений, развития бизнеса и партнерской сети, маркетинга и консалтинга",
                    "__v": 0,
                    "id": "620121d5693ccb0016da2f76"
                },
                {
                    "_id": "620121d5693ccb0016da2f77",
                    "item": "6 лет руководства отделами продаж с результатом выполнения и перевыполнения плана",
                    "__v": 0,
                    "id": "620121d5693ccb0016da2f77"
                },
                {
                    "_id": "620121d5693ccb0016da2f78",
                    "item": "Запускала и развивала продажи облачных сервисов Microsoft в России в 2008-2011 годах",
                    "__v": 0,
                    "id": "620121d5693ccb0016da2f78"
                },
                {
                    "_id": "620121d5693ccb0016da2f79",
                    "item": "Эксперт в области бизнес-приложений (ERP, EPM, CRM, HR системы), облачных решений, цифровой трансформации бизнеса и интернете вещей",
                    "__v": 0,
                    "id": "620121d5693ccb0016da2f79"
                },
                {
                    "_id": "620121d5693ccb0016da2f7a",
                    "item": "Участвовала в построении, трансформации и развитии команды продаж бизнес-приложений в Oracle",
                    "__v": 0,
                    "id": "620121d5693ccb0016da2f7a"
                },
                {
                    "_id": "620121d5693ccb0016da2f7b",
                    "item": "Участвовала в создании стратегии и формировании команды в SAP для запуска продаж облачных решений в России и СНГ в 2012 году",
                    "__v": 0,
                    "id": "620121d5693ccb0016da2f7b"
                },
                {
                    "_id": "620121d5693ccb0016da2f7c",
                    "item": "Участвовала в запуске продаж Microsoft Dynamics для крупных клиентов в России",
                    "__v": 0,
                    "id": "620121d5693ccb0016da2f7c"
                },
                {
                    "_id": "620121d5693ccb0016da2f7d",
                    "item": "Обладательница таких наград как Microsoft Gold Star Award (2006 г.), Brilliant Performer (2007г.), Excellence Club Award in Global Sales (2017 г.) и др.",
                    "__v": 0,
                    "id": "620121d5693ccb0016da2f7d"
                }
            ],
            "createdAt": "2022-02-07T13:42:45.334Z",
            "updatedAt": "2022-06-23T16:22:03.996Z",
            "__v": 1,
            "portrait": {
                "_id": "620121cb693ccb0016da2f73",
                "name": "Ожогина Инна.png",
                "alternativeText": "",
                "caption": "",
                "hash": "Ozhogina_Inna_0af001580c",
                "ext": ".png",
                "mime": "image/png",
                "size": 665.07,
                "width": 800,
                "height": 956,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1644241352/Ozhogina_Inna_0af001580c.png",
                "provider_metadata": {
                    "public_id": "Ozhogina_Inna_0af001580c",
                    "resource_type": "image"
                },
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_Ожогина Инна.png",
                        "hash": "thumbnail_Ozhogina_Inna_0af001580c",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 131,
                        "height": 156,
                        "size": 33.27,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644241353/thumbnail_Ozhogina_Inna_0af001580c.png",
                        "provider_metadata": {
                            "public_id": "thumbnail_Ozhogina_Inna_0af001580c",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "name": "medium_Ожогина Инна.png",
                        "hash": "medium_Ozhogina_Inna_0af001580c",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 628,
                        "height": 750,
                        "size": 659.12,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644241354/medium_Ozhogina_Inna_0af001580c.png",
                        "provider_metadata": {
                            "public_id": "medium_Ozhogina_Inna_0af001580c",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "name": "small_Ожогина Инна.png",
                        "hash": "small_Ozhogina_Inna_0af001580c",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 418,
                        "height": 500,
                        "size": 301.52,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644241355/small_Ozhogina_Inna_0af001580c.png",
                        "provider_metadata": {
                            "public_id": "small_Ozhogina_Inna_0af001580c",
                            "resource_type": "image"
                        }
                    }
                },
                "provider": "cloudinary",
                "related": [
                    "620121d5693ccb0016da2f74"
                ],
                "createdAt": "2022-02-07T13:42:35.684Z",
                "updatedAt": "2022-02-07T13:42:45.539Z",
                "__v": 0,
                "id": "620121cb693ccb0016da2f73"
            },
            "id": "620121d5693ccb0016da2f74"
        },
        {
            "copyToKk": true,
            "programs": [
                "6151f5cdc3e9875b0101b1e0",
                "61523194273c4e0e78817134",
                "6151e89cc3e9875b0101ae1c",
                "61522b2c273c4e0e78816ce8",
                "61524d4f273c4e0e788179be",
                "6151ef54c3e9875b0101b02c",
                "6151da21d152b1001657089c",
                "615237c7273c4e0e788174fa",
                "6151ea2dc3e9875b0101aec4",
                "61522f55273c4e0e78816ed0",
                "61522ab9273c4e0e78816c6e",
                "6151e7eec3e9875b0101adec",
                "61524e39273c4e0e78817ab2",
                "6151f053c3e9875b0101b08c",
                "6151f523c3e9875b0101b180",
                "615251be273c4e0e78817d18",
                "61525151273c4e0e78817c9e",
                "6151f484c3e9875b0101b150",
                "6151cd63ae30d553a5300ca9",
                "615235a2273c4e0e78817312",
                "61524a0a273c4e0e78817850",
                "6151e504c3e9875b0101ad44",
                "6151d83cd152b1001657083c",
                "615236cf273c4e0e78817406",
                "6151e427c3e9875b0101accc",
                "61523a19273c4e0e7881775c",
                "6151f832c3e9875b0101b2d0",
                "6151e5a8c3e9875b0101ad74",
                "61520180c3e9875b0101b394",
                "6151ecd3c3e9875b0101af22",
                "61523041273c4e0e78816fc4",
                "6151ed2cc3e9875b0101af54",
                "615230a9273c4e0e78817040"
            ],
            "localizations": [],
            "_id": "62012221693ccb0016da2f89",
            "name": "Дмитрий Губарев",
            "slug": "dmitrij-gubarev",
            "description": "Более 10 лет работы в области финансового анализа, развития бизнеса, повышения операционной эффективности. Предприниматель.",
            "locale": "ru",
            "published_at": "2022-02-07T13:44:05.785Z",
            "descriptionItems": [
                {
                    "_id": "62012221693ccb0016da2f8a",
                    "item": "Более 10 лет работы в области финансового анализа, развития бизнеса, повышения операционной эффективности",
                    "__v": 0,
                    "id": "62012221693ccb0016da2f8a"
                },
                {
                    "_id": "62012221693ccb0016da2f8b",
                    "item": "Предприниматель",
                    "__v": 0,
                    "id": "62012221693ccb0016da2f8b"
                },
                {
                    "_id": "62012221693ccb0016da2f8c",
                    "item": "Участник российских и международных научных и профессиональных конференций",
                    "__v": 0,
                    "id": "62012221693ccb0016da2f8c"
                },
                {
                    "_id": "62012221693ccb0016da2f8d",
                    "item": "Степень магистра в области экономики",
                    "__v": 0,
                    "id": "62012221693ccb0016da2f8d"
                },
                {
                    "_id": "62012221693ccb0016da2f8e",
                    "item": "Аспирант РЭУ им. Г.В.Плеханова",
                    "__v": 0,
                    "id": "62012221693ccb0016da2f8e"
                },
                {
                    "_id": "62012221693ccb0016da2f8f",
                    "item": "Автор научных и популярных статей (в т.ч. ВАК)",
                    "__v": 0,
                    "id": "62012221693ccb0016da2f8f"
                }
            ],
            "createdAt": "2022-02-07T13:44:01.418Z",
            "updatedAt": "2022-06-23T15:38:51.016Z",
            "__v": 1,
            "portrait": {
                "_id": "6201221c693ccb0016da2f88",
                "name": "Губарев Дмитрий.png",
                "alternativeText": "",
                "caption": "",
                "hash": "Gubarev_Dmitrij_cbde33e413",
                "ext": ".png",
                "mime": "image/png",
                "size": 543.05,
                "width": 800,
                "height": 956,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1644241433/Gubarev_Dmitrij_cbde33e413.png",
                "provider_metadata": {
                    "public_id": "Gubarev_Dmitrij_cbde33e413",
                    "resource_type": "image"
                },
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_Губарев Дмитрий.png",
                        "hash": "thumbnail_Gubarev_Dmitrij_cbde33e413",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 131,
                        "height": 156,
                        "size": 26.71,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644241433/thumbnail_Gubarev_Dmitrij_cbde33e413.png",
                        "provider_metadata": {
                            "public_id": "thumbnail_Gubarev_Dmitrij_cbde33e413",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "name": "medium_Губарев Дмитрий.png",
                        "hash": "medium_Gubarev_Dmitrij_cbde33e413",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 628,
                        "height": 750,
                        "size": 501,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644241435/medium_Gubarev_Dmitrij_cbde33e413.png",
                        "provider_metadata": {
                            "public_id": "medium_Gubarev_Dmitrij_cbde33e413",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "name": "small_Губарев Дмитрий.png",
                        "hash": "small_Gubarev_Dmitrij_cbde33e413",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 418,
                        "height": 500,
                        "size": 227.92,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644241436/small_Gubarev_Dmitrij_cbde33e413.png",
                        "provider_metadata": {
                            "public_id": "small_Gubarev_Dmitrij_cbde33e413",
                            "resource_type": "image"
                        }
                    }
                },
                "provider": "cloudinary",
                "related": [
                    "62012221693ccb0016da2f89"
                ],
                "createdAt": "2022-02-07T13:43:56.839Z",
                "updatedAt": "2022-02-07T13:44:01.682Z",
                "__v": 0,
                "id": "6201221c693ccb0016da2f88"
            },
            "id": "62012221693ccb0016da2f89"
        },
        {
            "copyToKk": true,
            "programs": [
                "618948b12cc27e377c7b0f64",
                "6151f897c3e9875b0101b304",
                "615232c3273c4e0e788172a2",
                "61521149273c4e0e78816bf4",
                "6151e719c3e9875b0101ada4",
                "615231f9273c4e0e788171ae",
                "6151f61ac3e9875b0101b210",
                "6151f5cdc3e9875b0101b1e0",
                "61523194273c4e0e78817134",
                "61522ba3273c4e0e78816d62",
                "6151e89cc3e9875b0101ae1c",
                "61522b2c273c4e0e78816ce8",
                "6151d957d152b1001657086c",
                "61523745273c4e0e78817480",
                "6151e483c3e9875b0101acfc",
                "6152493f273c4e0e788177d6",
                "61524d4f273c4e0e788179be",
                "6151ef54c3e9875b0101b02c",
                "6151da21d152b1001657089c",
                "615237c7273c4e0e788174fa",
                "6151d5cfd152b1001657080c",
                "6152363c273c4e0e7881738c",
                "6151ee2fc3e9875b0101afb4",
                "61524c24273c4e0e788178ca",
                "61524cc2273c4e0e78817944",
                "6151eeb0c3e9875b0101affc",
                "6151ea2dc3e9875b0101aec4",
                "61522f55273c4e0e78816ed0",
                "61a0b8f1915ce600162c0dbb",
                "61522ab9273c4e0e78816c6e",
                "6151e7eec3e9875b0101adec",
                "61524e39273c4e0e78817ab2",
                "6151f053c3e9875b0101b08c",
                "6151f676c3e9875b0101b240",
                "61523256273c4e0e78817228",
                "6151f523c3e9875b0101b180",
                "615251be273c4e0e78817d18",
                "61525151273c4e0e78817c9e",
                "6151f484c3e9875b0101b150",
                "61524dcd273c4e0e78817a38",
                "6151efe1c3e9875b0101b05c",
                "6151f575c3e9875b0101b1b0",
                "6152521a273c4e0e78817d92",
                "6151f0c2c3e9875b0101b0be",
                "6151cd63ae30d553a5300ca9",
                "615235a2273c4e0e78817312",
                "6151daeed152b100165708cc",
                "61523831273c4e0e78817574",
                "6151f723c3e9875b0101b2a0",
                "61525294273c4e0e78817e0c",
                "6151e3b2c3e9875b0101ac9c",
                "61524a0a273c4e0e78817850",
                "6151e504c3e9875b0101ad44",
                "6152502c273c4e0e78817b2e",
                "6151d83cd152b1001657083c",
                "615236cf273c4e0e78817406",
                "6151e427c3e9875b0101accc",
                "6151fbb4c3e9875b0101b364",
                "61523a19273c4e0e7881775c",
                "6151f304c3e9875b0101b120",
                "615250e5273c4e0e78817c24",
                "6151f832c3e9875b0101b2d0",
                "6151e5a8c3e9875b0101ad74",
                "61520180c3e9875b0101b394",
                "6151e2a9c3e9875b0101ac54",
                "61523915273c4e0e78817668",
                "6151f279c3e9875b0101b0ee",
                "6152508c273c4e0e78817ba8",
                "6151f6cac3e9875b0101b270",
                "61522e79273c4e0e78816ddc",
                "6151ebcfc3e9875b0101aef4",
                "61522fd4273c4e0e78816f4a",
                "6151ecd3c3e9875b0101af22",
                "61523041273c4e0e78816fc4",
                "6151dba6d152b100165708fc",
                "615238af273c4e0e788175ee",
                "6151ed2cc3e9875b0101af54",
                "615230a9273c4e0e78817040",
                "6151ed92c3e9875b0101af84",
                "61523125273c4e0e788170ba"
            ],
            "localizations": [],
            "_id": "62012ae9693ccb0016da30c8",
            "name": "Павел Лях",
            "slug": "pavel-lyah",
            "description": "Генеральный директор баскетбольного клуба «Урал-Грейт». Зам. ген. дир. по корпоративной политике «Пермэнерго»",
            "locale": "ru",
            "published_at": "2022-02-07T14:21:32.167Z",
            "descriptionItems": [
                {
                    "_id": "62012ae9693ccb0016da30c9",
                    "item": "Президент компании АКБ «КАУРИ» г.Пермь",
                    "__v": 0,
                    "id": "62012ae9693ccb0016da30c9"
                },
                {
                    "_id": "62012ae9693ccb0016da30ca",
                    "item": "Заместитель генерального директора по корпоративной политике ОАОЭиЭ «Пермэнерго»",
                    "__v": 0,
                    "id": "62012ae9693ccb0016da30ca"
                },
                {
                    "_id": "62012ae9693ccb0016da30cb",
                    "item": "Генеральный директор баскетбольного клуба «Урал-Грейт»",
                    "__v": 0,
                    "id": "62012ae9693ccb0016da30cb"
                },
                {
                    "_id": "62012ae9693ccb0016da30cc",
                    "item": "Президент Федерации баскетбола Пермского края",
                    "__v": 0,
                    "id": "62012ae9693ccb0016da30cc"
                },
                {
                    "_id": "62012ae9693ccb0016da30cd",
                    "item": "Консультант ООО «Пермская топливно-энергетическая компания»",
                    "__v": 0,
                    "id": "62012ae9693ccb0016da30cd"
                },
                {
                    "_id": "62012ae9693ccb0016da30ce",
                    "item": "Министр физической культуры спорта и туризма Пермского края",
                    "__v": 0,
                    "id": "62012ae9693ccb0016da30ce"
                },
                {
                    "_id": "62012ae9693ccb0016da30cf",
                    "item": "Награжден почетным знаком «Отличник физической культуры и спорта» Министерства спорта РФ",
                    "__v": 0,
                    "id": "62012ae9693ccb0016da30cf"
                },
                {
                    "_id": "62012ae9693ccb0016da30d0",
                    "item": "Преподаватель (МАГУ и ПГНИУ) по специализациям «Государственное и муниципальное управление», «Инвестиционная привлекательность территорий», «Основы предпринимательства», «Теория принятия управленческих решений» и др.",
                    "__v": 0,
                    "id": "62012ae9693ccb0016da30d0"
                },
                {
                    "_id": "62012ae9693ccb0016da30d1",
                    "item": "Руководитель проекта в ООО «Семья» г. Пермь",
                    "__v": 0,
                    "id": "62012ae9693ccb0016da30d1"
                }
            ],
            "createdAt": "2022-02-07T14:21:29.844Z",
            "updatedAt": "2022-06-23T16:22:03.996Z",
            "__v": 1,
            "portrait": {
                "_id": "62012ae5693ccb0016da30c7",
                "name": "Лях Павел.png",
                "alternativeText": "",
                "caption": "",
                "hash": "Lyah_Pavel_4d76050d83",
                "ext": ".png",
                "mime": "image/png",
                "size": 4201.19,
                "width": 1600,
                "height": 1912,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1644243680/Lyah_Pavel_4d76050d83.png",
                "provider_metadata": {
                    "public_id": "Lyah_Pavel_4d76050d83",
                    "resource_type": "image"
                },
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_Лях Павел.png",
                        "hash": "thumbnail_Lyah_Pavel_4d76050d83",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 131,
                        "height": 156,
                        "size": 33.85,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644243682/thumbnail_Lyah_Pavel_4d76050d83.png",
                        "provider_metadata": {
                            "public_id": "thumbnail_Lyah_Pavel_4d76050d83",
                            "resource_type": "image"
                        }
                    },
                    "large": {
                        "name": "large_Лях Павел.png",
                        "hash": "large_Lyah_Pavel_4d76050d83",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 837,
                        "height": 1000,
                        "size": 1241.79,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644243683/large_Lyah_Pavel_4d76050d83.png",
                        "provider_metadata": {
                            "public_id": "large_Lyah_Pavel_4d76050d83",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "name": "medium_Лях Павел.png",
                        "hash": "medium_Lyah_Pavel_4d76050d83",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 628,
                        "height": 750,
                        "size": 707.04,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644243684/medium_Lyah_Pavel_4d76050d83.png",
                        "provider_metadata": {
                            "public_id": "medium_Lyah_Pavel_4d76050d83",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "name": "small_Лях Павел.png",
                        "hash": "small_Lyah_Pavel_4d76050d83",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 418,
                        "height": 500,
                        "size": 313.34,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1644243685/small_Lyah_Pavel_4d76050d83.png",
                        "provider_metadata": {
                            "public_id": "small_Lyah_Pavel_4d76050d83",
                            "resource_type": "image"
                        }
                    }
                },
                "provider": "cloudinary",
                "related": [
                    "62012ae9693ccb0016da30c8"
                ],
                "createdAt": "2022-02-07T14:21:25.958Z",
                "updatedAt": "2022-02-07T14:21:30.042Z",
                "__v": 0,
                "id": "62012ae5693ccb0016da30c7"
            },
            "id": "62012ae9693ccb0016da30c8"
        },
        {
            "copyToKk": true,
            "programs": [
                "6151cd63ae30d553a5300ca9",
                "615235a2273c4e0e78817312",
                "6151f723c3e9875b0101b2a0",
                "61525294273c4e0e78817e0c",
                "6151f832c3e9875b0101b2d0",
                "6151ed2cc3e9875b0101af54",
                "615230a9273c4e0e78817040",
                "629f6f36a63c5d001600fd9f",
                "62bed28e5cdd98001682278f"
            ],
            "localizations": [],
            "_id": "629f745ea63c5d001600fde1",
            "name": "Тодовянская Анастасия",
            "slug": "todovyanskaya-anastasiya",
            "__v": 1,
            "locale": "ru",
            "description": "Эксперт в области аналитики инвестиционных проектов",
            "published_at": "2022-06-07T15:53:32.503Z",
            "descriptionItems": [
                {
                    "_id": "629f745ea63c5d001600fde2",
                    "item": "Практик. Эксперт",
                    "__v": 0,
                    "id": "629f745ea63c5d001600fde2"
                },
                {
                    "_id": "629f745ea63c5d001600fde3",
                    "item": "Аналитик инвестиционных проектов, финансовый менеджер, девелопмент в группе компаний (представительство западного инвестиционного холдинга)",
                    "__v": 0,
                    "id": "629f745ea63c5d001600fde3"
                },
                {
                    "_id": "629f745ea63c5d001600fde4",
                    "item": "Принимает участие в разработке и утверждении технико-экономических показателей проекта, финансовых моделей (DCF), графика реализации проекта, оценке рисков реализации проекта",
                    "__v": 0,
                    "id": "629f745ea63c5d001600fde4"
                },
                {
                    "_id": "629f745ea63c5d001600fde5",
                    "item": "Проводит анализ эффективности инвестиционных проектов (NPV, IRR, PP, PI, анализ чувствительности, сценарный анализ), актуализация финансовых моделей, бюджетирование, план-фактный анализ, управленческий учет, консолидация данных бухгалтерской отчетности, анализ финансово-хозяйственной деятельности",
                    "__v": 0,
                    "id": "629f745ea63c5d001600fde5"
                },
                {
                    "_id": "629f745ea63c5d001600fde6",
                    "item": "Подготавливает экспертные заключения, презентации аналитических отчетов",
                    "__v": 0,
                    "id": "629f745ea63c5d001600fde6"
                }
            ],
            "createdAt": "2022-06-07T15:53:02.391Z",
            "updatedAt": "2022-07-21T12:29:05.810Z",
            "portrait": {
                "_id": "629f71093521f700169deb08",
                "name": "Тодовянская Анастасия.png",
                "alternativeText": "",
                "caption": "",
                "hash": "Todovyanskaya_Anastasiya_1ff5305ef4",
                "ext": ".png",
                "mime": "image/png",
                "size": 4614.07,
                "width": 1600,
                "height": 1912,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1654616323/Todovyanskaya_Anastasiya_1ff5305ef4.png",
                "provider_metadata": {
                    "public_id": "Todovyanskaya_Anastasiya_1ff5305ef4",
                    "resource_type": "image"
                },
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_Тодовянская Анастасия.png",
                        "hash": "thumbnail_Todovyanskaya_Anastasiya_1ff5305ef4",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 131,
                        "height": 156,
                        "size": 39.44,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1654616324/thumbnail_Todovyanskaya_Anastasiya_1ff5305ef4.png",
                        "provider_metadata": {
                            "public_id": "thumbnail_Todovyanskaya_Anastasiya_1ff5305ef4",
                            "resource_type": "image"
                        }
                    },
                    "large": {
                        "name": "large_Тодовянская Анастасия.png",
                        "hash": "large_Todovyanskaya_Anastasiya_1ff5305ef4",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 837,
                        "height": 1000,
                        "size": 1382.41,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1654616326/large_Todovyanskaya_Anastasiya_1ff5305ef4.png",
                        "provider_metadata": {
                            "public_id": "large_Todovyanskaya_Anastasiya_1ff5305ef4",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "name": "medium_Тодовянская Анастасия.png",
                        "hash": "medium_Todovyanskaya_Anastasiya_1ff5305ef4",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 628,
                        "height": 750,
                        "size": 798.03,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1654616327/medium_Todovyanskaya_Anastasiya_1ff5305ef4.png",
                        "provider_metadata": {
                            "public_id": "medium_Todovyanskaya_Anastasiya_1ff5305ef4",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "name": "small_Тодовянская Анастасия.png",
                        "hash": "small_Todovyanskaya_Anastasiya_1ff5305ef4",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 418,
                        "height": 500,
                        "size": 363.73,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1654616329/small_Todovyanskaya_Anastasiya_1ff5305ef4.png",
                        "provider_metadata": {
                            "public_id": "small_Todovyanskaya_Anastasiya_1ff5305ef4",
                            "resource_type": "image"
                        }
                    }
                },
                "provider": "cloudinary",
                "related": [
                    "629f745ea63c5d001600fde1"
                ],
                "createdAt": "2022-06-07T15:38:49.714Z",
                "updatedAt": "2022-06-07T15:53:02.640Z",
                "__v": 0,
                "id": "629f71093521f700169deb08"
            },
            "id": "629f745ea63c5d001600fde1"
        },
        {
            "copyToKk": true,
            "programs": [
                "618948b12cc27e377c7b0f64",
                "6151f897c3e9875b0101b304",
                "615232c3273c4e0e788172a2",
                "61521149273c4e0e78816bf4",
                "6151e719c3e9875b0101ada4",
                "615231f9273c4e0e788171ae",
                "6151f61ac3e9875b0101b210",
                "6151f5cdc3e9875b0101b1e0",
                "61523194273c4e0e78817134",
                "61522ba3273c4e0e78816d62",
                "6151e89cc3e9875b0101ae1c",
                "61522b2c273c4e0e78816ce8",
                "6151d957d152b1001657086c",
                "61523745273c4e0e78817480",
                "6151e483c3e9875b0101acfc",
                "6152493f273c4e0e788177d6",
                "61524d4f273c4e0e788179be",
                "6151ef54c3e9875b0101b02c",
                "6151da21d152b1001657089c",
                "615237c7273c4e0e788174fa",
                "6151d5cfd152b1001657080c",
                "6152363c273c4e0e7881738c",
                "6151ee2fc3e9875b0101afb4",
                "61524c24273c4e0e788178ca",
                "61524cc2273c4e0e78817944",
                "6151eeb0c3e9875b0101affc",
                "6151ea2dc3e9875b0101aec4",
                "61522f55273c4e0e78816ed0",
                "61a0b8f1915ce600162c0dbb",
                "61522ab9273c4e0e78816c6e",
                "6151e7eec3e9875b0101adec",
                "61524e39273c4e0e78817ab2",
                "6151f053c3e9875b0101b08c",
                "6151f676c3e9875b0101b240",
                "61523256273c4e0e78817228",
                "6151f523c3e9875b0101b180",
                "615251be273c4e0e78817d18",
                "61525151273c4e0e78817c9e",
                "6151f484c3e9875b0101b150",
                "61524dcd273c4e0e78817a38",
                "6151efe1c3e9875b0101b05c",
                "6151f575c3e9875b0101b1b0",
                "6152521a273c4e0e78817d92",
                "6151f0c2c3e9875b0101b0be",
                "6151cd63ae30d553a5300ca9",
                "615235a2273c4e0e78817312",
                "6151daeed152b100165708cc",
                "61523831273c4e0e78817574",
                "6151f723c3e9875b0101b2a0",
                "61525294273c4e0e78817e0c",
                "6151e3b2c3e9875b0101ac9c",
                "61524a0a273c4e0e78817850",
                "6151e504c3e9875b0101ad44",
                "6152502c273c4e0e78817b2e",
                "6151d83cd152b1001657083c",
                "615236cf273c4e0e78817406",
                "6151e427c3e9875b0101accc",
                "6151fbb4c3e9875b0101b364",
                "61523a19273c4e0e7881775c",
                "6151f304c3e9875b0101b120",
                "615250e5273c4e0e78817c24",
                "6151f832c3e9875b0101b2d0",
                "6151e5a8c3e9875b0101ad74",
                "61520180c3e9875b0101b394",
                "6151e2a9c3e9875b0101ac54",
                "61523915273c4e0e78817668",
                "6151f279c3e9875b0101b0ee",
                "6152508c273c4e0e78817ba8",
                "6151f6cac3e9875b0101b270",
                "61522e79273c4e0e78816ddc",
                "6151ebcfc3e9875b0101aef4",
                "61522fd4273c4e0e78816f4a",
                "6151ecd3c3e9875b0101af22",
                "61523041273c4e0e78816fc4",
                "6151dba6d152b100165708fc",
                "615238af273c4e0e788175ee",
                "6151ed2cc3e9875b0101af54",
                "615230a9273c4e0e78817040",
                "6151ed92c3e9875b0101af84",
                "61523125273c4e0e788170ba"
            ],
            "localizations": [],
            "_id": "62b1e5703165690016e66b9e",
            "name": "Оксана Малервейн",
            "slug": "oksana-malervejn",
            "description": "Заместитель начальника управления «ПАО НК Роснефть». 20+ лет опыта в финансово-экономической сфере крупных корпораций",
            "locale": "ru",
            "published_at": "2022-06-21T15:39:33.357Z",
            "descriptionItems": [
                {
                    "_id": "62b1e5703165690016e66b9f",
                    "item": " Эксперт-практик ",
                    "__v": 0,
                    "id": "62b1e5703165690016e66b9f"
                },
                {
                    "_id": "62b1e5703165690016e66ba0",
                    "item": "20+ лет опыта в финансово-экономической сфере крупных корпораций",
                    "__v": 0,
                    "id": "62b1e5703165690016e66ba0"
                },
                {
                    "_id": "62b1e5703165690016e66ba1",
                    "item": "15+ лет опыта на руководящих позициях",
                    "__v": 0,
                    "id": "62b1e5703165690016e66ba1"
                },
                {
                    "_id": "62b1e5703165690016e66ba2",
                    "item": "Заместитель начальника управления «ПАО НК Роснефть» с 2013г.",
                    "__v": 0,
                    "id": "62b1e5703165690016e66ba2"
                },
                {
                    "_id": "62b1e5703165690016e66ba3",
                    "item": "Имеет аттестацию профессионального финансового директора (ИПБ РФ)",
                    "__v": 0,
                    "id": "62b1e5703165690016e66ba3"
                }
            ],
            "createdAt": "2022-06-21T15:36:16.209Z",
            "updatedAt": "2022-06-23T16:22:03.996Z",
            "__v": 1,
            "portrait": {
                "_id": "62b1e50b9b350b0016e1910e",
                "name": "Малервейн Оксана.jpeg",
                "alternativeText": "",
                "caption": "",
                "hash": "Malervejn_Oksana_b740b1a6af",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "size": 243.4,
                "width": 1600,
                "height": 1912,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1655825671/Malervejn_Oksana_b740b1a6af.jpg",
                "provider_metadata": {
                    "public_id": "Malervejn_Oksana_b740b1a6af",
                    "resource_type": "image"
                },
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_Малервейн Оксана.jpeg",
                        "hash": "thumbnail_Malervejn_Oksana_b740b1a6af",
                        "ext": ".jpeg",
                        "mime": "image/jpeg",
                        "width": 131,
                        "height": 156,
                        "size": 4.16,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1655825672/thumbnail_Malervejn_Oksana_b740b1a6af.jpg",
                        "provider_metadata": {
                            "public_id": "thumbnail_Malervejn_Oksana_b740b1a6af",
                            "resource_type": "image"
                        }
                    },
                    "large": {
                        "name": "large_Малервейн Оксана.jpeg",
                        "hash": "large_Malervejn_Oksana_b740b1a6af",
                        "ext": ".jpeg",
                        "mime": "image/jpeg",
                        "width": 837,
                        "height": 1000,
                        "size": 88.5,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1655825673/large_Malervejn_Oksana_b740b1a6af.jpg",
                        "provider_metadata": {
                            "public_id": "large_Malervejn_Oksana_b740b1a6af",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "name": "medium_Малервейн Оксана.jpeg",
                        "hash": "medium_Malervejn_Oksana_b740b1a6af",
                        "ext": ".jpeg",
                        "mime": "image/jpeg",
                        "width": 628,
                        "height": 750,
                        "size": 50.58,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1655825674/medium_Malervejn_Oksana_b740b1a6af.jpg",
                        "provider_metadata": {
                            "public_id": "medium_Malervejn_Oksana_b740b1a6af",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "name": "small_Малервейн Оксана.jpeg",
                        "hash": "small_Malervejn_Oksana_b740b1a6af",
                        "ext": ".jpeg",
                        "mime": "image/jpeg",
                        "width": 418,
                        "height": 500,
                        "size": 24.24,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1655825675/small_Malervejn_Oksana_b740b1a6af.jpg",
                        "provider_metadata": {
                            "public_id": "small_Malervejn_Oksana_b740b1a6af",
                            "resource_type": "image"
                        }
                    }
                },
                "provider": "cloudinary",
                "related": [
                    "62b1e5703165690016e66b9e"
                ],
                "createdAt": "2022-06-21T15:34:35.806Z",
                "updatedAt": "2022-06-21T15:36:16.473Z",
                "__v": 0,
                "id": "62b1e50b9b350b0016e1910e"
            },
            "id": "62b1e5703165690016e66b9e"
        },
        {
            "copyToKk": true,
            "programs": [
                "618948b12cc27e377c7b0f64",
                "6151f897c3e9875b0101b304",
                "615232c3273c4e0e788172a2",
                "61521149273c4e0e78816bf4",
                "6151e719c3e9875b0101ada4",
                "615231f9273c4e0e788171ae",
                "6151f61ac3e9875b0101b210",
                "616fc4dace68061a1b676bda",
                "6151f5cdc3e9875b0101b1e0",
                "61523194273c4e0e78817134",
                "61522ba3273c4e0e78816d62",
                "6151e89cc3e9875b0101ae1c",
                "61522b2c273c4e0e78816ce8",
                "6151d957d152b1001657086c",
                "61523745273c4e0e78817480",
                "6151e483c3e9875b0101acfc",
                "6152493f273c4e0e788177d6",
                "61524d4f273c4e0e788179be",
                "6151ef54c3e9875b0101b02c",
                "6151da21d152b1001657089c",
                "615237c7273c4e0e788174fa",
                "6151d5cfd152b1001657080c",
                "6152363c273c4e0e7881738c",
                "6151ee2fc3e9875b0101afb4",
                "61524c24273c4e0e788178ca",
                "61524cc2273c4e0e78817944",
                "6151eeb0c3e9875b0101affc",
                "6151ea2dc3e9875b0101aec4",
                "61522f55273c4e0e78816ed0",
                "61a0b8f1915ce600162c0dbb",
                "61522ab9273c4e0e78816c6e",
                "6151e7eec3e9875b0101adec",
                "61524e39273c4e0e78817ab2",
                "6151f053c3e9875b0101b08c",
                "6151f676c3e9875b0101b240",
                "61523256273c4e0e78817228",
                "6151f523c3e9875b0101b180",
                "615251be273c4e0e78817d18",
                "61525151273c4e0e78817c9e",
                "6151f484c3e9875b0101b150",
                "61524dcd273c4e0e78817a38",
                "6151efe1c3e9875b0101b05c",
                "6151f575c3e9875b0101b1b0",
                "6152521a273c4e0e78817d92",
                "6151f0c2c3e9875b0101b0be",
                "6151cd63ae30d553a5300ca9",
                "615235a2273c4e0e78817312",
                "6151daeed152b100165708cc",
                "61523831273c4e0e78817574",
                "6151f723c3e9875b0101b2a0",
                "61525294273c4e0e78817e0c",
                "6151e3b2c3e9875b0101ac9c",
                "61524a0a273c4e0e78817850",
                "6151e504c3e9875b0101ad44",
                "6152502c273c4e0e78817b2e",
                "6151d83cd152b1001657083c",
                "615236cf273c4e0e78817406",
                "6151e427c3e9875b0101accc",
                "6151fbb4c3e9875b0101b364",
                "61523a19273c4e0e7881775c",
                "6151f304c3e9875b0101b120",
                "615250e5273c4e0e78817c24",
                "6151f832c3e9875b0101b2d0",
                "6151e5a8c3e9875b0101ad74",
                "61520180c3e9875b0101b394",
                "6151e2a9c3e9875b0101ac54",
                "61523915273c4e0e78817668",
                "6151f279c3e9875b0101b0ee",
                "6152508c273c4e0e78817ba8",
                "6151f6cac3e9875b0101b270",
                "61522e79273c4e0e78816ddc",
                "6151ebcfc3e9875b0101aef4",
                "61522fd4273c4e0e78816f4a",
                "6151ecd3c3e9875b0101af22",
                "61523041273c4e0e78816fc4",
                "6151dba6d152b100165708fc",
                "615238af273c4e0e788175ee",
                "6151ed2cc3e9875b0101af54",
                "615230a9273c4e0e78817040",
                "6151ed92c3e9875b0101af84",
                "61523125273c4e0e788170ba",
                "616fc2a0ce68061a1b676b2e"
            ],
            "localizations": [],
            "_id": "62b1e7c6a7f27c00160f4b7f",
            "name": "Андрей Бельц",
            "slug": "andrej-belcz",
            "description": "Консультант в сфере финансов, банкинга, блокчейн-технологий, цифровизации. Руководящие посты в «Сбербанк», «Промсвязьбанк» и др.",
            "locale": "ru",
            "published_at": "2022-06-21T15:46:20.112Z",
            "descriptionItems": [
                {
                    "_id": "62b1e7c6a7f27c00160f4b80",
                    "item": "Частный консультант в сфере финансов, банкинга, финтеха, блокчейн-технологий, цифровизации и бережливого производства. Участвовал в разработке прикладных финансовых программных продуктов, в т.ч. с использованием блокчейн-технологий. Помогал клиентам во внедрении философии и методологии Lean в бизнес-процессы",
                    "__v": 0,
                    "id": "62b1e7c6a7f27c00160f4b80"
                },
                {
                    "_id": "62b1e7c6a7f27c00160f4b81",
                    "item": "Большой опыт управления командами методологов и разработчиков ",
                    "__v": 0,
                    "id": "62b1e7c6a7f27c00160f4b81"
                },
                {
                    "_id": "62b1e7c6a7f27c00160f4b82",
                    "item": "«Промсвязьбанк» — руководитель направления международного финансирования. Занимался диагностикой проблем, формированием концепции совершенствования процесса, автоматизацией, изменением ВНД, оценкой и управлением рисками проектов и процессов, организацией финансирования международных проектов и сделок, развитием методологии кредитования, управления рисками и совершенствованием продуктового ряда",
                    "__v": 0,
                    "id": "62b1e7c6a7f27c00160f4b82"
                },
                {
                    "_id": "62b1e7c6a7f27c00160f4b83",
                    "item": " «Банк Кузнецкий мост» — заместитель председателя правления. Руководил бизнес, операционным и IT блоками банка",
                    "__v": 0,
                    "id": "62b1e7c6a7f27c00160f4b83"
                },
                {
                    "_id": "62b1e7c6a7f27c00160f4b84",
                    "item": "«МДМ Банк» — начальник департамента кредитного анализа. Занимался развитием корпоративного кредитования в банке, формированием структуры, системы и методологии кредитного процесса, соответствующей стратегии банка в данном сегменте, организацией и контролем функционирования подразделений кредитного анализа дополнительных офисов, филиалов и центрального аппарата банка",
                    "__v": 0,
                    "id": "62b1e7c6a7f27c00160f4b84"
                },
                {
                    "_id": "62b1e7c6a7f27c00160f4b85",
                    "item": "«Сбербанк» — заместитель начальника отдела кредитования г. Москвы",
                    "__v": 0,
                    "id": "62b1e7c6a7f27c00160f4b85"
                }
            ],
            "createdAt": "2022-06-21T15:46:14.882Z",
            "updatedAt": "2022-07-07T08:49:43.904Z",
            "__v": 1,
            "portrait": {
                "_id": "62b1e6bf79aa2b0016fb7a9e",
                "name": "Бельц Андрей.png",
                "alternativeText": "",
                "caption": "",
                "hash": "Belcz_Andrej_ad0996d413",
                "ext": ".png",
                "mime": "image/png",
                "size": 6501.26,
                "width": 2290,
                "height": 2735,
                "url": "https://res.cloudinary.com/npomba/image/upload/v1655826102/Belcz_Andrej_ad0996d413.png",
                "provider_metadata": {
                    "public_id": "Belcz_Andrej_ad0996d413",
                    "resource_type": "image"
                },
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_Бельц Андрей.png",
                        "hash": "thumbnail_Belcz_Andrej_ad0996d413",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 131,
                        "height": 156,
                        "size": 32.21,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1655826104/thumbnail_Belcz_Andrej_ad0996d413.png",
                        "provider_metadata": {
                            "public_id": "thumbnail_Belcz_Andrej_ad0996d413",
                            "resource_type": "image"
                        }
                    },
                    "large": {
                        "name": "large_Бельц Андрей.png",
                        "hash": "large_Belcz_Andrej_ad0996d413",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 837,
                        "height": 1000,
                        "size": 1150.54,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1655826108/large_Belcz_Andrej_ad0996d413.png",
                        "provider_metadata": {
                            "public_id": "large_Belcz_Andrej_ad0996d413",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "name": "medium_Бельц Андрей.png",
                        "hash": "medium_Belcz_Andrej_ad0996d413",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 628,
                        "height": 750,
                        "size": 643.97,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1655826109/medium_Belcz_Andrej_ad0996d413.png",
                        "provider_metadata": {
                            "public_id": "medium_Belcz_Andrej_ad0996d413",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "name": "small_Бельц Андрей.png",
                        "hash": "small_Belcz_Andrej_ad0996d413",
                        "ext": ".png",
                        "mime": "image/png",
                        "width": 419,
                        "height": 500,
                        "size": 289.69,
                        "path": null,
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1655826110/small_Belcz_Andrej_ad0996d413.png",
                        "provider_metadata": {
                            "public_id": "small_Belcz_Andrej_ad0996d413",
                            "resource_type": "image"
                        }
                    }
                },
                "provider": "cloudinary",
                "related": [
                    "62b1e7c6a7f27c00160f4b7f"
                ],
                "createdAt": "2022-06-21T15:41:51.152Z",
                "updatedAt": "2022-06-21T15:46:15.151Z",
                "__v": 0,
                "id": "62b1e6bf79aa2b0016fb7a9e"
            },
            "id": "62b1e7c6a7f27c00160f4b7f"
        }
    ],
    "id": "6151cd63ae30d553a5300ca9"
}
