TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_22215630_2CA2_75D8_41B6_914D2401C355",
       "yaw": 71.67,
       "distance": 1,
       "backwardYaw": -10.24
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D",
          "yaw": 161.77,
          "distance": 1,
          "backwardYaw": -166.28
         }
        ],
        "hfov": 360,
        "id": "panorama_2221294A_2CA2_5E48_4195_64C97D57842B",
        "class": "Panorama",
        "pitch": 0,
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_2221294A_2CA2_5E48_4195_64C97D57842B_t.jpg",
        "cardboardMenu": {
         "rollOverBackgroundColor": "#000000",
         "fontFamily": "Arial",
         "rollOverFontColor": "#FFFFFF",
         "selectedFontColor": "#FFFFFF",
         "label": "Media",
         "backgroundColor": "#404040",
         "fontColor": "#FFFFFF",
         "opacity": 0.4,
         "id": "Menu_3F7ED779_2CA5_B24B_41C5_7614AC9B3938",
         "selectedBackgroundColor": "#202020",
         "rollOverOpacity": 0.8,
         "class": "Menu",
         "children": [
          {
           "class": "MenuItem",
           "label": "20230125_124123_881",
           "click": "this.mainPlayList.set('selectedIndex', 0)"
          },
          {
           "class": "MenuItem",
           "label": "20230125_123026_487",
           "click": "this.mainPlayList.set('selectedIndex', 1)"
          },
          {
           "class": "MenuItem",
           "label": "20230125_123942_665",
           "click": "this.mainPlayList.set('selectedIndex', 2)"
          },
          {
           "class": "MenuItem",
           "label": "20230125_124020_522",
           "click": "this.mainPlayList.set('selectedIndex', 3)"
          }
         ]
        },
        "label": "20230125_124020_522",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_2221294A_2CA2_5E48_4195_64C97D57842B_t.jpg",
          "overlays": [
           {
            "id": "overlay_3D225979_2CAE_DE48_41BB_6526AA00825F",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.44,
              "yaw": 161.77,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 115,
                 "width": 40,
                 "url": "media/panorama_2221294A_2CA2_5E48_4195_64C97D57842B_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -9.45
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "toolTip": "Recep\u00e7ao",
              "click": "this.startPanoramaWithCamera(this.panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D, this.camera_3F67D7A8_2CA5_B2C8_41B9_42E33EC06425); this.mainPlayList.set('selectedIndex', 2)",
              "displayTooltipInTouchScreens": true,
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 161.77,
              "hfov": 4.44,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 231,
                 "width": 80,
                 "url": "media/panorama_2221294A_2CA2_5E48_4195_64C97D57842B_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -9.45
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_2221294A_2CA2_5E48_4195_64C97D57842B_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_2221294A_2CA2_5E48_4195_64C97D57842B.jpeg"
            }
           ]
          }
         }
        ],
        "partial": false,
        "hfovMax": 120,
        "vfov": 180
       },
       "yaw": -166.28,
       "distance": 1,
       "backwardYaw": 161.77
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D",
          "yaw": 86,
          "distance": 1,
          "backwardYaw": -90.1
         }
        ],
        "hfov": 360,
        "id": "panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8",
        "class": "Panorama",
        "pitch": 0,
        "hfovMin": 87,
        "thumbnailUrl": "media/panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8_t.jpg",
        "cardboardMenu": "this.Menu_3F7ED779_2CA5_B24B_41C5_7614AC9B3938",
        "label": "20230125_123026_487",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8_t.jpg",
          "overlays": [
           {
            "id": "overlay_3DCE7209_2CA3_ADC8_41BB_77C320C22742",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.5,
              "yaw": 86,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 115,
                 "width": 40,
                 "url": "media/panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -0.03
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "toolTip": "Recpe\u00e7ao",
              "click": "this.startPanoramaWithCamera(this.panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D, this.camera_3F54D7C7_2CA5_B247_4181_DD0FA1DFEE9A); this.mainPlayList.set('selectedIndex', 2)",
              "displayTooltipInTouchScreens": true,
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 86,
              "hfov": 4.5,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 231,
                 "width": 80,
                 "url": "media/panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -0.03
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8.jpeg"
            }
           ]
          }
         }
        ],
        "partial": false,
        "hfovMax": 120,
        "vfov": 180
       },
       "yaw": -90.1,
       "distance": 1,
       "backwardYaw": 86
      }
     ],
     "hfov": 360,
     "id": "panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D",
     "class": "Panorama",
     "pitch": 0,
     "hfovMin": 109,
     "thumbnailUrl": "media/panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D_t.jpg",
     "cardboardMenu": "this.Menu_3F7ED779_2CA5_B24B_41C5_7614AC9B3938",
     "label": "20230125_123942_665",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D_t.jpg",
       "overlays": [
        {
         "id": "overlay_3DA34A60_2CAF_D278_41AC_AE203DDFA4FB",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.32,
           "yaw": -166.28,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 115,
              "width": 40,
              "url": "media/panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -16.41
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "toolTip": "Sala de Espera",
           "click": "this.startPanoramaWithCamera(this.panorama_2221294A_2CA2_5E48_4195_64C97D57842B, this.camera_38BFB7F6_2CA5_B259_41BC_4D6F0B16D4A5); this.mainPlayList.set('selectedIndex', 3)",
           "displayTooltipInTouchScreens": true,
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -166.28,
           "hfov": 4.32,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 231,
              "width": 80,
              "url": "media/panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -16.41
          }
         ]
        },
        {
         "id": "overlay_3D4B28D1_2CAE_5E5B_41BA_F658F777AC36",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.41,
           "yaw": -90.1,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 115,
              "width": 40,
              "url": "media/panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -11.5
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "toolTip": "Sal\u00e3o",
           "click": "this.startPanoramaWithCamera(this.panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8, this.camera_38AE7816_2CA5_BDD8_41AF_8319DE731F20); this.mainPlayList.set('selectedIndex', 1)",
           "displayTooltipInTouchScreens": true,
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -90.1,
           "hfov": 4.41,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 231,
              "width": 80,
              "url": "media/panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -11.5
          }
         ]
        },
        {
         "id": "overlay_3D642E9A_2CA2_52C8_41A4_F4A4607727FB",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.45,
           "yaw": 71.67,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 115,
              "width": 40,
              "url": "media/panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -8.63
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "toolTip": "Sair",
           "click": "this.startPanoramaWithCamera(this.panorama_22215630_2CA2_75D8_41B6_914D2401C355, this.camera_3F4A97E7_2CA5_B278_41B1_A606454B3B80); this.mainPlayList.set('selectedIndex', 0)",
           "displayTooltipInTouchScreens": true,
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 71.67,
           "hfov": 4.45,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 231,
              "width": 80,
              "url": "media/panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -8.63
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D.jpeg"
         }
        ]
       }
      }
     ],
     "partial": false,
     "hfovMax": 120,
     "vfov": 180
    },
    "yaw": -10.24,
    "distance": 1,
    "backwardYaw": 71.67
   }
  ],
  "hfov": 360,
  "id": "panorama_22215630_2CA2_75D8_41B6_914D2401C355",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 120,
  "thumbnailUrl": "media/panorama_22215630_2CA2_75D8_41B6_914D2401C355_t.jpg",
  "cardboardMenu": "this.Menu_3F7ED779_2CA5_B24B_41C5_7614AC9B3938",
  "label": "20230125_124123_881",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_22215630_2CA2_75D8_41B6_914D2401C355_t.jpg",
    "overlays": [
     {
      "id": "overlay_3DCA2F39_2CA2_53CB_41B2_6EFF28211566",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.49,
        "yaw": -10.24,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 115,
           "width": 40,
           "url": "media/panorama_22215630_2CA2_75D8_41B6_914D2401C355_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 2.84
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "toolTip": "Recep\u00e7\u00e3o",
        "click": "this.startPanoramaWithCamera(this.panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D, this.camera_3F71A799_2CA5_B2C8_41B7_C9C773040E44); this.mainPlayList.set('selectedIndex', 2)",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -10.24,
        "hfov": 4.49,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 231,
           "width": 80,
           "url": "media/panorama_22215630_2CA2_75D8_41B6_914D2401C355_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 2.84
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_22215630_2CA2_75D8_41B6_914D2401C355_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_22215630_2CA2_75D8_41B6_914D2401C355.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "hfovMax": 140,
  "vfov": 180
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "id": "panorama_22215630_2CA2_75D8_41B6_914D2401C355_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 140,
   "yaw": -2.31,
   "pitch": 4.04
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360,
     "easing": "linear",
     "yawSpeed": 3.19
    }
   ]
  },
  "manualRotationSpeed": 10,
  "automaticZoomSpeed": 10
 },
 "this.panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8",
 {
  "id": "panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 52.07,
   "pitch": 0.96
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D",
 {
  "id": "panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_2221294A_2CA2_5E48_4195_64C97D57842B",
 {
  "id": "panorama_2221294A_2CA2_5E48_4195_64C97D57842B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -133.36,
   "pitch": 0.71
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_22215630_2CA2_75D8_41B6_914D2401C355_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_22215630_2CA2_75D8_41B6_914D2401C355",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "camera": "this.panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "camera": "this.panorama_2221294A_2CA2_5E48_4195_64C97D57842B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2221294A_2CA2_5E48_4195_64C97D57842B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_3F12476A_2CA5_B248_41B8_211C808FDDD0",
  "items": [
   {
    "camera": "this.panorama_22215630_2CA2_75D8_41B6_914D2401C355_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_22215630_2CA2_75D8_41B6_914D2401C355",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_3F12476A_2CA5_B248_41B8_211C808FDDD0, 0, 1)"
   },
   {
    "camera": "this.panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3C80BC13_2CBD_D5D8_4179_89F3F2CF5AE8",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_3F12476A_2CA5_B248_41B8_211C808FDDD0, 1, 2)"
   },
   {
    "camera": "this.panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_222153C1_2CA2_52B8_41C2_A1DB5E96E89D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_3F12476A_2CA5_B248_41B8_211C808FDDD0, 2, 3)"
   },
   {
    "camera": "this.panorama_2221294A_2CA2_5E48_4195_64C97D57842B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2221294A_2CA2_5E48_4195_64C97D57842B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_3F12476A_2CA5_B248_41B8_211C808FDDD0, 3, 0)"
   }
  ]
 },
 "this.Menu_3F7ED779_2CA5_B24B_41C5_7614AC9B3938",
 {
  "id": "camera_3F71A799_2CA5_B2C8_41B7_C9C773040E44",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -108.33,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_3F67D7A8_2CA5_B2C8_41B9_42E33EC06425",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.72,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_3F54D7C7_2CA5_B247_4181_DD0FA1DFEE9A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.9,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_3F4A97E7_2CA5_B278_41B1_A606454B3B80",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 140,
   "yaw": 169.76,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360,
     "easing": "linear",
     "yawSpeed": 3.19
    }
   ]
  },
  "manualRotationSpeed": 10,
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_38BFB7F6_2CA5_B259_41BC_4D6F0B16D4A5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -18.23,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_38AE7816_2CA5_BDD8_41AF_8319DE731F20",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "progressBarBorderSize": 0,
  "shadow": false,
  "playbackBarProgressBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "borderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "transitionMode": "blending",
  "toolTipFontWeight": "normal",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipBorderRadius": 3,
  "progressLeft": 0,
  "playbackBarHeadWidth": 6,
  "toolTipBorderSize": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "progressRight": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowOpacity": 1,
  "toolTipPaddingBottom": 4,
  "minHeight": 50,
  "paddingLeft": 0,
  "progressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarLeft": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowColor": "#333333",
  "borderSize": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "minWidth": 100,
  "toolTipPaddingTop": 4,
  "progressBarOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "width": "100%",
  "toolTipBorderColor": "#767676",
  "playbackBarBottom": 5,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingRight": 6,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "progressBorderRadius": 0,
  "progressHeight": 10,
  "progressBorderColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarRight": 0,
  "playbackBarHeadShadowColor": "#000000",
  "paddingBottom": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontStyle": "normal",
  "id": "MainViewer",
  "height": "100%",
  "toolTipShadowVerticalLength": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBorderRadius": 0,
  "playbackBarBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "paddingTop": 0,
  "playbackBarOpacity": 1,
  "toolTipFontSize": 12,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadHeight": 15,
  "toolTipTextShadowColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6"
 },
 {
  "children": [
   {
    "itemThumbnailWidth": 100,
    "backgroundOpacity": 0.2,
    "itemBackgroundOpacity": 0,
    "verticalAlign": "top",
    "itemBorderRadius": 0,
    "itemBackgroundColorDirection": "vertical",
    "backgroundColor": [
     "#000000"
    ],
    "itemOpacity": 1,
    "itemLabelPosition": "bottom",
    "itemThumbnailOpacity": 1,
    "itemLabelFontSize": 14,
    "itemLabelGap": 5,
    "borderRadius": 5,
    "itemMode": "normal",
    "gap": 10,
    "selectedItemLabelFontWeight": "bold",
    "maxWidth": 800,
    "itemThumbnailShadow": true,
    "itemThumbnailHeight": 75,
    "class": "ThumbnailList",
    "horizontalAlign": "left",
    "playList": "this.playList_3F12476A_2CA5_B248_41B8_211C808FDDD0",
    "itemThumbnailShadowOpacity": 0.8,
    "itemThumbnailShadowBlurRadius": 4,
    "itemThumbnailBorderRadius": 5,
    "itemLabelFontFamily": "Arial",
    "itemPaddingRight": 3,
    "itemLabelFontStyle": "normal",
    "scrollBarMargin": 2,
    "itemThumbnailShadowVerticalLength": 3,
    "backgroundColorDirection": "vertical",
    "paddingRight": 20,
    "itemVerticalAlign": "middle",
    "itemLabelFontWeight": "normal",
    "itemLabelFontColor": "#FFFFFF",
    "minHeight": 0,
    "itemBackgroundColorRatios": [],
    "itemPaddingTop": 3,
    "paddingLeft": 20,
    "itemPaddingLeft": 3,
    "paddingBottom": 10,
    "layout": "horizontal",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemThumbnailScaleMode": "fit_outside",
    "itemThumbnailShadowColor": "#000000",
    "scrollBarWidth": 10,
    "maxHeight": 600,
    "borderSize": 0,
    "itemHorizontalAlign": "center",
    "itemThumbnailShadowSpread": 1,
    "itemBackgroundColor": [],
    "itemPaddingBottom": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelTextDecoration": "none",
    "itemLabelHorizontalAlign": "center",
    "paddingTop": 10,
    "backgroundColorRatios": [
     0
    ],
    "minWidth": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "shadow": false
   }
  ],
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "verticalAlign": "bottom",
  "borderRadius": 0,
  "gap": 10,
  "height": 200,
  "overflow": "visible",
  "horizontalAlign": "center",
  "class": "Container",
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "paddingLeft": 0,
  "minHeight": 20,
  "paddingBottom": 0,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "bottom": 0,
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "left": 0,
  "minWidth": 20,
  "scrollBarOpacity": 0.5,
  "scrollBarVisible": "rollOver",
  "shadow": false,
  "right": 0
 }
], 
 "start": "this.set('mute', true); this.syncPlaylists([this.playList_3F12476A_2CA5_B248_41B8_211C808FDDD0,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "contentOpaque": false,
 "verticalAlign": "top",
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "existsKey": function(key){  return key in window; },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; }
 },
 "borderRadius": 0,
 "gap": 10,
 "overflow": "visible",
 "class": "Player",
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "width": "100%",
 "height": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "minHeight": 20,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "rootPlayer",
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadow": false
})