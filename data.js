var APP_DATA = {
  "scenes": [
    {
      "id": "0-erc_level-1_starbucks",
      "name": "ERC_Level 1_Starbucks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.3640983427661695,
        "pitch": -0.1975638804309945,
        "fov": 1.2051640687040213
      },
      "linkHotspots": [
        {
          "yaw": -0.5116122221159713,
          "pitch": -0.0777352027598539,
          "rotation": 5.497787143782138,
          "target": "1-erc_level-1_nearescalator_photo_1512"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8302088392967857,
          "pitch": 0.2819587391368241,
          "title": "Starbucks &amp; Vending Machines!",
          "text": "Quench your thirst and satiate your hunger here!"
        },
        {
          "yaw": 0.6619479254510594,
          "pitch": -0.10588514632490487,
          "title": "Study Spots",
          "text": "It can get really hot.&nbsp;"
        },
        {
          "yaw": 1.124902098586162,
          "pitch": -0.014535499853193912,
          "title": "Town Green&nbsp;",
          "text": "We see families, frisbee players, and more!"
        }
      ]
    },
    {
      "id": "1-erc_level-1_nearescalator_photo_1512",
      "name": "ERC_Level 1_NearEscalator_PHOTO_1512",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1014250702607136,
          "pitch": -0.0960280578978967,
          "rotation": 3.9269908169872414,
          "target": "0-erc_level-1_starbucks"
        },
        {
          "yaw": -2.430625785659977,
          "pitch": 0.1367934901190484,
          "rotation": 0,
          "target": "2-erc_level-1_tembusu-tree"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7966521178329824,
          "pitch": -0.09290131867730445,
          "title": "Stephen Riady Centre",
          "text": "This way ahead!"
        },
        {
          "yaw": -1.8886894400178171,
          "pitch": -0.21528628426926488,
          "title": "Mac Commons",
          "text": "Use mac computers here!"
        }
      ]
    },
    {
      "id": "2-erc_level-1_tembusu-tree",
      "name": "ERC_Level 1_Tembusu Tree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.830237840989069,
          "pitch": 0.08738243522037159,
          "rotation": 4.71238898038469,
          "target": "1-erc_level-1_nearescalator_photo_1512"
        },
        {
          "yaw": 2.6097298556537325,
          "pitch": 0.08205103001781389,
          "rotation": 4.71238898038469,
          "target": "0-erc_level-1_starbucks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0102823813352764,
          "pitch": -0.17106567976673048,
          "title": "Tree 1.",
          "text": "A tree."
        },
        {
          "yaw": -2.5120064225084455,
          "pitch": -0.13654590370304476,
          "title": "Tree 2.",
          "text": "Another tree."
        }
      ]
    }
  ],
  "name": "UTown ERC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
