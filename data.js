var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama1",
      "name": "Panorama1",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2114451332634122,
          "pitch": -0.013232790102470915,
          "rotation": 0,
          "target": "1-panorama2"
        },
        {
          "yaw": 1.054317512779667,
          "pitch": -0.046814986206552334,
          "rotation": 0,
          "target": "3-panorama4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0769397720664742,
          "pitch": -0.26580380390051594,
          "title": "Welcome",
          "text": "This is the entrance Hall"
        }
      ]
    },
    {
      "id": "1-panorama2",
      "name": "Panorama2",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.365046665849409,
          "pitch": 0.09661784544113594,
          "rotation": 0,
          "target": "2-panorama3"
        },
        {
          "yaw": -3.0462101537184623,
          "pitch": 0.15729581626337463,
          "rotation": 0,
          "target": "0-panorama1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama3",
      "name": "Panorama3",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2967324778993348,
          "pitch": 0.09112834755054067,
          "rotation": 0,
          "target": "3-panorama4"
        },
        {
          "yaw": -3.0143790714634804,
          "pitch": 0.15392703042128453,
          "rotation": 0,
          "target": "1-panorama2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-panorama4",
      "name": "Panorama4",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.121170160840066,
          "pitch": 0.06547869838848008,
          "rotation": 0,
          "target": "2-panorama3"
        },
        {
          "yaw": 2.071762157804712,
          "pitch": -0.0762368958963826,
          "rotation": 0,
          "target": "0-panorama1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
