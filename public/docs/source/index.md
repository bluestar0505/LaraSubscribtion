---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://subscribtion-app.ukr-dev.com/docs/collection.json)

<!-- END_INFO -->

#Subscribtions management

APIs for managing subscribtions
<!-- START_d45d8d4f761dd63c80b24157ee892212 -->
## Display subscribtions list.

> Example request:

```bash
curl -X GET -G "http://subscribtion-app.ukr-dev.com/api/subscribtions" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/subscribtions");

    let params = {
            "range": "QAlBTfBUoK5lvlvl",
            "perPage": "12",
            "filter": "o8GVhkfOW3Awjkar",
        };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "data": [
        {
            "id": 50,
            "remote_id": 197071,
            "customer": {
                "id": 50,
                "remote_id": 729053,
                "email": "kreiger.annalise@example.com",
                "phone": "1-888-264-7746",
                "name": "Rose Toy",
                "company": "Kuvalis-Schuster",
                "industry": "aggregate value-added users",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "agent": {
                "id": 1036,
                "remote_id": 56120,
                "is_active": 0,
                "name": "Prof. Jeffrey Barton V",
                "email": "angelo.hansen@example.com",
                "phone": "877-862-6052",
                "address": "31750 Gerlach Land Suite 546\nSouth Fae, WY 65252-1362",
                "bank_account_iban": "US80622940847125313837591223",
                "bank_name": "Hermiston-Bosco",
                "bank_branch": "Switchable national attitude",
                "location": "92828 Quigley Drive Suite 649\nNew Pansyburgh, IL 54866-4042",
                "commission_agreed": 44.63,
                "commission_count": 118,
                "commission_type": "flat",
                "active": "2018-10-27 14:46:30",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "subscribtion_type": 1,
            "cycles": [
                {
                    "id": 73,
                    "cycle_count": 4,
                    "subscribtion_id": 50,
                    "cycle_start": "2019-02-13 21:00:48",
                    "cycle_end": "2019-03-12 08:26:35",
                    "cycle_amount": 9400281.27,
                    "cycle_paid": 1,
                    "cycle_paid_on": "2019-03-06 21:40:41",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-09 12:25:11",
                    "cycle_cancelled": 1,
                    "cycle_cancelled_on": "2019-03-08 15:03:49",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                }
            ],
            "server": null,
            "is_paused": false,
            "is_paused_on": "1992-06-17 20:21:58",
            "is_cancelled": true,
            "is_cancelled_on": "1987-08-10 22:04:23",
            "created_at": "2019-03-09T17:02:05.000000Z"
        },
        {
            "id": 49,
            "remote_id": 784118,
            "customer": {
                "id": 49,
                "remote_id": 614151,
                "email": "tromp.austen@example.org",
                "phone": "855.521.1254",
                "name": "Alba Powlowski",
                "company": "Bauch-Hansen",
                "industry": "streamline robust technologies",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "agent": {
                "id": 1006,
                "remote_id": 841644,
                "is_active": 1,
                "name": "Prof. Willow Goyette III",
                "email": "crist.jacinthe@example.net",
                "phone": "855-777-2048",
                "address": "2631 Maddison Mission Suite 726\nLake Aileenville, MD 72125-7833",
                "bank_account_iban": "US50829312518370925049000794",
                "bank_name": "Schimmel, Raynor and Luettgen",
                "bank_branch": "Extended uniform GraphicInterface",
                "location": "64760 Effertz Green\nPort Dillon, OK 85131",
                "commission_agreed": 97.49,
                "commission_count": 46,
                "commission_type": "percentage",
                "active": "1987-04-08 04:20:06",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "subscribtion_type": 2,
            "cycles": [
                {
                    "id": 16,
                    "cycle_count": 1,
                    "subscribtion_id": 49,
                    "cycle_start": "2019-02-16 11:44:22",
                    "cycle_end": "2019-03-14 00:42:05",
                    "cycle_amount": 31470.31,
                    "cycle_paid": 1,
                    "cycle_paid_on": "2019-03-07 07:09:27",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-08 13:09:50",
                    "cycle_cancelled": 1,
                    "cycle_cancelled_on": "2019-03-07 07:02:22",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 23,
                    "cycle_count": 6,
                    "subscribtion_id": 49,
                    "cycle_start": "2019-02-10 01:35:33",
                    "cycle_end": "2019-03-12 15:52:31",
                    "cycle_amount": 1.41,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-07 20:25:28",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-08 07:00:26",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-08 06:24:53",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 63,
                    "cycle_count": 1,
                    "subscribtion_id": 49,
                    "cycle_start": "2019-02-14 15:13:47",
                    "cycle_end": "2019-03-12 02:44:40",
                    "cycle_amount": 35146.91,
                    "cycle_paid": 1,
                    "cycle_paid_on": "2019-03-09 14:24:41",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-08 13:44:59",
                    "cycle_cancelled": 1,
                    "cycle_cancelled_on": "2019-03-07 00:25:23",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                }
            ],
            "server": {
                "id": 38,
                "subscribtion_id": 49,
                "location": "Port Cara, Sweden",
                "size": "4 SSD, 9 RAM, 6 CPU",
                "image": "Magic xpa Application Platform",
                "snapshot": "0a1546b53ced9d5e1fe625014c7c748e444bff10-some.img",
                "domain": "gaylord.com",
                "ip": "206.58.76.248",
                "is_active": 1,
                "created_at": "2019-03-09 17:02:05",
                "updated_at": "2019-03-09 17:02:05"
            },
            "is_paused": false,
            "is_paused_on": "2014-03-30 12:41:45",
            "is_cancelled": true,
            "is_cancelled_on": "1996-01-27 22:52:52",
            "created_at": "2019-03-09T17:02:05.000000Z"
        },
        {
            "id": 48,
            "remote_id": 364543,
            "customer": {
                "id": 48,
                "remote_id": 959363,
                "email": "ashleigh93@example.net",
                "phone": "888.544.6395",
                "name": "Kaci Volkman",
                "company": "Langworth-Nitzsche",
                "industry": "aggregate end-to-end solutions",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "agent": {
                "id": 995,
                "remote_id": 506100,
                "is_active": 1,
                "name": "Ana Connelly",
                "email": "fstoltenberg@example.com",
                "phone": "800.502.4331",
                "address": "162 Colleen Mills Suite 674\nLittleside, WA 73380",
                "bank_account_iban": "US03919930579954978012750581",
                "bank_name": "Legros, Rempel and Schmeler",
                "bank_branch": "Multi-channelled optimal toolset",
                "location": "83078 Willms Lodge\nLake Rebecatown, CT 05953",
                "commission_agreed": 58.33,
                "commission_count": 136,
                "commission_type": "percentage",
                "active": "1977-08-30 11:18:07",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "subscribtion_type": 1,
            "cycles": [
                {
                    "id": 60,
                    "cycle_count": 2,
                    "subscribtion_id": 48,
                    "cycle_start": "2019-02-20 12:37:11",
                    "cycle_end": "2019-03-14 04:36:35",
                    "cycle_amount": 57764.08,
                    "cycle_paid": 1,
                    "cycle_paid_on": "2019-03-07 10:26:10",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-08 23:16:59",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-07 08:52:02",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 135,
                    "cycle_count": 5,
                    "subscribtion_id": 48,
                    "cycle_start": "2019-02-17 19:58:34",
                    "cycle_end": "2019-03-11 13:30:39",
                    "cycle_amount": 4225350.83,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-06 23:10:04",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-08 03:35:12",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-08 16:44:22",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 142,
                    "cycle_count": 2,
                    "subscribtion_id": 48,
                    "cycle_start": "2019-02-07 19:24:51",
                    "cycle_end": "2019-03-17 03:42:14",
                    "cycle_amount": 16090112.73,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-09 05:38:08",
                    "cycle_ended": 1,
                    "cycle_ended_on": "2019-03-08 02:49:50",
                    "cycle_cancelled": 1,
                    "cycle_cancelled_on": "2019-03-07 02:52:23",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                }
            ],
            "server": {
                "id": 12,
                "subscribtion_id": 48,
                "location": "Amiemouth, Venezuela",
                "size": "6 SSD, 6 RAM, 9 CPU",
                "image": "TIBCO Service Grid",
                "snapshot": "436a2913d3dbc8b759e68577d9c2fa6962128020-some.img",
                "domain": "aufderhar.com",
                "ip": "84.240.207.73",
                "is_active": 1,
                "created_at": "2019-03-09 17:02:05",
                "updated_at": "2019-03-09 17:02:05"
            },
            "is_paused": false,
            "is_paused_on": "2006-01-30 01:30:43",
            "is_cancelled": false,
            "is_cancelled_on": "1987-07-13 03:13:58",
            "created_at": "2019-03-09T17:02:05.000000Z"
        },
        {
            "id": 47,
            "remote_id": 908938,
            "customer": {
                "id": 47,
                "remote_id": 35946,
                "email": "aabernathy@example.net",
                "phone": "866-510-7189",
                "name": "Norene Schowalter",
                "company": "Feil-Borer",
                "industry": "synthesize back-end initiatives",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "agent": {
                "id": 958,
                "remote_id": 556330,
                "is_active": 1,
                "name": "Ms. Carlee Doyle Jr.",
                "email": "yost.alta@example.com",
                "phone": "(855) 506-7811",
                "address": "150 Sydni Glens\nWest Alvenafurt, NH 78376-5234",
                "bank_account_iban": "US35264949732981984436867853",
                "bank_name": "Mraz, Rolfson and King",
                "bank_branch": "Right-sized tertiary archive",
                "location": "9877 Walsh Plaza Suite 781\nSouth Duane, OH 60985-4945",
                "commission_agreed": 30.64,
                "commission_count": 160,
                "commission_type": "flat",
                "active": "2007-04-08 17:01:09",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "subscribtion_type": 1,
            "cycles": [
                {
                    "id": 137,
                    "cycle_count": 3,
                    "subscribtion_id": 47,
                    "cycle_start": "2019-02-14 02:29:05",
                    "cycle_end": "2019-03-12 22:49:26",
                    "cycle_amount": 0.58,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-07 18:03:13",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-09 09:12:55",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-07 03:31:48",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 140,
                    "cycle_count": 5,
                    "subscribtion_id": 47,
                    "cycle_start": "2019-02-23 16:28:33",
                    "cycle_end": "2019-03-10 05:45:20",
                    "cycle_amount": 30256356.1,
                    "cycle_paid": 1,
                    "cycle_paid_on": "2019-03-08 23:20:47",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-09 06:23:16",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-07 03:51:12",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                }
            ],
            "server": {
                "id": 6,
                "subscribtion_id": 47,
                "location": "Port Henriette, Martinique",
                "size": "2 SSD, 2 RAM, 7 CPU",
                "image": "SAP NetWeaver Application Server",
                "snapshot": "f85550adf44886fc30f6beb115aa378f8988fb40-some.img",
                "domain": "herzog.biz",
                "ip": "94.198.8.45",
                "is_active": 1,
                "created_at": "2019-03-09 17:02:05",
                "updated_at": "2019-03-09 17:02:05"
            },
            "is_paused": false,
            "is_paused_on": "2014-07-27 08:03:04",
            "is_cancelled": true,
            "is_cancelled_on": "2001-01-20 17:50:59",
            "created_at": "2019-03-09T17:02:05.000000Z"
        },
        {
            "id": 46,
            "remote_id": 596626,
            "customer": {
                "id": 46,
                "remote_id": 776540,
                "email": "aliya77@example.net",
                "phone": "(877) 465-5545",
                "name": "Obie Hermann",
                "company": "Kuhlman, Walter and Wiza",
                "industry": "drive vertical mindshare",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "agent": {
                "id": 954,
                "remote_id": 881898,
                "is_active": 0,
                "name": "Bernadine McCullough",
                "email": "robb.collier@example.org",
                "phone": "888.557.6928",
                "address": "853 Margarette Brooks\nPort Lorenzo, HI 44709-3041",
                "bank_account_iban": "US08394633985921449985685674",
                "bank_name": "O'Conner-Blanda",
                "bank_branch": "Ameliorated assymetric budgetarymanagement",
                "location": "7906 Stroman Mill\nLarsonfort, RI 72264",
                "commission_agreed": 34.59,
                "commission_count": 38,
                "commission_type": "percentage",
                "active": "2008-08-23 03:22:39",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "subscribtion_type": 1,
            "cycles": [
                {
                    "id": 2,
                    "cycle_count": 3,
                    "subscribtion_id": 46,
                    "cycle_start": "2019-02-24 19:56:17",
                    "cycle_end": "2019-03-18 02:23:09",
                    "cycle_amount": 185526.42,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-08 00:27:20",
                    "cycle_ended": 1,
                    "cycle_ended_on": "2019-03-08 22:37:35",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-09 00:29:02",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 115,
                    "cycle_count": 5,
                    "subscribtion_id": 46,
                    "cycle_start": "2019-03-04 00:57:14",
                    "cycle_end": "2019-03-07 09:56:47",
                    "cycle_amount": 213.79,
                    "cycle_paid": 1,
                    "cycle_paid_on": "2019-03-08 16:41:46",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-08 17:31:47",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-09 07:10:51",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 133,
                    "cycle_count": 3,
                    "subscribtion_id": 46,
                    "cycle_start": "2019-02-09 14:12:52",
                    "cycle_end": "2019-03-08 09:35:31",
                    "cycle_amount": 394967.31,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-08 05:22:26",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-06 22:20:31",
                    "cycle_cancelled": 1,
                    "cycle_cancelled_on": "2019-03-08 02:59:33",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                }
            ],
            "server": {
                "id": 39,
                "subscribtion_id": 46,
                "location": "Port Josephfurt, Micronesia",
                "size": "2 SSD, 5 RAM, 3 CPU",
                "image": "Apache Tomcat",
                "snapshot": "3480e330f97027080320b6b255d6349f37b95e27-some.img",
                "domain": "mcglynn.com",
                "ip": "43.238.84.236",
                "is_active": 1,
                "created_at": "2019-03-09 17:02:05",
                "updated_at": "2019-03-09 17:02:05"
            },
            "is_paused": true,
            "is_paused_on": "1992-05-09 15:31:01",
            "is_cancelled": false,
            "is_cancelled_on": "1994-03-07 00:13:17",
            "created_at": "2019-03-09T17:02:05.000000Z"
        },
        {
            "id": 45,
            "remote_id": 133816,
            "customer": {
                "id": 45,
                "remote_id": 931188,
                "email": "tad.bruen@example.net",
                "phone": "(844) 777-9442",
                "name": "Loy Orn",
                "company": "Emard Ltd",
                "industry": "scale B2C architectures",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "agent": {
                "id": 933,
                "remote_id": 629841,
                "is_active": 1,
                "name": "Emmett Rodriguez",
                "email": "emmitt68@example.net",
                "phone": "866.904.4228",
                "address": "8341 Johnnie Estates\nJanelleville, CT 70678",
                "bank_account_iban": "US95336906388039435550313917",
                "bank_name": "Kuhn, Nienow and Brakus",
                "bank_branch": "Stand-alone national challenge",
                "location": "45207 Javon Mount Apt. 637\nUniqueside, OH 64397-6879",
                "commission_agreed": 54.72,
                "commission_count": 72,
                "commission_type": "flat",
                "active": "1980-09-12 10:17:47",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "subscribtion_type": 1,
            "cycles": [
                {
                    "id": 12,
                    "cycle_count": 2,
                    "subscribtion_id": 45,
                    "cycle_start": "2019-02-10 09:25:26",
                    "cycle_end": "2019-03-13 00:15:37",
                    "cycle_amount": 701706.04,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-09 03:43:01",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-07 08:26:00",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-09 16:34:09",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 46,
                    "cycle_count": 2,
                    "subscribtion_id": 45,
                    "cycle_start": "2019-02-26 19:38:06",
                    "cycle_end": "2019-03-14 21:34:35",
                    "cycle_amount": 13784.27,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-09 16:14:04",
                    "cycle_ended": 1,
                    "cycle_ended_on": "2019-03-07 09:30:00",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-09 06:15:12",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 104,
                    "cycle_count": 5,
                    "subscribtion_id": 45,
                    "cycle_start": "2019-02-20 17:27:54",
                    "cycle_end": "2019-03-14 08:40:11",
                    "cycle_amount": 0.66,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-07 15:27:53",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-07 05:45:34",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-09 02:41:46",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 125,
                    "cycle_count": 8,
                    "subscribtion_id": 45,
                    "cycle_start": "2019-02-12 17:50:35",
                    "cycle_end": "2019-03-14 21:45:31",
                    "cycle_amount": 509.64,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-07 12:59:44",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-09 03:44:48",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-07 21:06:04",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 132,
                    "cycle_count": 8,
                    "subscribtion_id": 45,
                    "cycle_start": "2019-02-21 04:54:03",
                    "cycle_end": "2019-03-19 03:22:21",
                    "cycle_amount": 451359.81,
                    "cycle_paid": 1,
                    "cycle_paid_on": "2019-03-07 07:40:38",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-09 12:23:32",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-09 16:06:39",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                }
            ],
            "server": {
                "id": 22,
                "subscribtion_id": 45,
                "location": "Zulaufport, El Salvador",
                "size": "8 SSD, 8 RAM, 4 CPU",
                "image": "Oracle WebLogic Application Server",
                "snapshot": "58ec93710ed88a705b137dfdd944d591a1c56687-some.img",
                "domain": "huel.org",
                "ip": "194.145.59.197",
                "is_active": 1,
                "created_at": "2019-03-09 17:02:05",
                "updated_at": "2019-03-09 17:02:05"
            },
            "is_paused": true,
            "is_paused_on": "1971-10-04 20:56:10",
            "is_cancelled": false,
            "is_cancelled_on": "2006-08-31 05:55:41",
            "created_at": "2019-03-09T17:02:05.000000Z"
        },
        {
            "id": 44,
            "remote_id": 714551,
            "customer": {
                "id": 44,
                "remote_id": 141187,
                "email": "buckridge.evie@example.org",
                "phone": "(855) 650-8041",
                "name": "Andy Kunde",
                "company": "Boyer-Erdman",
                "industry": "orchestrate impactful technologies",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "agent": {
                "id": 912,
                "remote_id": 766441,
                "is_active": 0,
                "name": "Shayne Langosh",
                "email": "alvena.howell@example.com",
                "phone": "855.671.2313",
                "address": "63708 Tillman Trace Suite 598\nNew Santiagoville, WA 38925-8093",
                "bank_account_iban": "US37100900135496214819670464",
                "bank_name": "Hoeger, Buckridge and Grimes",
                "bank_branch": "Assimilated 5thgeneration function",
                "location": "85876 Huels Expressway\nPort Obiestad, WA 83222",
                "commission_agreed": 22.07,
                "commission_count": 25,
                "commission_type": "percentage",
                "active": "1994-01-04 04:33:51",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "subscribtion_type": 1,
            "cycles": [
                {
                    "id": 134,
                    "cycle_count": 6,
                    "subscribtion_id": 44,
                    "cycle_start": "2019-02-26 01:33:04",
                    "cycle_end": "2019-03-19 15:33:07",
                    "cycle_amount": 1953868.36,
                    "cycle_paid": 1,
                    "cycle_paid_on": "2019-03-08 22:45:55",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-08 12:36:00",
                    "cycle_cancelled": 1,
                    "cycle_cancelled_on": "2019-03-08 01:18:51",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                }
            ],
            "server": null,
            "is_paused": true,
            "is_paused_on": "1992-05-11 14:59:15",
            "is_cancelled": false,
            "is_cancelled_on": "1985-06-02 18:23:19",
            "created_at": "2019-03-09T17:02:05.000000Z"
        },
        {
            "id": 43,
            "remote_id": 214352,
            "customer": {
                "id": 43,
                "remote_id": 707125,
                "email": "nikita52@example.org",
                "phone": "844.676.7083",
                "name": "Dr. Margarett Glover Sr.",
                "company": "Zulauf-Rohan",
                "industry": "incubate one-to-one communities",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "agent": {
                "id": 891,
                "remote_id": 609029,
                "is_active": 0,
                "name": "Marco Tromp",
                "email": "lonnie.strosin@example.com",
                "phone": "844-636-5517",
                "address": "370 Cornelius Canyon Suite 043\nLutherfort, ME 19435-2267",
                "bank_account_iban": "US51901485554103532029913610",
                "bank_name": "Tillman-Frami",
                "bank_branch": "Future-proofed motivating portal",
                "location": "50511 Verna Gardens\nDouglaston, ID 47544",
                "commission_agreed": 32.86,
                "commission_count": 67,
                "commission_type": "percentage",
                "active": "1972-01-27 11:06:08",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "subscribtion_type": 1,
            "cycles": [
                {
                    "id": 20,
                    "cycle_count": 5,
                    "subscribtion_id": 43,
                    "cycle_start": "2019-02-17 20:32:23",
                    "cycle_end": "2019-03-18 15:48:44",
                    "cycle_amount": 2.15,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-07 08:57:40",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-07 10:15:59",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-09 07:01:27",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 26,
                    "cycle_count": 8,
                    "subscribtion_id": 43,
                    "cycle_start": "2019-02-24 07:44:09",
                    "cycle_end": "2019-03-11 21:36:57",
                    "cycle_amount": 1.5,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-07 12:31:27",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-07 19:37:06",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-08 20:02:36",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 100,
                    "cycle_count": 6,
                    "subscribtion_id": 43,
                    "cycle_start": "2019-02-18 08:27:42",
                    "cycle_end": "2019-03-12 01:21:39",
                    "cycle_amount": 16.38,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-08 16:58:55",
                    "cycle_ended": 1,
                    "cycle_ended_on": "2019-03-07 08:38:42",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-09 11:03:11",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                }
            ],
            "server": {
                "id": 20,
                "subscribtion_id": 43,
                "location": "Ianstad, Anguilla",
                "size": "9 SSD, 5 RAM, 9 CPU",
                "image": "Red Hat JBoss Enterprise Application Platform",
                "snapshot": "39c4dc32f94f05df1491ec9327bd50733348dc26-some.img",
                "domain": "vandervort.org",
                "ip": "3.113.113.103",
                "is_active": 0,
                "created_at": "2019-03-09 17:02:05",
                "updated_at": "2019-03-09 17:02:05"
            },
            "is_paused": true,
            "is_paused_on": "1997-07-24 18:59:08",
            "is_cancelled": true,
            "is_cancelled_on": "2001-03-23 20:30:35",
            "created_at": "2019-03-09T17:02:05.000000Z"
        },
        {
            "id": 42,
            "remote_id": 159293,
            "customer": {
                "id": 42,
                "remote_id": 36400,
                "email": "horace.skiles@example.com",
                "phone": "1-888-975-4739",
                "name": "Dr. Emmanuelle Yost",
                "company": "Roob Inc",
                "industry": "generate customized initiatives",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "agent": {
                "id": 858,
                "remote_id": 75573,
                "is_active": 1,
                "name": "Miss Cordie Pfeffer",
                "email": "krutherford@example.net",
                "phone": "1-855-397-0688",
                "address": "895 Balistreri Cape\nErickaside, MI 15395",
                "bank_account_iban": "US43600055982941500071919749",
                "bank_name": "Lueilwitz, Williamson and Sanford",
                "bank_branch": "Realigned full-range core",
                "location": "4239 Clementina Street Suite 942\nWest Jasenborough, TX 76762-2052",
                "commission_agreed": 41.4,
                "commission_count": 52,
                "commission_type": "percentage",
                "active": "1981-05-08 22:46:44",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "subscribtion_type": 2,
            "cycles": [
                {
                    "id": 53,
                    "cycle_count": 1,
                    "subscribtion_id": 42,
                    "cycle_start": "2019-02-24 15:58:44",
                    "cycle_end": "2019-03-10 04:46:31",
                    "cycle_amount": 1095743.63,
                    "cycle_paid": 1,
                    "cycle_paid_on": "2019-03-08 20:25:28",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-07 09:14:07",
                    "cycle_cancelled": 1,
                    "cycle_cancelled_on": "2019-03-09 15:26:23",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 86,
                    "cycle_count": 8,
                    "subscribtion_id": 42,
                    "cycle_start": "2019-02-17 01:11:09",
                    "cycle_end": "2019-03-11 20:01:14",
                    "cycle_amount": 2638134.48,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-06 17:37:37",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-07 03:53:11",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-07 18:41:12",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                }
            ],
            "server": {
                "id": 10,
                "subscribtion_id": 42,
                "location": "McCulloughville, Antigua and Barbuda",
                "size": "6 SSD, 6 RAM, 8 CPU",
                "image": "Apache Tomcat",
                "snapshot": "069727c47c82a1f27d74009afaf1f2829824a8ab-some.img",
                "domain": "shields.com",
                "ip": "60.185.25.231",
                "is_active": 1,
                "created_at": "2019-03-09 17:02:05",
                "updated_at": "2019-03-09 17:02:05"
            },
            "is_paused": true,
            "is_paused_on": "1970-07-30 16:03:56",
            "is_cancelled": true,
            "is_cancelled_on": "1986-06-26 13:13:08",
            "created_at": "2019-03-09T17:02:05.000000Z"
        },
        {
            "id": 41,
            "remote_id": 31448,
            "customer": {
                "id": 41,
                "remote_id": 779771,
                "email": "houston26@example.com",
                "phone": "1-877-552-4293",
                "name": "Dr. Anya Shields",
                "company": "Boyle Ltd",
                "industry": "brand seamless architectures",
                "created_at": "2019-03-09 17:02:04",
                "updated_at": "2019-03-09 17:02:04"
            },
            "agent": {
                "id": 845,
                "remote_id": 320616,
                "is_active": 1,
                "name": "Kiana Ankunding II",
                "email": "jacquelyn67@example.com",
                "phone": "877.329.7603",
                "address": "63049 Lind Corners Suite 562\nLinwoodchester, WV 92368-4324",
                "bank_account_iban": "US58403977550222030491976659",
                "bank_name": "Hodkiewicz-Blanda",
                "bank_branch": "Fundamental 5thgeneration knowledgeuser",
                "location": "3947 Jadyn Point\nEast Jed, ID 02979-8817",
                "commission_agreed": 31.19,
                "commission_count": 145,
                "commission_type": "percentage",
                "active": "1989-11-21 21:22:14",
                "created_at": "2019-03-09 17:02:03",
                "updated_at": "2019-03-09 17:02:03"
            },
            "subscribtion_type": 1,
            "cycles": [
                {
                    "id": 9,
                    "cycle_count": 6,
                    "subscribtion_id": 41,
                    "cycle_start": "2019-02-23 18:05:19",
                    "cycle_end": "2019-03-13 05:42:23",
                    "cycle_amount": 19169805.1,
                    "cycle_paid": 1,
                    "cycle_paid_on": "2019-03-06 23:02:04",
                    "cycle_ended": 1,
                    "cycle_ended_on": "2019-03-07 00:14:15",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-08 15:36:05",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                }
            ],
            "server": {
                "id": 9,
                "subscribtion_id": 41,
                "location": "Port Laury, Papua New Guinea",
                "size": "9 SSD, 8 RAM, 1 CPU",
                "image": "Microsoft Application Server",
                "snapshot": "55779be949a47e475b3231832b080ee0153dcb61-some.img",
                "domain": "feeney.org",
                "ip": "254.162.77.55",
                "is_active": 0,
                "created_at": "2019-03-09 17:02:05",
                "updated_at": "2019-03-09 17:02:05"
            },
            "is_paused": false,
            "is_paused_on": "1998-05-14 17:24:37",
            "is_cancelled": true,
            "is_cancelled_on": "2007-08-19 19:38:32",
            "created_at": "2019-03-09T17:02:05.000000Z"
        },
        {
            "id": 40,
            "remote_id": 788402,
            "customer": {
                "id": 40,
                "remote_id": 747736,
                "email": "triston.streich@example.net",
                "phone": "877-825-2569",
                "name": "Adrien Koss",
                "company": "Purdy-Heller",
                "industry": "leverage cross-platform functionalities",
                "created_at": "2019-03-09 17:02:03",
                "updated_at": "2019-03-09 17:02:03"
            },
            "agent": {
                "id": 830,
                "remote_id": 656385,
                "is_active": 1,
                "name": "Gino Heidenreich Sr.",
                "email": "harber.dangelo@example.net",
                "phone": "(877) 358-0709",
                "address": "96017 Uriel Parks\nLake Maximoside, AZ 18808",
                "bank_account_iban": "US15053291381893318674492344",
                "bank_name": "Gusikowski-Leffler",
                "bank_branch": "Compatible interactive data-warehouse",
                "location": "6981 Jason Locks\nLake Travonburgh, CO 77673",
                "commission_agreed": 73.24,
                "commission_count": 187,
                "commission_type": "flat",
                "active": "2012-05-01 00:53:03",
                "created_at": "2019-03-09 17:02:03",
                "updated_at": "2019-03-09 17:02:03"
            },
            "subscribtion_type": 1,
            "cycles": [
                {
                    "id": 8,
                    "cycle_count": 6,
                    "subscribtion_id": 40,
                    "cycle_start": "2019-03-06 03:20:30",
                    "cycle_end": "2019-03-17 02:25:41",
                    "cycle_amount": 596.63,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-08 21:27:16",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-06 17:27:57",
                    "cycle_cancelled": 1,
                    "cycle_cancelled_on": "2019-03-07 05:10:16",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 42,
                    "cycle_count": 2,
                    "subscribtion_id": 40,
                    "cycle_start": "2019-02-11 07:32:17",
                    "cycle_end": "2019-03-16 12:50:47",
                    "cycle_amount": 2.2,
                    "cycle_paid": 1,
                    "cycle_paid_on": "2019-03-08 05:56:28",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-09 05:04:39",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-09 07:30:58",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 61,
                    "cycle_count": 9,
                    "subscribtion_id": 40,
                    "cycle_start": "2019-02-14 07:16:00",
                    "cycle_end": "2019-03-12 03:59:37",
                    "cycle_amount": 1237.21,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-07 18:09:18",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-08 20:09:16",
                    "cycle_cancelled": 1,
                    "cycle_cancelled_on": "2019-03-07 23:40:43",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 84,
                    "cycle_count": 8,
                    "subscribtion_id": 40,
                    "cycle_start": "2019-02-15 20:21:27",
                    "cycle_end": "2019-03-08 23:34:11",
                    "cycle_amount": 1325.65,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-07 09:35:59",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-08 07:40:42",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-09 09:09:30",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                },
                {
                    "id": 136,
                    "cycle_count": 7,
                    "subscribtion_id": 40,
                    "cycle_start": "2019-02-26 17:12:18",
                    "cycle_end": "2019-03-10 23:37:27",
                    "cycle_amount": 3.06,
                    "cycle_paid": 1,
                    "cycle_paid_on": "2019-03-07 18:32:00",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-08 09:40:32",
                    "cycle_cancelled": 0,
                    "cycle_cancelled_on": "2019-03-08 14:32:24",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                }
            ],
            "server": {
                "id": 14,
                "subscribtion_id": 40,
                "location": "South Lilashire, Belarus",
                "size": "3 SSD, 2 RAM, 5 CPU",
                "image": "SAP NetWeaver Application Server",
                "snapshot": "6d9ae47edc114e4d911c1222f2b358af064871af-some.img",
                "domain": "ebert.com",
                "ip": "102.34.171.91",
                "is_active": 1,
                "created_at": "2019-03-09 17:02:05",
                "updated_at": "2019-03-09 17:02:05"
            },
            "is_paused": false,
            "is_paused_on": "2009-10-06 18:20:43",
            "is_cancelled": true,
            "is_cancelled_on": "2010-02-20 22:55:06",
            "created_at": "2019-03-09T17:02:05.000000Z"
        },
        {
            "id": 39,
            "remote_id": 659930,
            "customer": {
                "id": 39,
                "remote_id": 690587,
                "email": "vboyle@example.org",
                "phone": "800.988.8518",
                "name": "Kelvin Kuhn",
                "company": "Stanton, Quigley and Okuneva",
                "industry": "aggregate revolutionary metrics",
                "created_at": "2019-03-09 17:02:03",
                "updated_at": "2019-03-09 17:02:03"
            },
            "agent": {
                "id": 792,
                "remote_id": 573849,
                "is_active": 0,
                "name": "Arnoldo Fahey II",
                "email": "crist.antonette@example.com",
                "phone": "844.245.3186",
                "address": "755 Bergnaum Parkways Apt. 757\nLake Aubree, AR 18538-0901",
                "bank_account_iban": "US82372014271507587334629148",
                "bank_name": "Schiller and Sons",
                "bank_branch": "Multi-tiered 6thgeneration solution",
                "location": "63410 Borer Ford\nPurdybury, MN 34979",
                "commission_agreed": 51.77,
                "commission_count": 91,
                "commission_type": "flat",
                "active": "2004-05-14 22:43:43",
                "created_at": "2019-03-09 17:02:03",
                "updated_at": "2019-03-09 17:02:03"
            },
            "subscribtion_type": 1,
            "cycles": [
                {
                    "id": 50,
                    "cycle_count": 1,
                    "subscribtion_id": 39,
                    "cycle_start": "2019-02-18 04:19:51",
                    "cycle_end": "2019-03-16 09:07:03",
                    "cycle_amount": 62166626.79,
                    "cycle_paid": 0,
                    "cycle_paid_on": "2019-03-07 10:26:51",
                    "cycle_ended": 0,
                    "cycle_ended_on": "2019-03-08 04:29:26",
                    "cycle_cancelled": 1,
                    "cycle_cancelled_on": "2019-03-07 08:03:15",
                    "created_at": "2019-03-09 17:02:05",
                    "updated_at": "2019-03-09 17:02:05"
                }
            ],
            "server": {
                "id": 4,
                "subscribtion_id": 39,
                "location": "Lake Dorrisville, Guadeloupe",
                "size": "6 SSD, 8 RAM, 2 CPU",
                "image": "WebSphere Application Server",
                "snapshot": "91b630a63cdf212f1ad565f349689d7c1064d7bb-some.img",
                "domain": "pacocha.com",
                "ip": "59.118.27.193",
                "is_active": 1,
                "created_at": "2019-03-09 17:02:05",
                "updated_at": "2019-03-09 17:02:05"
            },
            "is_paused": false,
            "is_paused_on": "1971-10-27 16:28:45",
            "is_cancelled": false,
            "is_cancelled_on": "2010-09-01 18:46:38",
            "created_at": "2019-03-09T17:02:05.000000Z"
        }
    ]
}
```

### HTTP Request
`GET api/subscribtions`

#### Query Parameters

Parameter | Status | Description
--------- | ------- | ------- | -----------
    range |  optional  | Range of results
    perPage |  optional  | Records per page for pagination results
    filter |  optional  | Filter records (must look like ['q', '<string for filter by>'])

<!-- END_d45d8d4f761dd63c80b24157ee892212 -->

<!-- START_c6d2b99786294f69ad6564024f5be6e2 -->
## Get list of subscription types (used for create/edit forms).

> Example request:

```bash
curl -X GET -G "http://subscribtion-app.ukr-dev.com/api/subscribtions/get-types" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/subscribtions/get-types");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
[
    {
        "id": 1,
        "name": "Monthly"
    },
    {
        "id": 2,
        "name": "Yearly"
    }
]
```

### HTTP Request
`GET api/subscribtions/get-types`


<!-- END_c6d2b99786294f69ad6564024f5be6e2 -->

<!-- START_e4703d910948e78c15d23a781e7328ed -->
## Get servers data (used for create/edit forms).

> Example request:

```bash
curl -X GET -G "http://subscribtion-app.ukr-dev.com/api/subscribtions/get-servers" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/subscribtions/get-servers");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "servers": [
        {
            "id": 1,
            "name": "5 SSD, 1 RAM, 5 CPU"
        },
        {
            "id": 2,
            "name": "3 SSD, 3 RAM, 8 CPU"
        },
        {
            "id": 3,
            "name": "1 SSD, 9 RAM, 2 CPU"
        },
        {
            "id": 4,
            "name": "6 SSD, 8 RAM, 2 CPU"
        },
        {
            "id": 5,
            "name": "1 SSD, 6 RAM, 3 CPU"
        },
        {
            "id": 6,
            "name": "2 SSD, 2 RAM, 7 CPU"
        },
        {
            "id": 7,
            "name": "3 SSD, 8 RAM, 4 CPU"
        },
        {
            "id": 8,
            "name": "1 SSD, 2 RAM, 1 CPU"
        },
        {
            "id": 9,
            "name": "9 SSD, 8 RAM, 1 CPU"
        },
        {
            "id": 10,
            "name": "6 SSD, 6 RAM, 8 CPU"
        },
        {
            "id": 11,
            "name": "8 SSD, 7 RAM, 3 CPU"
        },
        {
            "id": 12,
            "name": "6 SSD, 6 RAM, 9 CPU"
        },
        {
            "id": 13,
            "name": "4 SSD, 1 RAM, 3 CPU"
        },
        {
            "id": 14,
            "name": "3 SSD, 2 RAM, 5 CPU"
        },
        {
            "id": 15,
            "name": "5 SSD, 2 RAM, 7 CPU"
        },
        {
            "id": 16,
            "name": "4 SSD, 6 RAM, 7 CPU"
        },
        {
            "id": 17,
            "name": "4 SSD, 4 RAM, 6 CPU"
        },
        {
            "id": 18,
            "name": "6 SSD, 8 RAM, 8 CPU"
        },
        {
            "id": 19,
            "name": "7 SSD, 5 RAM, 3 CPU"
        },
        {
            "id": 20,
            "name": "9 SSD, 5 RAM, 9 CPU"
        },
        {
            "id": 21,
            "name": "9 SSD, 3 RAM, 7 CPU"
        },
        {
            "id": 22,
            "name": "8 SSD, 8 RAM, 4 CPU"
        },
        {
            "id": 23,
            "name": "2 SSD, 8 RAM, 3 CPU"
        },
        {
            "id": 24,
            "name": "8 SSD, 9 RAM, 1 CPU"
        },
        {
            "id": 25,
            "name": "7 SSD, 3 RAM, 1 CPU"
        },
        {
            "id": 26,
            "name": "3 SSD, 7 RAM, 6 CPU"
        },
        {
            "id": 27,
            "name": "4 SSD, 9 RAM, 3 CPU"
        },
        {
            "id": 28,
            "name": "6 SSD, 3 RAM, 5 CPU"
        },
        {
            "id": 29,
            "name": "9 SSD, 8 RAM, 5 CPU"
        },
        {
            "id": 30,
            "name": "3 SSD, 4 RAM, 7 CPU"
        },
        {
            "id": 31,
            "name": "1 SSD, 8 RAM, 1 CPU"
        },
        {
            "id": 32,
            "name": "9 SSD, 7 RAM, 1 CPU"
        },
        {
            "id": 33,
            "name": "5 SSD, 3 RAM, 1 CPU"
        },
        {
            "id": 35,
            "name": "8 SSD, 8 RAM, 1 CPU"
        },
        {
            "id": 36,
            "name": "2 SSD, 9 RAM, 2 CPU"
        },
        {
            "id": 37,
            "name": "6 SSD, 3 RAM, 7 CPU"
        },
        {
            "id": 38,
            "name": "4 SSD, 9 RAM, 6 CPU"
        },
        {
            "id": 39,
            "name": "2 SSD, 5 RAM, 3 CPU"
        },
        {
            "id": 40,
            "name": "8 SSD, 4 RAM, 9 CPU"
        },
        {
            "id": 41,
            "name": "6 SSD, 1 RAM, 5 CPU"
        },
        {
            "id": 42,
            "name": "6 SSD, 5 RAM, 6 CPU"
        },
        {
            "id": 43,
            "name": "6 SSD, 5 RAM, 9 CPU"
        },
        {
            "id": 44,
            "name": "5 SSD, 8 RAM, 8 CPU"
        },
        {
            "id": 45,
            "name": "3 SSD, 7 RAM, 3 CPU"
        },
        {
            "id": 46,
            "name": "8 SSD, 3 RAM, 7 CPU"
        },
        {
            "id": 47,
            "name": "5 SSD, 2 RAM, 2 CPU"
        },
        {
            "id": 48,
            "name": "5 SSD, 9 RAM, 5 CPU"
        },
        {
            "id": 49,
            "name": "9 SSD, 4 RAM, 5 CPU"
        },
        {
            "id": 50,
            "name": "8 SSD, 7 RAM, 7 CPU"
        }
    ],
    "applications": [
        {
            "id": 1,
            "name": "Oracle WebLogic Application Server"
        },
        {
            "id": 2,
            "name": "Apache Tomcat"
        },
        {
            "id": 3,
            "name": "Oracle GlassFish Server"
        },
        {
            "id": 4,
            "name": "WebSphere Application Server"
        },
        {
            "id": 5,
            "name": "Magic xpa Application Platform"
        },
        {
            "id": 6,
            "name": "SAP NetWeaver Application Server"
        },
        {
            "id": 7,
            "name": "Microsoft Application Server"
        },
        {
            "id": 8,
            "name": "Microsoft IIS"
        },
        {
            "id": 12,
            "name": "TIBCO Service Grid"
        },
        {
            "id": 13,
            "name": "Red Hat JBoss Enterprise Application Platform"
        }
    ]
}
```

### HTTP Request
`GET api/subscribtions/get-servers`


<!-- END_e4703d910948e78c15d23a781e7328ed -->

<!-- START_b70de5b34d8226405a893a6e5e473c70 -->
## Store a newly created subscirption.

> Example request:

```bash
curl -X POST "http://subscribtion-app.ukr-dev.com/api/subscribtions" \
    -H "Authorization: Bearer {token}" \
    -H "Content-Type: application/json" \
    -d '{"remote_id":2,"customer":{},"agent":{},"subscribtion_type":20,"server":[]}'

```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/subscribtions");

let headers = {
    "Authorization": "Bearer {token}",
    "Content-Type": "application/json",
    "Accept": "application/json",
}

let body = {
    "remote_id": 2,
    "customer": {},
    "agent": {},
    "subscribtion_type": 20,
    "server": []
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (202):

```json
{
    "error": "Error message"
}
```

### HTTP Request
`POST api/subscribtions`

#### Body Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    remote_id | integer |  optional  | (not sure about this)
    customer | object |  required  | Object of data that represents customer object (see Customer APIs) or if should be used registered customer must look like { 'use_registered': true, 'id': 123 } where id is customer id.
    agent | object |  optional  | Object of data that represents agent object (see Agent APIs). If should be registered without agent must look like { 'dont_use': true } or using agent that already registered -- { 'use_registered': true, 'id': 123 } where id is agent id
    subscribtion_type | integer |  required  | Id of subscribtion type
    server | array |  required  | Server data

<!-- END_b70de5b34d8226405a893a6e5e473c70 -->

<!-- START_8393152f97ecd39dc9444846166f2624 -->
## Get subscription data for edit.

> Example request:

```bash
curl -X GET -G "http://subscribtion-app.ukr-dev.com/api/subscribtions/{id}" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/subscribtions/{id}");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "data": {
        "id": 1,
        "remote_id": 208456,
        "customer": {
            "id": 1,
            "remote_id": 302392,
            "email": "bernhard95@example.com",
            "phone": "800-277-2348",
            "name": "Susan Emard",
            "company": "Wilderman-Wuckert",
            "industry": "enhance cutting-edge eyeballs",
            "created_at": "2019-03-09 17:02:00",
            "updated_at": "2019-03-09 17:02:00"
        },
        "agent": {
            "id": 21,
            "remote_id": 561651,
            "is_active": 1,
            "name": "Eleanore Feil Jr.",
            "email": "omer66@example.net",
            "phone": "800-646-1883",
            "address": "4012 Tyrese Springs\nNew Tavares, DC 30384-5118",
            "bank_account_iban": "US08638683868552355928569287",
            "bank_name": "Cruickshank-Schiller",
            "bank_branch": "Diverse interactive projection",
            "location": "487 Pagac Hill Apt. 169\nNew Robinmouth, NJ 70073",
            "commission_agreed": 94.4,
            "commission_count": 191,
            "commission_type": "percentage",
            "active": "2005-09-06 04:02:54",
            "created_at": "2019-03-09 17:02:00",
            "updated_at": "2019-03-09 17:02:00"
        },
        "subscribtion_type": 2,
        "cycles": [
            {
                "id": 35,
                "cycle_count": 6,
                "subscribtion_id": 1,
                "cycle_start": "2019-02-10 23:23:21",
                "cycle_end": "2019-03-18 08:57:34",
                "cycle_amount": 5054541.21,
                "cycle_paid": 0,
                "cycle_paid_on": "2019-03-09 11:34:39",
                "cycle_ended": 0,
                "cycle_ended_on": "2019-03-07 02:23:17",
                "cycle_cancelled": 0,
                "cycle_cancelled_on": "2019-03-07 18:22:49",
                "created_at": "2019-03-09 17:02:05",
                "updated_at": "2019-03-09 17:02:05"
            },
            {
                "id": 148,
                "cycle_count": 2,
                "subscribtion_id": 1,
                "cycle_start": "2019-02-17 21:58:17",
                "cycle_end": "2019-03-12 06:44:37",
                "cycle_amount": 5208.93,
                "cycle_paid": 0,
                "cycle_paid_on": "2019-03-07 12:05:54",
                "cycle_ended": 0,
                "cycle_ended_on": "2019-03-09 15:14:06",
                "cycle_cancelled": 0,
                "cycle_cancelled_on": "2019-03-06 17:56:14",
                "created_at": "2019-03-09 17:02:05",
                "updated_at": "2019-03-09 17:02:05"
            }
        ],
        "server": {
            "id": 23,
            "subscribtion_id": 1,
            "location": "New Jacynthefort, Myanmar",
            "size": "2 SSD, 8 RAM, 3 CPU",
            "image": "Oracle GlassFish Server",
            "snapshot": "458919ff4332bc77c398645642b6ae0a0f6bd149-some.img",
            "domain": "homenick.com",
            "ip": "52.123.223.197",
            "is_active": 0,
            "created_at": "2019-03-09 17:02:05",
            "updated_at": "2019-03-09 17:02:05"
        },
        "is_paused": true,
        "is_paused_on": "2008-02-06 01:36:20",
        "is_cancelled": false,
        "is_cancelled_on": "1988-10-18 07:56:41",
        "created_at": "2019-03-09T17:02:04.000000Z"
    }
}
```

### HTTP Request
`GET api/subscribtions/{id}`


<!-- END_8393152f97ecd39dc9444846166f2624 -->

<!-- START_a36159cd22abfd316985eeaaf39c1d17 -->
## Update the specified subscription in storage.

> Example request:

```bash
curl -X PUT "http://subscribtion-app.ukr-dev.com/api/subscribtions/{id}" \
    -H "Authorization: Bearer {token}" \
    -H "Content-Type: application/json" \
    -d '{"remote_id":12,"is_cancelled":false,"is_cancelled_on":"4DS5GlzsM34mivt7","is_paused":false,"is_paused_on":"x8ZSVtjHYoc79UU5","server":{},"subscribtion_type":5}'

```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/subscribtions/{id}");

let headers = {
    "Authorization": "Bearer {token}",
    "Content-Type": "application/json",
    "Accept": "application/json",
}

let body = {
    "remote_id": 12,
    "is_cancelled": false,
    "is_cancelled_on": "4DS5GlzsM34mivt7",
    "is_paused": false,
    "is_paused_on": "x8ZSVtjHYoc79UU5",
    "server": {},
    "subscribtion_type": 5
}

fetch(url, {
    method: "PUT",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (202):

```json
{
    "error": "Error message"
}
```

### HTTP Request
`PUT api/subscribtions/{id}`

#### Body Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    remote_id | integer |  optional  | (not sure about this)
    is_cancelled | boolean |  required  | Cancelled status of subscription
    is_cancelled_on | date |  optional  | Date & time of cancellation (if not set will be used current date & time)
    is_paused | boolean |  required  | Paused status of description
    is_paused_on | date |  optional  | Date & time of cancellation (if not set will be used current date & time)
    server | object |  required  | Object that contains application and server size info (not sure about this)
    subscribtion_type | integer |  required  | Id of subscribtion type

<!-- END_a36159cd22abfd316985eeaaf39c1d17 -->

<!-- START_83c4b707ff6171351b6009f4aece3867 -->
## Remove the specified subscription from storage.

> Example request:

```bash
curl -X DELETE "http://subscribtion-app.ukr-dev.com/api/subscribtions/{id}" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/subscribtions/{id}");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`DELETE api/subscribtions/{id}`


<!-- END_83c4b707ff6171351b6009f4aece3867 -->

#general
<!-- START_2e1c96dcffcfe7e0eb58d6408f1d619e -->
## Register application user

> Example request:

```bash
curl -X POST "http://subscribtion-app.ukr-dev.com/api/auth/register" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/auth/register");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/auth/register`


<!-- END_2e1c96dcffcfe7e0eb58d6408f1d619e -->

<!-- START_a925a8d22b3615f12fca79456d286859 -->
## Authenticate application user

> Example request:

```bash
curl -X POST "http://subscribtion-app.ukr-dev.com/api/auth/login" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/auth/login");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/auth/login`


<!-- END_a925a8d22b3615f12fca79456d286859 -->

<!-- START_19ff1b6f8ce19d3c444e9b518e8f7160 -->
## Clean auth

> Example request:

```bash
curl -X POST "http://subscribtion-app.ukr-dev.com/api/auth/logout" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/auth/logout");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/auth/logout`


<!-- END_19ff1b6f8ce19d3c444e9b518e8f7160 -->

<!-- START_96ed66d9e6531df9b49e02d84ca5a619 -->
## Display a listing of the resource.

Header 'Content-Range' & 'X-Total-Count' needed for frontend

> Example request:

```bash
curl -X GET -G "http://subscribtion-app.ukr-dev.com/api/customers" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/customers");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "data": [
        {
            "id": 50,
            "remote_id": 729053,
            "email": "kreiger.annalise@example.com",
            "phone": "1-888-264-7746",
            "name": "Rose Toy",
            "company": "Kuvalis-Schuster",
            "industry": "aggregate value-added users",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 49,
            "remote_id": 614151,
            "email": "tromp.austen@example.org",
            "phone": "855.521.1254",
            "name": "Alba Powlowski",
            "company": "Bauch-Hansen",
            "industry": "streamline robust technologies",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 48,
            "remote_id": 959363,
            "email": "ashleigh93@example.net",
            "phone": "888.544.6395",
            "name": "Kaci Volkman",
            "company": "Langworth-Nitzsche",
            "industry": "aggregate end-to-end solutions",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 47,
            "remote_id": 35946,
            "email": "aabernathy@example.net",
            "phone": "866-510-7189",
            "name": "Norene Schowalter",
            "company": "Feil-Borer",
            "industry": "synthesize back-end initiatives",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 46,
            "remote_id": 776540,
            "email": "aliya77@example.net",
            "phone": "(877) 465-5545",
            "name": "Obie Hermann",
            "company": "Kuhlman, Walter and Wiza",
            "industry": "drive vertical mindshare",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 45,
            "remote_id": 931188,
            "email": "tad.bruen@example.net",
            "phone": "(844) 777-9442",
            "name": "Loy Orn",
            "company": "Emard Ltd",
            "industry": "scale B2C architectures",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 44,
            "remote_id": 141187,
            "email": "buckridge.evie@example.org",
            "phone": "(855) 650-8041",
            "name": "Andy Kunde",
            "company": "Boyer-Erdman",
            "industry": "orchestrate impactful technologies",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 43,
            "remote_id": 707125,
            "email": "nikita52@example.org",
            "phone": "844.676.7083",
            "name": "Dr. Margarett Glover Sr.",
            "company": "Zulauf-Rohan",
            "industry": "incubate one-to-one communities",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 42,
            "remote_id": 36400,
            "email": "horace.skiles@example.com",
            "phone": "1-888-975-4739",
            "name": "Dr. Emmanuelle Yost",
            "company": "Roob Inc",
            "industry": "generate customized initiatives",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 41,
            "remote_id": 779771,
            "email": "houston26@example.com",
            "phone": "1-877-552-4293",
            "name": "Dr. Anya Shields",
            "company": "Boyle Ltd",
            "industry": "brand seamless architectures",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        }
    ]
}
```

### HTTP Request
`GET api/customers`


<!-- END_96ed66d9e6531df9b49e02d84ca5a619 -->

<!-- START_089467e7ea475fb2aca445b2d23f6e7d -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://subscribtion-app.ukr-dev.com/api/customers" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/customers");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/customers`


<!-- END_089467e7ea475fb2aca445b2d23f6e7d -->

<!-- START_df0ee2ad0f05a9ea850f32c99b9ae55b -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://subscribtion-app.ukr-dev.com/api/customers/{id}" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/customers/{id}");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "data": {
        "id": 1,
        "remote_id": 302392,
        "email": "bernhard95@example.com",
        "phone": "800-277-2348",
        "name": "Susan Emard",
        "company": "Wilderman-Wuckert",
        "industry": "enhance cutting-edge eyeballs",
        "created_at": "2019-03-09T17:02:00.000000Z",
        "updated_at": "2019-03-09T17:02:00.000000Z"
    }
}
```

### HTTP Request
`GET api/customers/{id}`


<!-- END_df0ee2ad0f05a9ea850f32c99b9ae55b -->

<!-- START_ffefe8b85f5fc6ba93d2ecac6ee0bd5d -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://subscribtion-app.ukr-dev.com/api/customers/{id}" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/customers/{id}");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`PUT api/customers/{id}`


<!-- END_ffefe8b85f5fc6ba93d2ecac6ee0bd5d -->

<!-- START_51bba078e57d0365b7520982d6fcacae -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://subscribtion-app.ukr-dev.com/api/customers/{id}" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/customers/{id}");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`DELETE api/customers/{id}`


<!-- END_51bba078e57d0365b7520982d6fcacae -->

<!-- START_a6940a027f75b1f34ef2856fc16fface -->
## Display a listing of the resource.

Header 'Content-Range' & 'X-Total-Count' needed for frontend

> Example request:

```bash
curl -X GET -G "http://subscribtion-app.ukr-dev.com/api/agents" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/agents");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "data": [
        {
            "id": 1036,
            "remote_id": 56120,
            "name": "Prof. Jeffrey Barton V",
            "is_active": 0,
            "email": "angelo.hansen@example.com",
            "phone": "877-862-6052",
            "address": "31750 Gerlach Land Suite 546\nSouth Fae, WY 65252-1362",
            "bank_account_iban": "US80622940847125313837591223",
            "bank_name": "Hermiston-Bosco",
            "bank_branch": "Switchable national attitude",
            "location": "92828 Quigley Drive Suite 649\nNew Pansyburgh, IL 54866-4042",
            "commission_type": "flat",
            "commission_agreed": 44.63,
            "commission_count": 118,
            "active": "2018-10-27 14:46:30",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 1035,
            "remote_id": 262193,
            "name": "Gus Spinka",
            "is_active": 0,
            "email": "nwintheiser@example.org",
            "phone": "1-877-870-2238",
            "address": "8341 Heller Grove\nSouth Lessiestad, AK 26596",
            "bank_account_iban": "US90700053095043827718741095",
            "bank_name": "Conroy-Bailey",
            "bank_branch": "Vision-oriented uniform securedline",
            "location": "45663 Beahan View Apt. 778\nHildashire, CT 47107-1265",
            "commission_type": "percentage",
            "commission_agreed": 49.54,
            "commission_count": 135,
            "active": "2018-08-06 20:47:36",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 1034,
            "remote_id": 103301,
            "name": "Anastasia Dietrich",
            "is_active": 0,
            "email": "cummings.jadon@example.com",
            "phone": "(877) 234-9424",
            "address": "242 Kuvalis Flat Apt. 497\nWeberchester, KY 17580-2689",
            "bank_account_iban": "US74914104050689996429025696",
            "bank_name": "Fritsch and Sons",
            "bank_branch": "Future-proofed assymetric workforce",
            "location": "159 Christiansen Tunnel\nWest Katrineton, WV 44329",
            "commission_type": "percentage",
            "commission_agreed": 11.18,
            "commission_count": 169,
            "active": "1990-12-06 02:37:26",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 1033,
            "remote_id": 520583,
            "name": "Dr. Cyril Brekke",
            "is_active": 0,
            "email": "jasper58@example.net",
            "phone": "888-513-2214",
            "address": "1992 Grimes Locks\nDietrichview, GA 52577-6699",
            "bank_account_iban": "US85200838676749890556845284",
            "bank_name": "Jast, Larson and Ernser",
            "bank_branch": "Phased didactic capability",
            "location": "385 Klocko Common\nEffiefurt, FL 27410-6121",
            "commission_type": "flat",
            "commission_agreed": 50.03,
            "commission_count": 187,
            "active": "1978-02-16 21:45:17",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 1032,
            "remote_id": 52293,
            "name": "Tyree Boyer",
            "is_active": 1,
            "email": "marques.rutherford@example.org",
            "phone": "(800) 654-4700",
            "address": "838 Brady Path\nSouth Jarrodtown, FL 11894",
            "bank_account_iban": "US38409156000602898825809228",
            "bank_name": "Daniel, Cronin and Kuhlman",
            "bank_branch": "Synchronised reciprocal array",
            "location": "2445 Alison Unions Apt. 367\nEbonyport, KS 21484",
            "commission_type": "flat",
            "commission_agreed": 55.4,
            "commission_count": 79,
            "active": "1997-10-27 23:08:39",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 1031,
            "remote_id": 372674,
            "name": "Alford Robel DVM",
            "is_active": 0,
            "email": "vdietrich@example.com",
            "phone": "(866) 264-3576",
            "address": "16050 Aylin Summit\nAltheashire, AK 83308",
            "bank_account_iban": "US69866542681500875766845015",
            "bank_name": "Beatty, Jaskolski and Predovic",
            "bank_branch": "Re-engineered full-range matrices",
            "location": "150 Cartwright Court\nSouth Emmett, IN 88778-9441",
            "commission_type": "percentage",
            "commission_agreed": 21.23,
            "commission_count": 79,
            "active": "2011-03-12 08:55:54",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 1030,
            "remote_id": 847949,
            "name": "Yoshiko Graham Jr.",
            "is_active": 0,
            "email": "connelly.antonietta@example.org",
            "phone": "855.346.3360",
            "address": "47011 Gerhold Divide Suite 832\nNorth Tyriquestad, NC 23062-2142",
            "bank_account_iban": "US19052314861450625872340212",
            "bank_name": "Boyle Group",
            "bank_branch": "Adaptive dynamic implementation",
            "location": "12809 Chaya Locks\nRaynortown, CO 14590-9139",
            "commission_type": "percentage",
            "commission_agreed": 89.79,
            "commission_count": 60,
            "active": "1996-06-17 03:01:28",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 1029,
            "remote_id": 981788,
            "name": "Afton Jerde",
            "is_active": 0,
            "email": "marks.mona@example.org",
            "phone": "1-877-661-5165",
            "address": "82691 Lauren Knoll Suite 553\nNorth Lea, WI 56610-0966",
            "bank_account_iban": "US15336351814550883426540560",
            "bank_name": "Hand, Mueller and Collier",
            "bank_branch": "Virtual web-enabled conglomeration",
            "location": "287 Purdy Land Apt. 945\nKayceeview, NV 18585",
            "commission_type": "flat",
            "commission_agreed": 69.57,
            "commission_count": 32,
            "active": "1997-09-06 08:35:39",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 1028,
            "remote_id": 920689,
            "name": "Alanis O'Kon",
            "is_active": 1,
            "email": "joshuah.jenkins@example.com",
            "phone": "(855) 359-5140",
            "address": "5340 Kohler Inlet Suite 597\nBayerberg, OH 55272-9004",
            "bank_account_iban": "US26371737298084068498272026",
            "bank_name": "Carroll, Bayer and Hermann",
            "bank_branch": "Cross-group fault-tolerant function",
            "location": "320 Dare Lock Apt. 975\nNorth Johnpaulton, VA 40299-6316",
            "commission_type": "flat",
            "commission_agreed": 84.36,
            "commission_count": 61,
            "active": "1979-04-02 08:50:21",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        },
        {
            "id": 1027,
            "remote_id": 180335,
            "name": "Dr. Scotty Goldner V",
            "is_active": 1,
            "email": "myriam.rowe@example.net",
            "phone": "1-844-730-5913",
            "address": "77475 Wiegand Estate Apt. 478\nEllismouth, TN 98084-3225",
            "bank_account_iban": "US16280635211569655644910893",
            "bank_name": "Pagac-Marquardt",
            "bank_branch": "Expanded foreground knowledgebase",
            "location": "77825 Braun Junction Apt. 294\nNew Edison, LA 23302-6485",
            "commission_type": "percentage",
            "commission_agreed": 35.72,
            "commission_count": 45,
            "active": "2008-06-13 02:34:05",
            "created_at": "2019-03-09T17:02:04.000000Z",
            "updated_at": "2019-03-09T17:02:04.000000Z"
        }
    ]
}
```

### HTTP Request
`GET api/agents`


<!-- END_a6940a027f75b1f34ef2856fc16fface -->

<!-- START_26a8b83ed418ba79307bb7e9688c16d0 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://subscribtion-app.ukr-dev.com/api/agents" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/agents");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/agents`


<!-- END_26a8b83ed418ba79307bb7e9688c16d0 -->

<!-- START_78a8aa73e74d1e758e5798faf4cbf4bb -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://subscribtion-app.ukr-dev.com/api/agents/{id}" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/agents/{id}");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "data": {
        "id": 1,
        "remote_id": 404974,
        "name": "Prof. Verona Altenwerth",
        "is_active": 0,
        "email": "sanford.fausto@example.net",
        "phone": "877-756-4388",
        "address": "1806 Koepp Terrace\nEast Kaiaside, MA 85558",
        "bank_account_iban": "US33622203666081784859640244",
        "bank_name": "Morar LLC",
        "bank_branch": "Monitored 4thgeneration implementation",
        "location": "8124 Hintz Hills\nEast Jaunitafurt, OK 25414",
        "commission_type": "flat",
        "commission_agreed": 45.74,
        "commission_count": 175,
        "active": "1971-07-08 23:02:12",
        "created_at": "2019-03-09T17:01:59.000000Z",
        "updated_at": "2019-03-09T17:01:59.000000Z"
    }
}
```

### HTTP Request
`GET api/agents/{id}`


<!-- END_78a8aa73e74d1e758e5798faf4cbf4bb -->

<!-- START_cf071e03432c618eb7270e0036533c18 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://subscribtion-app.ukr-dev.com/api/agents/{id}" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/agents/{id}");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`PUT api/agents/{id}`


<!-- END_cf071e03432c618eb7270e0036533c18 -->

<!-- START_c478dd4584c553914cc961d58029ce78 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://subscribtion-app.ukr-dev.com/api/agents/{id}" \
    -H "Authorization: Bearer {token}"
```

```javascript
const url = new URL("http://subscribtion-app.ukr-dev.com/api/agents/{id}");

let headers = {
    "Authorization": "Bearer {token}",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`DELETE api/agents/{id}`


<!-- END_c478dd4584c553914cc961d58029ce78 -->


